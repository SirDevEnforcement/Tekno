const Discord = require('discord.js');
const DB = require('../../Schemas/AfkDB')
module.exports = async(client) => {
	client.on('messageCreate', async message => {
		if(message.author.bot) return;

		if(message.mentions.members.size) {
			const embed = new Discord.MessageEmbed()
			.setColor('#2f3136')

			message.mentions.members.forEach((m) => {
				DB.findOne({GuildID: message.guild.id, UserID: m.id}, async(err, data) => {
					if(err) throw err;
					if(data) embed.setDescription(`${m} went AFK <t:${data.Time}:R>!\n\nReason: ${data.Status}`)

					return message.reply({embeds: [embed]})
				})
			})
		}
		
	})
}