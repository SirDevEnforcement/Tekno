const Discord = require('discord.js');
const { version } = require('discord.js');
const os = require('os')
const si = require('systeminformation');

module.exports = {
  name: "stats",
  aliases: ['s'],
      description: "Statistics on the bot!", 
  run: async (client, message, args) => {

		const embed = new Discord.MessageEmbed()
		.addField(`General`, `Username + Discriminator: \`${client.user.username}\`#\`${client.user.discriminator}\`\nPrefix: \`t! \``, true)

		message.channel.send({embeds: [embed]})
    
}}