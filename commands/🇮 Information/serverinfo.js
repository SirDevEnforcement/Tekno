const { MessageEmbed } = require('discord.js');
let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
}
let region = {
  "brazil": ":flag_br: Brazil",
  "eu-central": ":flag_eu: Central Europe",
  "singapore": ":flag_sg: Singapore",
  "us-central": ":flag_us: U.S. Central",
  "sydney": ":flag_au: Sydney",
  "us-east": ":flag_us: U.S. East",
  "us-south": ":flag_us: U.S. South",
  "us-west": ":flag_us: U.S. West",
  "eu-west": ":flag_eu: Western Europe",
  "vip-us-east": ":flag_us: VIP U.S. East",
  "london": ":flag_gb: London",
  "amsterdam": ":flag_nl: Amsterdam",
  "hongkong": ":flag_hk: Hong Kong",
  "russia": ":flag_ru: Russia",
  "southafrica": ":flag_za:  South Africa",
  "europe": ":flag_eu: Europe"
};
module.exports = {
  name: "serverinfo",
  category: '🇮 Information',
  run: async (client, message, args) => {

    const owner = await client.users.fetch(message.guild.ownerID)
        const serverembed = new MessageEmbed()
		.setColor('BLUE')
            .setTitle(message.guild.name)
			.setThumbnail(message.guild.iconURL())
           .addField('Owner', `<@${owner.id}>`, true)
			.addField('Acronym', message.guild.nameAcronym, true)
			.addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
            .addField('Explicit Content Filter', message.guild.explicitContentFilter, true)
			.addField('Owner ID', owner.id, true)
            .addField("Server ID", message.guild.id, true)

            .addField("\`   Stats   \`", `**Users:** ${message.guild.memberCount}\n**Roles:** ${message.guild.roles.cache.size}\n**Channels:** ${message.guild.channels.cache.size}\n**Emojis:** ${message.guild.emojis.cache.size}`, true)
			.addField('\`   Settings   \`', '**Region:** ' + region[message.guild.region] + '\n**Verification Level:** ' + message.guild.verificationLevel + '\n**Partnered?:** ' + message.guild.partnered + '\n**Boosters:** ' + message.guild.premiumSubscriptionCount + '\n**Tier Level:** ' + message.guild.premiumTier, true)
            .addField('Roles', `<@&${message.guild.roles.cache.map(c => c.id).splice(1, 15).join('>, <@&')}> + ${message.guild.roles.cache.map(c => c.id).splice(15).length} more`)

        .setTimestamp()
.setFooter('Tekno', client.user.displayAvatarURL())
message.channel.send(serverembed)


  }
}