const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "hackban",
  timeout: 5000,
  category: 'Moderation',
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle('Incorrect Permissions')
    .setDescription('You need the \`\`\`BAN_MEMBERS\`\`\` permission to use this command!')
    if(!message.member.hasPermission === 'BAN_MEMBERS') return message.channel.send(embed)
    const target = args[0];
    if (isNaN(target)) return message.reply(`Please specify an ID`);

    const reason = args.splice(1, args.length).join(' ');

    message.guild.members.ban(target, { reason: reason.length < 1 ? 'No reason supplied.' : reason });
    if(!reason) return message.channel.send('Please specify a reason!')
    const embed2 = new MessageEmbed()
      .setColor("GREEN")
      .setTitle('<:tickYes:870648352704987176> Banned')
      .setDescription(`Success! <@${target}> was banned! \n \nReason: \`${reason}\`\n Moderator: \`${message.author.username}#${message.author.discriminator}\``);
    await message.channel.send(embed2);
  }

}