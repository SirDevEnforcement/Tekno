const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "hackban",
    description: "Ban someone not in the server!", 
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle('Incorrect Permissions')
    .setDescription('You need the \`\`\`BAN_MEMBERS\`\`\` permission to use this command!')
    if(!message.member.hasPermission === 'BAN_MEMBERS') return   message.channel.send({ embeds: [embed] });
    const target = args[0];
    if (isNaN(target)) return message.reply(`Please specify an ID`);

    const reason = args.splice(1, args.length).join(' ');

    message.guild.members.ban(target, { reason: reason.length < 1 ? 'No reason supplied.' : reason });
    if(!reason) return message.channel.send('Please specify a reason!')
    const embed2 = new MessageEmbed()
      .setColor("GREEN")
      .setTitle('<:hx_ba:862059080301805628> Banned')
      .setDescription(`Success! <@${target}> was banned! \n \nReason: \`${reason}\`\n Moderator: \`${message.author.username}#${message.author.discriminator}\``);
    await   message.channel.send({ embeds: [embed2] });
  }

}