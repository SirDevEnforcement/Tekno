const chalk = require(`chalk`);
const {
    MessageSelectMenu,
    MessageActionRow,
	MessageButton
} = require(`discord.js`);

const create_mh = (
    array
) => {

    if (!array) throw new Error(chalk.red.bold(`The options were not provided! Make sure you provide all the options!`));
    if (array.length < 0) throw new Error(chalk.red.bold(`The array has to have atleast one thing to select!`));
    let select_menu;

    let id = `help-menus`;

    let menus = [];

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


    array.forEach(cca => {
        let name = cca;
        let sName = `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`
        let tName = name.toLowerCase();
        let fName = name.toLowerCase();
        let e = emo

        return menus.push({
            label: sName,
            value: fName,
            emoji: e[tName]
        })
    });

    let chicken = new MessageSelectMenu()
        .setCustomId(id)
        .setPlaceholder(`Choose the command category`)
        .addOptions(menus)

    select_menu = new MessageActionRow()
        .addComponents(
            chicken
        );


    return {
        smenu: select_menu,
        sid: id
    }
}

module.exports = create_mh;