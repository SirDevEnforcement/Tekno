const Discord = require('discord.js');
const DB = require('../../Schemas/WarnDB.js')

module.exports = {
   name: "warnings",
	 description: "Complete system for the warnings",
	 options: [
		 {
			 name: 'add',
			 description: 'Add a warning to a user',
			 type: 'SUB_COMMAND',
			 options: [
				 {
					 name: 'target',
					 description: 'Select a target',
					 type: 'USER',
					 required: true
				 },
				 {
					 name: 'reason',
					 description: 'Provide a reason',
					 required: false,
					 type: 'STRING'
				 }
			 ]
		 },
		 {
			 name: 'check',
			 description: 'Checks warnings for a user',
			 type: 'SUB_COMMAND',
			 options: [
				 				 {
					 name: 'target',
					 description: 'Select a target',
					 type: 'USER',
					 required: true
				 }
			 ]
		 },
		 {
			 name: 'remove',
			 description: 'Removes a specific warning',
			 type: 'SUB_COMMAND',
			 options: [
				 				 {
					 name: 'target',
					 description: 'Select a target',
					 type: 'USER',
					 required: true
				 },
				 {
					 name: 'id',
					 description: 'Provide the warning ID',
					 type: 'NUMBER',
					 required: true
				 }
			 ]
		 },
		 {
			 name: 'clear',
			 description: 'Clears all warnings',
			 type: 'SUB_COMMAND',
			 options: [
				 				 {
					 name: 'target',
					 description: 'Select a target',
					 type: 'USER',
					 required: true
				 }
			 ]
		 }
	 ],
	 run: async(client, interaction) => {
		 const Sub = interaction.options.getSubcommand(['add', 'check', 'remove', 'clear'])
		 const target = interaction.options.getMember('target');
		 const reason = interaction.options.getString('reason') || 'No Reason Specified';
		 const warnid = interaction.options.getNumber('id');
		 const warndate = new Date(interaction.createdTimestamp).toLocaleDateString()

		 if(Sub === 'add') {
			 if(!interaction.member.permissions.has('MODERATE_MEMBERS')) return;

			 
DB.findOne({ GuildID: interaction.guild.id, UserID: target.id, UserTag: target.user.tag }, async(err, data) => {
	if(err) throw error;
	if(!data) {
		data = new DB({ GuildID: interaction.guild.id, UserID: target.id, UserTag: target.user.tag, Content: [
			{
			ExecuterID: interaction.user.id,
			ExecuterTag: interaction.user.tag,
			Reason: reason,
			Date: warndate
			}
		]
									})
	} else {
		const obj = {
			ExecuterID: interaction.user.id,
			ExecuterTag: interaction.user.tag,
			Reason: reason,
			Date: warndate
		}
		data.Content.push(obj)
	}
	data.save()
});
			 interaction.reply({embeds: [new client.Discord.MessageEmbed()
																	 .setColor('#2f3136')
																	.setDescription(`<:Tekno_ChecklistYes:951549213991399424> Warning added to user!\n\n**Reason**: ${reason}`)], ephemeral: true})

			 
		 } else if(Sub === 'check') {

			 DB.findOne({ GuildID: interaction.guild.id, UserID: target.id, UserTag: target.user.tag }, async(err, data) => {
				 if(err) throw err;
				 if(data) {
					 interaction.reply({embeds: [new client.Discord.MessageEmbed()
																			.setAuthor(target.user.username, target.displayAvatarURL({dynamic: true, format: 'png'}))
																			.setColor('#2f3136')
																			.setDescription(`${data.Content.map((w, i) => `**Warning ID**: ${i + 1}\n**Moderator**: ${w.ExecuterTag}\n**Date**: ${w.Date}\n**Reason**: ${reason}\n\n`).join(" ")}`)]})
				 } else {
					 interaction.reply({embeds: [new client.Discord.MessageEmbed()
																			.setDescription('This user has no warns!')
																			.setColor('#2f3136')]})
				 }
			 })




			 
		 } else if(Sub === 'clear') {
      DB.findOne({ GuildID: interaction.guild.id, UserID: target.id, UserTag: target.user.tag }, async(err, data) => {
				if(err) throw err;
				if(data) {
					await DB.findOneAndDelete({ GuildID: interaction.guild.id, UserID: target.id, UserTag: target.user.tag })

					interaction.reply({embeds: [new client.Discord.MessageEmbed()
																			.setDescription('Cleared this user\'s warnings')
																			.setColor('#2f3136')]})
				} else {
					interaction.reply({embeds: [new client.Discord.MessageEmbed()
																			.setDescription('This user has no warns!')
																			.setColor('#2f3136')]})
				}
			})


			 
		 }
	
	 }
}