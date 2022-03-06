const Discord = require('discord.js')

module.exports = {
   name: "error",
	 description: "Play the error sound",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "error") //Sound
	
	 }
}