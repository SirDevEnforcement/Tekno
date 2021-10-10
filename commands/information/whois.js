const { MessageEmbed } = require('discord.js');
const { getMember, formatDate } = require('../../functions.js');


module.exports = {
  name: 'whois',
  aliases: ['info', 'who'],
      description: "View someones profile!", 
  run: async (client, message, args) => {
    const member = await getMember(message, args.join(' ')) || message.member || args[0];

    let safe = message.author.createdTimestamp;

    if (safe > 604800017) {
      safe = "`Not Suspicious`";
    } else {
      safe = "`Suspicious`";
    }


    const premiumSince = formatDate(member.premiumSince);
    const joined = formatDate(member.joinedAt);
    const roles = member.roles.cache
      .filter(r => r.id !== message.guild.id)
      .map(r => r).join(', ') || 'None';
                  const badges = {
                "HOUSE_BALANCE" : "<:discord_balance:848456799732236318>",
                "VERIFIED_DEVELOPER": "<:developerbadge:848456914953043968>",
                "HOUSE_BRAVERY": "<:discord_bravery:848456434328797204>",
                "HOUSE_BRILLIANCE": "<:hypesquad_briliance:848456301705035787>",
                "DISCORD_PARTNER": "<:discord_partner:848457016648138752>",
                "HYPESQUAD_EVENTS": "<:HypeSquad_events:848459317366882324>",
                "EARLY_SUPPORTER": "<:Early_Support:848459544132321316>",
                "DISCORD_EMPLOYEE": "<:Discord_Employee:848459880934932531>",
                "BUGHUNTER_LEVEL_1": "<:Bug_Hunter_Level_1:848460077925138462>",
                "BUGHUNTER_LEVEL_2": "<:Bug_Hunter_Level_2:848460349824827402>"

            };

    const created = formatDate(member.user.createdTimestamp);

    const embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
      .addField('\`   User Information:   \`', `**• Avatar URL:** [\`Link\`](${member.user.displayAvatarURL({ dynamic: true, size: 4096 })})\n**• ID:** \`${member.user.id}\`\n**• Discriminator:** \`${member.user.discriminator}\`\n**• Username**: \`${member.user.username}\`\n**• Tag:** \`${member.user.tag}\`\n**• Mention:** ${member.user}\n**• Account Type:** \`${member.user.bot ? 'Bot' : 'Human'}\`\n**• Account created at**: \`${created}\`\n\`${safe}\``, true)
      .addField('\`   Member Information:   \` ', `**• Nickname:** \`${member.nickname === null ? 'None' : member.nickname}\`\n**• Display Name:** \`${member.displayName}\`\n**• Display Hex Color:** \`${member.displayHexColor.toUpperCase()}\`\n**• Manageable by this bot:** \`${member.manageable ? 'Yes' : 'No'}\`\n**• Bannable by this bot:** \`${member.bannable ? 'Yes' : 'No'}\`\n**• Kickable by this bot:** \`${member.kickable ? 'Yes' : 'No'}\`\n**• Nitro Booster Since:** \`${member.premiumSince === null ? 'Not a Nitro Booster' : premiumSince}\`\n**• Joined At:** \`${joined}\``, true)
      .addField('**Roles**', roles);
        message.channel.send({ embeds: [embed] });
  },
};