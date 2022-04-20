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
			.replace("EARLY_VERIFIED_DEVELOPER", "<:Tekno_VerifiedDeveloper:953357476231798784>")
			.replace("HOUSE_BALANCE", "<:Tekno_Balance:951541161326153778>")
			.replace("HOUSE_BRILLIANCE", "<:Tekno_Brilliance:951541161431011408>")
			.replace("HOUSE_BRAVERY", "<:Tekno_Bravery:951541161103876148>")
			.replace("DISCORD_PARTNER", "<:Tekno_Partner:951555936168837211>")
			.replace("EARLY_SUPPORTER", "<:Tekno_WumpusBlurpleWave:951555877620580392>")
			.replace("NITRO_CLASSIC", "<:Tekno_Nitro:951526699667968100>")
			.replace("PARTNERED_SERVER_OWNER", "<:Tekno_Partner:951555936168837211>")
			.replace("DISCORD_EMPLOYEE", "<:Tekno_DiscordStaff:953357476265357332>")
			.replace("HYPESQUAD_EVENTS", "<:Tekno_HypesquadEvents:951541161317777418>")
			.replace("BUGHUNTER_LEVEL_2", "<:Tekno_BugHunterGold:953357476206641213>")
			.replace("BUGHUNTER_LEVEL_1", "<:Tekno_BugHunter:953357475829137409>")
			.replace("BOT_HTTP_INTERACTIONS", "<:Tekno_Robot:951526699634397234>")
			.replace("EARLY_DEVELOPER", "<:Tekno_VerifiedDeveloper:953357476231798784>")
			.replace("VERIFIED_BOT", "<:Tekno_Robot:951526699634397234>")
			.replace(/ +/g, " ");
		 const isDev = 
			 ['815878862075985971', '788889758931353641', '497200251661320212'].includes(user.id)
		 const isStaff = ['691648449967554590', '815878862075985971', '78888975893135364', '497200251661320212'].includes(user.id)
		 const roles = member.roles.cache
			.filter(r => r.id !== interaction.guild.id)
			.map(r => r).join(' | ') || 'None';

		 

		 const embed = new Discord.MessageEmbed()
		 .setTitle(`${user.username}#${user.discriminator} ${isDev ? '<:Tekno_Developer:951555867260645536>' : ''} ${isStaff ? '<:Tekno_Moderator:951526699638587422>': ''}`)
		 .addField('<:Tekno_Discord:951543783877668976> ID', `\`\`\`${user.id}\`\`\``)
		 .addField('<:Tekno_Member:951526699663773888> Server Nickname', `\`\`\`${member.nickname || 'None'}\`\`\``, true)
		 .addField('<:Tekno_Channel:951526699672166410> Discriminator', `\`\`\`${user.discriminator}\`\`\``, true)
		 .addField('<:Tekno_Nitro:951526699667968100> Animated Avatar', `\`\`\`${user.displayAvatarURL().endsWith(['.gif', '.apng']) ? 'True' : 'False'}\`\`\``, true)
		 .addField('<:Tekno_Crown:951526699332403272> Server Owner', `\`\`\`${interaction.guild.ownerId === user.id ? 'True' : 'False'}\`\`\``, true)
		 .addField('<:Tekno_Robot:951526699634397234> Bot Account', `\`\`\`${user.bot ? 'True' : 'False'}\`\`\``, true)
		 .addField('<:Tekno_Moderator:951526699638587422> Bot Staff', `\`\`\`${isStaff ? 'True' : 'False'}\`\`\``, true)
		 .addField('<:Tekno_Enter:951526699659579392> Created', `<t:${Math.floor(user.createdTimestamp / 1000)}:R> (<t:${Math.floor(user.createdTimestamp / 1000)}:d>)`, true)
			 .addField('<:Tekno_Clock:951526699697311755> Joined Server', `<t:${Math.floor(member.joinedTimestamp / 1000)}:R> (<t:${Math.floor(member.joinedTimestamp / 1000)}:d>)`, true)
			 .addField(`<:Tekno_Mention:951526699747663902> Roles **[${roles.length || '0'}]**`, roles)
			 .addField('<:Tekno_Flag:951526699663753246> Badges', `${flags}`)
		 .setThumbnail(user.displayAvatarURL({format: 'png', dynamic: true}))
		 .setColor('#2f3136')
		 console.log(member)

		 interaction.reply({embeds: [embed]})

		 client.modlogs({
			 Member: interaction.user,
			 Action: 'USER_INFO (Slash Command)',
		 }, interaction)
		 
	
	 }
}