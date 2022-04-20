const {
    MessageEmbed,
    Message,
    Client,
	MessageButton,
	MessageActionRow
} = require("discord.js");
const {
    readdirSync
} = require("fs");
let color = "#2f3136"
const commandInfo = require('../../utils/commandInfo')

const create_mh = require(`../../functions/menu.js`);
let dirr;

module.exports = {
    name: "help",
    description: "Shows all available bot commands",
    options: [
      {
        name: 'command',
        description: 'Command name',
        type: 'STRING',
        required: false
      }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String} args 
     * @returns 
     */
    run: async (client, interaction, args) => {
			const message = interaction;

      if(interaction.options.getString('command')) {
        interaction.reply({
                embeds: [commandInfo(client.slashcommands.get(interaction.options.getString("command")?.toLowerCase()))]
            })
      }
        let categories = [];
        let cots = [];


            let ignored = [
                "owner",
            ];

            const emo = {

                "fun": "<:Tekno_Rocket:951555867365474354>",
                "core": "<:Tekno_Robot:951526699634397234>",
                "utility": "<:Tekno_Pencil:951526699634401290>",
                "moderation": "<:Tekno_Developer:951555867260645536>",
                "information": '<:Tekno_Messages:951543621897834536>',
                "music": '<:Tekno_Music:951526699751841823>',
                "animals": '<:Tekno_Happy:951557629115777094>', 
		            "games": "<:Tekno_Desktop:959764498032496661>",
							  "config": "<:Tekno_Plus:951526700066406491>",
							  "soundboard": "<:Tekno_Sound:951556625192353874>",
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
							dirr = dir

                


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
							  .setDescription(`<:Tekno_Slash:951526699617644555> Use the Select Menu to get started!`)
                .setTimestamp()
							.setImage('https://cdn.discordapp.com/attachments/894164132385935396/936995900792905759/banner1.png')
                .setColor(color)
			
            let menus = create_mh(ccate);
            let msg1 = await message.reply({
                embeds: [embed],
                components: [menus.smenu],
							  fetchReply: true,
            }).then(async (msgg) => {

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
                            .setTitle(`${emo[dirr]} **${value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}** Commands`)
                            .addFields(catts)
                            .setColor(color)

                        await interaction.deferUpdate();

                        return interaction.followUp({
                            embeds: [combed],
													  ephemeral: true
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

			client.modlogs({
			 Member: interaction.user,
			 Action: 'HELP (Slash Command)',
		 }, interaction)

        }
    }