const Discord = require('discord.js');
const ms = require('ms')

module.exports = {
   name: "lock",
	 description: "(Un)Lock a channel/server",
	 options: [
		 {
			 name: 'channel',
			 description: 'Mention the channel to lockdown',
			 type: 'CHANNEL',
			 required: false
		 },
		 {
			 name: 'unlock',
			 description: 'Unlock the server',
			 type: 'STRING',
			 choices: [
				 {
				 name: 'true',
				 value: 'true',
				 }
			 ],
			 required: false
		 }
	 ],
	 run: async(client, interaction) => {
		 const { guild, channel, options } = interaction;
		 if(!interaction.member.permissions.has('MANAGE_CHANNELS')) {
			 const embed = new Discord.MessageEmbed()
			 .setColor('#2f3136')
			 .setDescription('<:Tekno_StickerSad:951526699626012702> Only members with the **MANAGE_CHANNELS** permission can run this command!')

			 interaction.reply({embeds: [embed]})
		 } else {

		 if(options.getChannel('channel')) {
			 const channel = interaction.guild.channels.cache.get(options.getChannel('channel').id);
			 
		 channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
			 SEND_MESSAGES: false,
		 })
			 const embed = new Discord.MessageEmbed()
			 .setColor('#2f3136')
			 .setDescription(`<:Tekno_lock:951526699588264018> Locked down <#${options.getChannel('channel').id}>`)

			 interaction.reply({embeds: [embed]})
		 } else {
			 interaction.guild.channels.cache.forEach(async channel => {
				 await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
					 SEND_MESSAGES: false,
				 })
			 })
			 const embed = new Discord.MessageEmbed()
			 .setColor('#2f3136')
			 .setDescription(`<:Tekno_lock:951526699588264018> Locked down the server! (${interaction.guild.channels.cache.size} channels)`)

			 interaction.reply({embeds: [embed]})
		 }


		if(options.getString('unlock')) {
			interaction.guild.channels.cache.forEach(async channel => {
				await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
					 SEND_MESSAGES: true,
				 })
			})
			const embed = new Discord.MessageEmbed()
			 .setColor('#2f3136')
			 .setDescription(`<:Tekno_lock:951526699588264018> Unlocked the server! (${interaction.guild.channels.cache.size} channels)`)
			interaction.reply({embeds: [embed]})
		}
   }

		 

		 client.modlogs({
			 Member: interaction.user,
			 Action: 'LOCK (Slash Command)',
		 }, interaction)
	
	 }
}