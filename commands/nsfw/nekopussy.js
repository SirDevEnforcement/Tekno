const { MessageEmbed } = require("discord.js");
const NSFW = require("discord-nsfw");

module.exports = {
  name: "pussy",
  aliases: ["nekpuss"],
  description: "Shows a hot pussy pic :hot_face:.",

  run: async (client, message, args, Discord) => {
    const nsfw = new NSFW();
    if (!message.channel.nsfw) {
      const embed = new MessageEmbed()
        .setTitle(`Not NSFW Channel`)
        .setColor("DARK_PURPLE")
        .setDescription(
          "We cant send nsfw command in text channels you need a **nsfw channel** to run this command"
        ).setImage("https://media.discordapp.net/attachments/721019707607482409/855827123616481300/nsfw.gif");;
      message.channel.send({ embeds: [embed] });
    } else {
      const image = await nsfw.nekopussy();
      const embed = new MessageEmbed()
        .setTitle(`Pussy Image`)
        .setColor("DARK_PURPLE")
        .setImage(image)
        .setFooter(
          `Requested by ${message.author.username}`,
          message.author.displayAvatarURL({
            dynamic: true,
            format: "png",
            size: 2048,
          })
        );
      message.channel.send({ embeds: [embed] });
    }
  },
};