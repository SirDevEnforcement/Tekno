const Discord = require('discord.js')

module.exports = {
   name: "channel-topic",
	 description: "Set the channel's topic",
	 options: [
		 {
			 name: 'topic',
			 description: 'Whats your topic?',
			 type: 'STRING',
			 required: true
		 }
	 ],
	 run: async(client, interaction) => {

		 const channelId = interaction.channel.id;

		 const channel = interaction.guild.channels.get(channelId)

		 const topic = interaction.options.getString('topic')

		 channel.setTopic(topic).then(() => interaction.reply('Done!'))
	
	 }
}