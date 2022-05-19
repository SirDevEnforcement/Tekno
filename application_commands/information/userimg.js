const { MessageEmbed, MessageAttachment } = require("discord.js");

const { read, AUTO, MIME_PNG } = require("jimp");
const { createCanvas, registerFont } = require("canvas");

const moment = require("moment");

module.exports = {
  name: "userimg",
  description: "Generate a banner for the user (with their id)",
  options: [
    {
      name: "id",
      description: "User ID.",
      type: "STRING",
      required: true,
    },
  ],

  run: async ( client, interaction ) => {

    const id = interaction.options.getString("id")

    const user = await client.users.fetch(id);

    interaction.reply('Please wait...')

    //////////////////// Canvas

    const canvas = createCanvas(885, 365);
    const ctx = canvas.getContext("2d");

    registerFont("./Fonts/Roboto-Bold.ttf", {
      family: "Bold",
    });
    registerFont("./Fonts/Roboto-BoldItalic.ttf", {
      family: "Italic",
    });
    registerFont("./Fonts/Roboto-Medium.ttf", {
      family: "Medium",
    });
    registerFont("./Fonts/Roboto-Black.ttf", {
      family: "Black",
    });

    ctx.font = "100px Black";
    ctx.textAlign = "left";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(user.username, 310, 160);

    ctx.font = "60px Medium";
    ctx.textAlign = "left";
    ctx.fillStyle = "#c7c7c7";
    ctx.fillText(`#${user.discriminator}`, 308, 214);

    ctx.font = "23px Italic";
    ctx.textAlign = "center";
    ctx.fillStyle = "#c7c7c7";
    ctx.fillText(`${moment(user.createdAt).format("MMM DD, YYYY")}`, 785, 282);

    ctx.font = "35px Bold";
    ctx.textAlign = "left";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(interaction.user.username, 76, 345);

    ctx.font = "35px Bold";
    ctx.textAlign = "right";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(interaction.guild.name, 811, 345);

    const canvasJimp = await read(canvas.toBuffer());
    const base = await read("./Images/UserBase.png");
    const profile = await read("./Images/User-Profile.png");
    const avatarBackground = await read(
      user.avatarURL({ format: "png", size: 1024 })
    );
    const avatarProfile = await read(
      user.avatarURL({ format: "png", size: 256 })
    );
    const intUserAvatar = await read(
      interaction.user.avatarURL({ format: "png", size: 56 })
    );
    const guildIcon = await read(
      `https://tekno-bot.repl.co/assets/BotLogo.png`
    );

    //////////////////// Badges

    const badges = []

    const flags = (user.flags || await user.fetchFlags()).toArray()

    for (let i = 0; i < flags.length; i++) {
      let badge = await read(`./Images/${flags[i]}.png`)
      badges.push(badge)
    }
    
    //////////////////// Jimp

    avatarBackground.resize(930, AUTO);
    avatarBackground.blur(15);
    base.composite(avatarBackground, 0, -345);
    base.composite(profile, 0, 0);
    base.composite(canvasJimp, 0, 0);

    avatarProfile.resize(250, AUTO);
    avatarProfile.circle();
    base.composite(avatarProfile, 35, 27);

    intUserAvatar.resize(45, AUTO);
    intUserAvatar.circle();
    base.composite(intUserAvatar, 21, 312);

    guildIcon.resize(45, AUTO);
    guildIcon.circle();
    base.composite(guildIcon, 821, 312);

    let x = 810
    for (let i = 0; i < badges.length; i++) {
      badges[i].resize(60, AUTO)
      badges[i].shadow({size: 1, opacity: 0.3, y: 3, x: 0, blur: 2})
      base.composite(badges[i], x, 5)
      x -= 65
    }

    //////////////////// Others

    const buffer = await base.getBufferAsync(MIME_PNG);

    const attachment = new MessageAttachment(buffer, "Img.png");

    interaction.followUp({
      files: [attachment]
    });
  },
}