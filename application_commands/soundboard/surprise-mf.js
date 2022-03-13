const Discord = require('discord.js')

module.exports = {
   name: "surprise-mf",
	 description: "Surprise motherfucker!",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*
		 const embed = new Discord.MessageEmbed()
		 .setColor('#2f3136')
		 .setDescription('🔊')
		 interaction.reply({embeds: [embed], ephemeral: true})

sound.play(channel, "surprise-motherfucker") //Sound
	
	 }
}