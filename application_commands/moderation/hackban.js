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
      .setColor("GREEN")
      .setTitle('Banned')
      .setDescription(`Success! <@${target}> was banned! \n \nReason: \`${reason}\`\n Moderator: \`${message.author.username}#${message.author.discriminator}\``)
		.setColor('#2f3136')
    await message.reply({ embeds: [embed2] });
  }

}