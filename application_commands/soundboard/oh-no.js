const Discord = require('discord.js')

module.exports = {
   name: "oh-no",
	 description: "Oh no!",
	 run: async(client, interaction) => {

		 const SoundBoard = require("djs-soundboard")

let sound = new SoundBoard()

let channel = interaction.member.voice.channel // required*

sound.play(channel, "oh-no-no-no-tik-tok-song-sound-effect") //Sound
	
	 }
}