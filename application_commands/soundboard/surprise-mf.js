const Discord = require('discord.js')

module.exports = {
   name: "surprise-mf",
	 description: "Surprise motherfucker!",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "surprise-motherfucker") //Sound
	
	 }
}