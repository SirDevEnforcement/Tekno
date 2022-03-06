const Discord = require('discord.js')

module.exports = {
   name: "pong",
	 description: "Play the Discord Notification sound",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "discord-notification") //Sound
	
	 }
}