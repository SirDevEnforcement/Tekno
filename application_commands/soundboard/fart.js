const Discord = require('discord.js')

module.exports = {
   name: "fart",
	 description: "It just... came out?",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "fart") //Sound
	
	 }
}