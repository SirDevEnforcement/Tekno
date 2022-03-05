const Discord = require('discord.js')

module.exports = {
   name: "suggest",
	 description: "Suggest something for the bot!",
	 options: [
		 {
			 name: 'suggestion',
			 description: 'Whats your amazing idea?',
			 type: 'STRING',
			 required: true
		 },
		 {
			 name: 'purpose',
			 description: 'Why?',
			 type: 'STRING',
			 required: true
		 }
	 ],
	 run: async(client, interaction) => {

		 const { options } = interaction;

		 const suggestion = options.getString('suggestion')
		 const purpose = options.getString('purpose');

		 const embed = new Discord.MessageEmbed()
		 .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({format: 'png', dynamic: true}))
		 .setColor('#2f3136')
		 .setDescription('<:yes:949390661537382410> - Yes\n<:no:949390661570928710> - No')
		 .addField('Suggestion', suggestion.toString(), true)
		 .addField('Purpose', purpose.toString(), true)

		 const channel = client.channels.cache.get('894164132553699390')

		 const msg = await channel.send({embeds: [embed]})
		 msg.react('<:yes:949390661537382410>')
		 msg.react('<:no:949390661570928710>')
		 

		 
	 }
}