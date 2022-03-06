const Discord = require('discord.js')

module.exports = {
   name: "fucked-up",
	 description: "He knew he fucked up...",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "it-was-at-this-moment-that-he-he-knew-he-f-cked-up") //Sound
	
	 }
}