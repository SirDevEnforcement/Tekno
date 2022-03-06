const Discord = require('discord.js')

module.exports = {
   name: "rickroll",
	 description: "Never gonna give you up",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "rickroll") //Sound
	
	 }
}