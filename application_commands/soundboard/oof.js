const Discord = require('discord.js')

module.exports = {
   name: "oof",
	 description: "Play the OOF sound",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "roblox-death") //Sound
	
	 }
}