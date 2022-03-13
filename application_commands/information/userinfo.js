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
		 const member = interaction.options.getMember('user') || interaction.member;

		 const flags = user.flags.toArray().join(" | ")
			.replace("EARLY_VERIFIED_DEVELOPER", "<:verifiedbotdev:944538584273276968>")
			.replace("HOUSE_BALANCE", "<:balance:949732244136804372>")
			.replace("HOUSE_BRILLIANCE", "<:brilliance:949732280463675443>")
			.replace("HOUSE_BRAVERY", "<:bravery:949732280379797574>")
			.replace("DISCORD_PARTNER", "<:partner:876963499249635328>")
			.replace("EARLY_SUPPORTER", "<:wumpus:943484322978103356>")
			.replace("NITRO_CLASSIC", "<:nitro:949733151964557394>")
			.replace("PARTNERED_SERVER_OWNER", "<:partner:949732294070001694>")
			.replace("DISCORD_EMPLOYEE", "<:staff:876963499509682176>")
			.replace("HYPESQUAD_EVENTS", "<:event:876963497211224064>")
			.replace("BUGHUNTER_LEVEL_2", "<:bug1:949732280757276713>")
			.replace("BUGHUNTER_LEVEL_1", "<:bug2:949732280505602109>")
			.replace("BOT_HTTP_INTERACTIONS", "")
			.replace("EARLY_DEVELOPER", "<:verifiedbotdev:944538584273276968>")
			.replace("VERIFIED_BOT", "")
			.replace(/ +/g, " ");

		 const isDev = 
			 ['815878862075985971', '788889758931353641', '497200251661320212'].includes(user.id)
		 const isStaff = ['691648449967554590', '815878862075985971', '78888975893135364', '497200251661320212'].includes(user.id)
		 const roles = member.roles.cache
			.filter(r => r.id !== interaction.guild.id)
			.map(r => r).join(' | ') || 'None';

		 

		 const embed = new Discord.MessageEmbed()
		 .setTitle(`${user.username}#${user.discriminator} ${isDev ? '<:developer:943484323150065704>' : ' '} ${isStaff ? '<:moderator:944538576505430036>': ' '}`)
		 .addField('<:Tekno_Discord:951543783877668976> ID', `\`\`\`${user.id}\`\`\``)
		 .addField('<:Tekno_Member:951526699663773888> Server Nickname', `\`\`\`${member.nickname || 'None'}\`\`\``, true)
		 .addField('<:Tekno_Channel:951526699672166410> Discriminator', `\`\`\`${user.discriminator}\`\`\``, true)
		 .addField('<:Tekno_Nitro:951526699667968100> Animated Avatar', `\`\`\`${user.displayAvatarURL().endsWith(['.gif', '.apng']) ? 'True' : 'False'}\`\`\``, true)
		 .addField('<:Tekno_Crown:951526699332403272> Server Owner', `\`\`\`${interaction.guild.ownerId === user.id ? 'True' : 'False'}\`\`\``, true)
		 .addField('<:Tekno_Robot:951526699634397234> Bot Account', `\`\`\`${user.bot ? 'True' : 'False'}\`\`\``, true)
		 .addField('<:Tekno_Moderator:951526699638587422> Bot Staff', `\`\`\`${isStaff ? 'True' : 'False'}\`\`\``, true)
		 .addField('<:Tekno_Enter:951526699659579392> Created', `<t:${Math.floor(user.createdTimestamp / 1000)}:R> (<t:${Math.floor(user.createdTimestamp / 1000)}:d>)`, true)
			 .addField('<:Tekno_Clock:951526699697311755> Joined Server', `<t:${Math.floor(member.joinedTimestamp / 1000)}:R> (<t:${Math.floor(member.joinedTimestamp / 1000)}:d>)`, true)
			 .addField('<:Tekno_Mention:951526699747663902> Roles', roles)
			 .addField('<:Tekno_Flag:951526699663753246> Badges', `${flags}`)
		 .setThumbnail(user.displayAvatarURL({format: 'png', dynamic: true}))
		 .setColor('#2f3136')
		 console.log(member)

		 interaction.reply({embeds: [embed]})
		 
	
	 }
}