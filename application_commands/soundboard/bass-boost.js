const Discord = require('discord.js')

module.exports = {
   name: "bass-boost",
	 description: "Yes",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "bass-boost") //Sound
	
	 }
}