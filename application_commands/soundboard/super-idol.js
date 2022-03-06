const Discord = require('discord.js')

module.exports = {
   name: "super-idol",
	 description: "<Insert chinese words here>",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "super-idol") //Sound
	
	 }
}