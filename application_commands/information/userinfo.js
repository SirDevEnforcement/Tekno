const Discord = require('discord.js')

module.exports = {
   name: "userinfo",
	 description: "Get information on a user",
	 options: [
		 {
			 name: 'user',
			 description: 'Whos your user?',
			 type: 'USER',
			 required: false
		 }
	 ],
	 run: async(client, interaction) => {

		 const user = interaction.options.getUser('user') || interaction.user;

		 const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};
     const userFlags = user.flags.toArray();
		 const flaggs = userFlags.length ? userFlags.map(flag => flags[flag]).join(' | ') : 'None'

		 

		 const embed = new Discord.MessageEmbed()
		 .setAuthor(user.username, user.displayAvatarURL({format: 'png', dynamic: true}))
		 .addField('ID', `\`\`\`${user.id}\`\`\``)
		 .addField('Server Nickname', `\`\`\`${user.nickname || 'None'}\`\`\``, true)
		 .addField('Discriminator', `\`\`\`${user.discriminator}\`\`\``, true)
		 .addField('Animated Avatar', `\`\`\`${user.displayAvatarURL().endsWith(['.gif', '.apng']) ? 'True' : 'False'}\`\`\``, true)
		 .addField('Server Owner', `\`\`\`${interaction.guild.ownerId === user.id ? 'True' : 'False'}\`\`\``, true)
		 .addField('Bot Account', `\`\`\`${user.bot ? 'True' : 'False'}\`\`\``, true)
		 .addField('Created', `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`)
			 .addField('Badges', `\`\`\`${flaggs}\`\`\``)
		 .setThumbnail(user.displayAvatarURL({format: 'png', dynamic: true}))
		 .setColor('#2f3136')

		 interaction.reply({embeds: [embed]})
		 
	
	 }
}