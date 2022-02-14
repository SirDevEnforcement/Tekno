const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const {
    readdirSync
} = require("fs");
let color = "BLURPLE";

const create_mh = require(`../../functions/menu.js`);

module.exports = {
    name: "help",
    description: "Shows all available bot commands",
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String} args 
     * @returns 
     */
    run: async (client, interaction, args) => {
      const prefix = client.prefix;
			const message = interaction;

        let categories = [];
        let cots = [];


            let ignored = [
                "owner",
            ];

            const emo = {

                "fun": "<:fun:927160213142913084>",
                "core": "<:robot:926838334888763453>",
                "utility": "<:discovery:926837134348939296>",
                "moderation": "<:staff:926838334788083793>",
                "image": '<:image:927154625033945109>',
                "information": '<:rules:926839487953252373>',
                "music": '<:music:927155320436961350>',
                "profile": '<:members:926839973171302400>',
                "nsfw": '<:textchannellocked:926837134218907648>',
                "soundboard": '<:soundboard:927155497885384755>',
                "animals": '🐶', 
                "anime": '💮',
                "activities": '<:activities:927155715796267028>',
                "giveaways" : '<:gift:926839973158735952>',
							  "games": "<:games:927156041714651136>"
            }

            let ccate = [];

            readdirSync("./application_commands/").forEach((dir) => {
                if (ignored.includes(dir.toLowerCase())) return;
                const commands = readdirSync(`./application_commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );

                if (ignored.includes(dir.toLowerCase())) return;

                let name = `${emo[dir]} ${dir[0].toUpperCase()}${dir.slice(1).toLowerCase()}`;

                let nome = dir.toUpperCase();

                let cats = new Object();

                


                cats = {
                    name: name,
                    value: `\`${prefix}help ${dir.toLowerCase()}\``,
                    inline: true
                }


                categories.push(cats);
                ccate.push(nome);
            });

            const embed = new MessageEmbed()
                .setTitle(`<:logo:937325392363135026> Help Menu`)
                .setFooter(
                    `Requested by ${interaction.user.tag}`,
                    interaction.user.displayAvatarURL({
                        dynamic: true
                    })
                )
							  .setDescription(`<:slash:942739284300021760> Use the Select Menu to get started!\n<:DiscordLogo:942740075828097055> [Join Our Support Server](https://discord.gg/uEnRY7jR)\n<:invite:942740886272503808> [Invite Me](https://tekno-the-bot.repl.co/invite)`)
                .setTimestamp()
							.setImage('https://cdn.discordapp.com/attachments/894164132385935396/936995900792905759/banner1.png')
                .setColor(color)



            let menus = create_mh(ccate);
            let msg1 = await message.reply({
                embeds: [embed],
                components: menus.smenu,
							  fetchReply: true,
            }).then((msgg) => {

                const menuID = menus.sid;

                const select = async (interaction) => {
                    if (interaction.customId != menuID) return;

                    let {
                        values
                    } = interaction;

                    let value = values[0];

                    let catts = [];

                    readdirSync("./application_commands/").forEach((dir) => {
                        if (dir.toLowerCase() !== value.toLowerCase()) return;
                        const commands = readdirSync(`./application_commands/${dir}/`).filter((file) =>
                            file.endsWith(".js")
                        );


                        const cmds = commands.map((command) => {
                            let file = require(`../../application_commands/${dir}/${command}`); 

                            if (!file.name) return "No command name.";

                            let name = file.name.replace(".js", "");



                            let des = client.slashcommands.get(name).description;
                            let emo = client.slashcommands.get(name).emoji;
                            let emoe = emo ? `${emo} - ` : ``;

                            let obj = {
                                cname: `${emoe}\`${name}\``,
                                des
                            }

                            return obj;
                        });

                        let dota = new Object();

                        cmds.map(co => {
                            if (co == undefined) return;

                            dota = {
                                name: `${cmds.length === 0 ? "In progress." : co.cname}`,
                                value: co.des ? co.des : `No Description`,
                                inline: true,
                            }
                            catts.push(dota)
                        });

                        cots.push(dir.toLowerCase());
                    });

                    if (cots.includes(value.toLowerCase())) {
                        const combed = new MessageEmbed()
                            .setTitle(`<:logo:937325392363135026> **${value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}** Commands`)
                            .addFields(catts)
                            .setColor(color)

                        await interaction.deferUpdate();

                        return interaction.message.edit({
                            embeds: [combed],
                            components: menus.smenu
                        })
                    };

                };

const filter = async interaction => {
            return true;
        }

                const collector = msgg.createMessageComponentCollector({
                    filter,
                    componentType: "SELECT_MENU"
                });
                collector.on("collect", select);
                collector.on("end", () => null);

            });

        }
    }