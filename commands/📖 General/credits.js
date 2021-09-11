const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "credits",
  category: 'General',
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle('Thank you!')
    .setDescription(`These people will be listed, along with what they have contributed to the bot!`)
    .addField(`Scorprian`, ` Made [\`  Vetrilox Classic  \`](https://github.com/ScorprianDev/Vetrilox/blob/master/index.js) public, allowing me to add commands like \`whois\` **&&** \`stats\``)
    .addField('mira ミラ ❤ ✨', ` Made [\`  Kanna  \`](https://github.com/MiraBellierr/Kannabotto) public, allowing me to add commands like \`serverinfo\` `)
    .addField('! BA', `Just a nice guy lol`)

    message.channel.send(embed)
  
  
}}