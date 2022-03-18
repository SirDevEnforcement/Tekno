const Discord = require('discord.js');
const DB = require('../../Schemas/LockdownDB');
const ms = require('ms')

module.exports = {
   name: "lock",
	 description: "Lock a channel!",
	 options: [
		 {
			 name: 'time',
			 description: 'Expire date for the lockdown (1m, 1h, 1d)',
			 type: 'STRING',
			 required: false
		 },
		 {
			 name: 'reason',
			 description: 'Reason for the lockdown',
			 type: 'STRING',
			 required: false
		 }
	 ],
	 run: async(client, interaction) => {
		 const { guild, channel, options } = interaction;

		 const reason = options.getString('reason') || 'No Specified Reason';

		 const embed = new Discord.MessageEmbed()
		 .setColor('#2f3136');

		 if(!channel.permissionsFor(guild.id).has('SEND_MESSAGES')) return interaction.reply({embeds: [embed.setDescription('<:Tekno_ChecklistNo:951549213941047346> This channel is already locked!')], ephemeral: true})

		 channel.permissionOverwrites.edit(guild.id, {
			 SEND_MESSAGES: false
		 }).then(async () => {
			 const embed2 = new Discord.MessageEmbed()
			 .setColor('#2f3136')
			 .setDescription(`<:Tekno_lock:951526699588264018> Channel locked-down\n\n**Reason**: ${reason}`)

			 interaction.channel.send({embeds: [embed]})
		 })

		 const time = options.getString('time')

		 if(time) {
			 const expiredate = Date.Now() + ms(time)

			 DB.create({
				 GuildID: guild.id,
				 ChannelID: channel.id,
				 Time: expiredate
			 })

			 setTimeout(async () => {
				 channel.permissionOverwrites.edit(guild.id, {
			 SEND_MESSAGES: null
		 })

				 interaction.channel.send({embeds: [embed.setDescription('<:Tekno_lock:951526699588264018> The lockdown has been lifted!')]}).catch(() => {})

				 await DB.deleteOne({ChannelID: channel.id})
			 }, ms(time))
		 }
	
	 }
}