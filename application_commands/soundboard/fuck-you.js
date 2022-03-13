const Discord = require('discord.js')

module.exports = {
   name: "fuck-you",
	 description: "Fuck you!",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*
		 const embed = new Discord.MessageEmbed()
		 .setColor('#2f3136')
		 .setDescription('🔊')
		 interaction.reply({embeds: [embed], ephemeral: true})

sound.play(channel, "fuck-you") //Sound
	
	 }
}