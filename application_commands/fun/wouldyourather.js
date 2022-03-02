const Discord = require('discord.js');
const suggy = require('suggy')

module.exports = {
   name: "wouldyourather",
	 description: "Would you, or would you not?",
	 run: async(client, interaction) => {

		 suggy.wyr(interaction, {
   emoji_a: "<:A_:947145634518032474>",
   emoji_b: "<:B_:947145654470336583>",
   time: 60,
   blockmsg: '{user} can only use these buttons'
 })
	
	 }
}