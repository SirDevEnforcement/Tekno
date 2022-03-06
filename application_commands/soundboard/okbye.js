const Discord = require('discord.js')

module.exports = {
   name: "okbye",
	 description: "Bye",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "okbye") //Sound
	
	 }
}