const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "warns",
  category: "🛠️ Moderation",
  run: async (client, message, args) => {

    const user = message.mentions.members.first() || message.author;
let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

 if(warnings === null) { warnings = 0 };

 const warnreason = db.get(`warnreason_${message.guild.id}_${user.id}`)

 const embed = new MessageEmbed()
 .setDescription(`Warn Amount: \`${warnings}\``)
 .addField(`Latest Warn`, warnreason)
 message.channel.send(embed)

  
  
}}