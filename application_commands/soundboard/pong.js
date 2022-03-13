const Discord = require('discord.js')

module.exports = {
   name: "pong",
	 description: "Play the Discord Notification sound",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*
		 const embed = new Discord.MessageEmbed()
		 .setColor('#2f3136')
		 .setDescription('🔊')
		 interaction.reply({embeds: [embed], ephemeral: true})

sound.play(channel, "discord-notification") //Sound
	
	 }
}