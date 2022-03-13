const Discord = require('discord.js');
const Levels = require('discord-xp');
const canvacord = require('canvacord');

module.exports = {
   name: "rank",
	 description: "Get yours (or someone elses) rank!",
	 options: [
		 {
			 name: 'user',
			 description: 'Mention the user',
			 type: 'USER',
			 required: false
		 }
	 ],
	 run: async(client, interaction) => {

		 const target = interaction.options.getUser('user') || interaction.user

		 const user = Levels.fetch(target.id, interaction.guild.id);

		 const neededXp = Levels.xpFor(parseInt(user.level) + 1)

		 if(!user) interaction.reply({content: 'This user isn\'t on the system!'})

		 const rank = new canvacord.Rank()
		 .setAvatar(target.displayAvatarURL({format: 'png', dynamic: false}))
		 .setCurrentXP(user.xp)
		 .setRequiredXP(neededXp)
.setStatus('online')
		 .setProgressBar('#5865F2', 'COLOR')
		 .setUsername(target.username)
		 .setDiscriminator(target.discriminator)

		 rank.build()
		 .then(data => {
			 const attachment = new Discord.MessageAttachment(data, 'rankcard.png')
			 interaction.reply({files: [attachment]})
		 })
	
	 }
}