const Discord = require('discord.js')

module.exports = {
   name: "voicekick",
	 description: "Kick a member from the voice channel!",
	 options: [
		 {
			 name: 'member',
			 description: 'The member to kick!',
			 type: 'USER',
			 required: true
		 }
	 ],
	 run: async(client, interaction) => {

		 const user = interaction.options.getMember('member');

		 user.voice.kick({reason: `Kicked by ${interaction.user.tag}`})

		 const embed = new Discord.MessageEmbed()
		 .setColor('#2f3136')
		 .setDescription(`<:Tekno_Sound:951556625192353874> Kicked ${member} from ${interaction.user.voice.channel}`)
	
	 }
}