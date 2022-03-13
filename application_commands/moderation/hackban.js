const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "hackban",
  description: "Ban someone not in the server!",
	options: [
		        {
		          name: 'user',
		          description: 'User ID',
		          required: true,
		          type: 'STRING'
	          },
						{
							name: 'reason',
							description: 'Reason',
							required: false,
							type: 'STRING'
						}],
  run: async (client, interaction, args) => {
		const message = interaction;
    const embed = new MessageEmbed()
    .setTitle('Incorrect Permissions')
    .setDescription('You need the \`\`\`BAN_MEMBERS\`\`\` permission to use this command!')
		.setColor('#2f3136')
    if(!message.member.permissions === 'BAN_MEMBERS') return interaction.reply({ embeds: [embed] });
    const target = interaction.options.getString('user')
    if (isNaN(target)) return message.reply(`Please specify an ID`);
 
    const reason = interaction.options.getString('reason') || 'No Reason'

    interaction.guild.members.ban(target, { reason: reason.length < 1 ? 'No reason supplied.' : reason });
      const embed2 = new MessageEmbed()
				.setTitle('<:Tekno_Moderator:951526699638587422> Member Banned')
				.setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
				.addField(`Member`, `\`\`\`${target.user.tag}\`\`\``)
        .addField('Banned by', `${interaction.user.tag}`)
        .addField('Reason', `\`\`\`${reason}\`\`\``)
				.setTimestamp()
				.setColor('#2f3136')
				.setFooter(`Guild: ${interaction.guild.name}`, target.user.displayAvatarURL({ dynamic: true }));
    await message.reply({ embeds: [embed2] });
  }

}