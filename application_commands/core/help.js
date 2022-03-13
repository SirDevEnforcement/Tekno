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

const create_mh = require(`../../functions/menu.js`);
let dirr;

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

                "fun": "<:Tekno_Rocket:951555867365474354>",
                "core": "<:Tekno_Robot:951526699634397234>",
                "utility": "<:Tekno_Pencil:951526699634401290>",
                "moderation": "<:Tekno_Moderator:951526699638587422>",
                "information": '<:Tekno_TabButton:951526699693133854>',
                "music": '<:Tekno_Sound:951556625192353874>',
                "profile": '<:Tekno_Member:951526699663773888>',
                "animals": '<:Tekno_WumpusBlurpleWave:951555877620580392>', 
                "anime": '<:Tekno_Happy:951557629115777094>',
		            "games": "<:Tekno_Tab:951526699638616204>",
							  "config": "<:Tekno_Cross:951526699663761529>",
							  "soundboard": "<:Tekno_Music:951526699751841823>"
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

        }
    }