const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const {
    readdirSync
} = require("fs");
let color = "#2f3136"

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
			const message = interaction;

        let categories = [];
        let cots = [];


            let ignored = [
                "owner",
            ];

            const emo = {

                "fun": "<:rocket:943484323057774612>",
                "core": "<:bot:943484322739019778>",
                "utility": "<:compass:943484322852266095>",
                "moderation": "<:developer:943484323150065704>",
                "image": '<:image:943487918566174762>',
                "information": '<:rules:943484323200389150>',
                "music": '<:sound:943484323145859072>',
                "profile": '<:members:943484322906767360>',
                "animals": '<:wumpus:943484322978103356>', 
                "anime": '<:anime:943484322814500914>',
		            "games": "<:plane:943484322919362641>",
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
                    value: `\`/help ${dir.toLowerCase()}\``,
                    inline: true
                }


                categories.push(cats);
                ccate.push(nome);
            });

            const embed = new MessageEmbed()
                .setAuthor(`Help Menu`, client.user.displayAvatarURL({format: 'png'}))
                .setFooter(
                    `Requested by ${interaction.user.tag}`,
                    interaction.user.displayAvatarURL({
                        dynamic: true
                    })
                )
							  .setDescription(`<:slash:943489715259203605> Use the Select Menu to get started!\n<:discord:943484322923561011> [Join Our Support Server](https://discord.gg/uEnRY7jR)\n<:link:943484322894184458> [Invite Me](https://tekno-the-bot.repl.co/invite)`)
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
                            .setTitle(`<:logo:943489573781123103> **${value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}** Commands`)
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