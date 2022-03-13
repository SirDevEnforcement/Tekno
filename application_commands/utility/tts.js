const Discord = require('discord.js');


module.exports = {
   name: "tts",
	 description: "Google Text to Speech sound",
	 options: [
		 {
			 name: 'text',
			 description: 'null',
			 required: true,
			 type: 'STRING'
		 }
	 ],
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel

		 const embed = new Discord.MessageEmbed()
		 .setColor('#2f3136')
		 .setDescription('🔊')
		 interaction.reply({embeds: [embed], ephemeral: true})

sound.tts(channel, interaction.options.getString('text')) //Text

	
	 }
}