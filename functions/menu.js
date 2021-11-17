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

                "fun": "😃",
                "general": "📖",
                "utility": "⚙",
                "moderation": "⚒",
                "image": '📷',
                "levelling": '📈',
                "information": 'ℹ',
                "music": '🎶',
                "profile": '👤',
                "nsfw": '🔞',
                "soundboard": '🔊'
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