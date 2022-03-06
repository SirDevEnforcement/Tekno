const Discord = require('discord.js')

module.exports = {
   name: "enemy-spotted",
	 description: "Got him!",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "enemy-spotted") //Sound
	
	 }
}