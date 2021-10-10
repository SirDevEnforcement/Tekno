const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "credits",
    description: "Credits to people to who helped make the bot!", 
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle('Thank you!')
    .setDescription(`These people will be listed, along with what they have contributed to the bot!`)
    .addField(`Scorprian`, ` Made [\`  Vetrilox Classic  \`](https://github.com/ScorprianDev/Vetrilox/blob/master/index.js) public, allowing me to add commands like \`whois\` **&&** \`stats\``)
    .addField('mira ミラ ❤ ✨', ` Made [\`  Kanna  \`](https://github.com/MiraBellierr/Kannabotto) public, allowing me to add commands like \`serverinfo\` `)
    .addField('Danu', `Allowing me to use his/her/their emojis, making the bot more sophisticated. Join his/her server [\` here \`](https://discord.gg/aqR3eXKEnz)`)
    .addField('Aidan the Sister', `Helped make the bot!`)

    message.channel.send({ embeds: [embed] });
  
  
}}