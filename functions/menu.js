const chalk = require(`chalk`);
const {
    MessageSelectMenu,
    MessageActionRow
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
        smenu: [select_menu],
        sid: id
    }
}

module.exports = create_mh;