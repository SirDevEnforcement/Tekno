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
                "animals": '<:wumpus:942865327727996948>', 
                "anime": '<:china:942865339778215966>',
                "activities": '<:activities:927155715796267028>',
                "giveaways" : '<:gift:926839973158735952>',
							  "games": "<:games:927156041714651136>"
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