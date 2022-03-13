const Discord = require('discord.js');
const DB = require('../../Schemas/AfkDB')

module.exports = {
   name: "afk",
	 description: "Set yourself as AFK!",
	 options: [
		 {
			 name: 'set',
			 description: 'Set your AFK status',
			 type: 'SUB_COMMAND',
			 options: [
				 {
					 name: 'reason',
					 description: 'Why are you AFK?',
					 type: 'STRING',
					 required: true
				 }
			 ]
		 },
		 {
			 name: 'return',
			 description: 'Return from being AFK!',
			 type: 'SUB_COMMAND'
		 }
	 ],
	 run: async(client, interaction) => {

		 const { options, guildId, user, createdTimestamp } = interaction;

		 const embed = new client.Discord.MessageEmbed()
		 .setColor('#2f3136')

		 const status = options.getString('status');

		 try {

			 switch(options.getSubCommand()) {
				 case "set": {
					 await DB.findOneAndUpdate({GuildID: guildId, UserID: user.id, Status: status, Time: Math.floor(createdTimestamp / 1000)})

					 embed.setDescription(`Your AFK status has been set to: \`${status}\``)

					 interaction.reply({embeds: [embed]})
					 
				 }
				 case "return": {
					 await DB.deleteOne({GuildID: guildId, UserID: user.id})

					 embed.setDescription('Your AFK status has been removed')

					 interaction.reply({embeds: [embed]})
					 
				 }
			 }
			 
 		 } catch(e) {
			 console.log(e)
		 }
	
	 }
}