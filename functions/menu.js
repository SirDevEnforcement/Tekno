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
                "moderation": "<:Tekno_Developer:951555867260645536>",
                "information": '<:Tekno_Messages:951543621897834536>',
                "music": '<:Tekno_Music:951526699751841823>',
                "animals": '<:Tekno_Happy:951557629115777094>', 
		            "games": "<:Tekno_Desktop:959764498032496661>",
							  "config": "<:Tekno_Plus:951526700066406491>",
							  "soundboard": "<:Tekno_Sound:951556625192353874>",
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