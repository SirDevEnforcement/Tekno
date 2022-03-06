const Discord = require('discord.js')

module.exports = {
   name: "john-cena",
	 description: "AND HIS NAME IS JOHN CENA!",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "and-his-name-is-john-cena-1") //Sound
	
	 }
}