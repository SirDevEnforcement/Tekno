const { MessageEmbed } = require('discord.js');
let db = require('quick.db');
let premium = db.get(`premium`)

module.exports = {
  name: "help",
  timeout: 10000,
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setAuthor('Help Menu')
      .setDescription(` \`\`\`Prefix: t! \nDeveloper: DevEnforcement#0001 ( 585835814743834661 )\nServers: ${client.guilds.cache.size}\`\`\` \n **Commands + Categories are below!** \n \n `)
      .addField('\`📖\` General', ' \`help\`  \`sponsors\`  \`vote\`  \`policy\`  \`messages\`  \`emojis\`')
      .addField('\`😄\` Fun', ' \`binary\`  \`blurpify\`  \`corona\`   \`meme\`  \`weather\`  \`wink\`')
      .addField('\`🇮\` Information', '\`whois\`  \`avatar\`  \`serverinfo\`  \`servericon\`  \`stats\`')
      .addField('\`🛠️\` Moderation', '\`ban\`  \`kick\`  \`lock (on/off)\`  \`unban\`  \`hackban\`')
      .addField('\`⛏️\` Utility', '\`clear\`  \`ping\`  \`slowmode\`  \`timer\`  \`discriminator\`')
      .addField('\`❓\` Support', '\`bugreport\`  \`suggest\`')
      .addField('\`📷\` Image', '\`captcha\`  \`changemymind\`  \`deepfry\`  \`drake\`  \`tweet\`')
      .addField('\`🔨\` Auto Moderation', '\`capsdetection\`  \`linkdetection\`  \`sweardetection\`  \`ghostpingdetection\`')

    embed.addField('Links', `[\`   Privacy Policy   \`](https://docs.google.com/document/d/1If3gfCyGzFGk-J12ixk6_B_RR2XC2ZdrxAHNPCp5vhs/edit?usp=sharing) \` | \` [\`    Invite    \`](https://discord.com/oauth2/authorize?client_id=686177831998193694&permissions=3691359478&scope=bot) \` | \` [\`    Support Server    \`](https://discord.gg/8qnMgRUuHJ)`)

    embed.setFooter(`Tekno | ${client.commands.size} commands`, client.user.displayAvatarURL())




    message.channel.send(embed)
  }

}