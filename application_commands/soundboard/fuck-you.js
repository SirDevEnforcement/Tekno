const Discord = require('discord.js')

module.exports = {
   name: "fuck-you",
	 description: "Fuck you!",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "fuck-you") //Sound
	
	 }
}