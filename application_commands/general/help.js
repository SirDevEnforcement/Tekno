const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const {
    readdirSync
} = require("fs");
let color = "RANDOM";

const create_mh = require(`../../functions/menu.js`);

module.exports = {
    name: "help2",
    aliases: [`h2`],
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

        if (!args[0]) {


            let ignored = [
                "owner",
            ];

            const emo = {

                "fun": "<:fun:927160213142913084>",
                "general": "<:robot:926838334888763453>",
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

            readdirSync("./commands/").forEach((dir) => {
                if (ignored.includes(dir.toLowerCase())) return;
                const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );

                if (ignored.includes(dir.toLowerCase())) return;

                let name = `${emo[dir]} ${dir[0].toUpperCase()}${dir.slice(1).toLowerCase()}`;

                if(name === `${emo[dir]} Sfw`) {
                  name = `${emo[dir]} SFW`
                } else if(name === `${emo[dir]} Nsfw`) {
                  name = `${emo[dir]} NSFW`
                }

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
                .setTitle(`<:help:913104163372662825> Help Menu`)
                .setDescription(`>>> My prefix is \`/\`\nUse the menu to view commands!\nCommand Count: \`${client.commands.size}\` | Category Count: \`${client.categories.length}\``)
                .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp()
                .setColor(color)



            let menus = create_mh(ccate);
            let msg1 = await message.reply({
                embeds: [embed],
                components: menus.smenu
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

                            if (client.commands.get(name).hidden) return;


                            let des = client.commands.get(name).description;
                            let emo = client.commands.get(name).emoji;
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
                            .setTitle(`<:help:913104163372662825> **${value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}** Commands`)
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

            if (interaction.user.id !== interaction.user.id) {
                interaction.reply({
                    content: "<:cross:881238098871201802> Don't help other people to select the menu",
                    ephemeral: true
                });
                return false;
            };
            return true;
        }

                const collector = msgg.createMessageComponentCollector({
                    filter,
                    componentType: "SELECT_MENU"
                });
                collector.on("collect", select);
                collector.on("end", () => null);

            });

        } else {
            let catts = [];

            readdirSync("./commands/").forEach((dir) => {
                if (dir.toLowerCase() !== args[0].toLowerCase()) return;
                const commands = readdirSync(`./application_commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );


                const cmds = commands.map((command) => {
                    let file = require(`../../application_commands/${dir}/${command}`);

                    if (!file.name) return "No command name.";

                    let name = file.name.replace(".js", "");

                    if (client.commands.get(name).hidden) return;


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

            const command =
                client.commands.get(args[0].toLowerCase()) ||
                client.commands.find(
                    (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
                );

            if (!command) {
                const embed = new MessageEmbed()
                    .setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands!`)
                    .setColor("RED");
                return await message.reply({
                    embeds: [embed],
                    allowedMentions: {
                        repliedUser: false
                    },
                });
            }

            const embed = new MessageEmbed()
                .setTitle(`Command Details:`)
                .addField(
                    "Command:",
                    command.name ? `\`${command.name}\`` : "No name for this command."
                )
                .addField(
                    "Aliases:",
                    command.aliases ?
                    `\`${command.aliases.join("` `")}\`` :
                    "No aliases for this command."
                )
                .addField(
                    "Usage:",
                    command.usage ?
                    `\`${prefix}${command.name} ${command.usage}\`` :
                    `\`${prefix}${command.name}\``
                )
                .addField(
                    "Command Description:",
                    command.description ?
                    command.description :
                    "No description for this command."
                )
                .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp()
                .setColor(color);
            return await message.reply({
                embeds: [embed]
            });
        }
    },
};