module.exports = async(client) => {
  const { AntiAltClient } = require("discord-antialts");

const c = new AntiAltClient({
  debug: false,
  altDays: 14,
});

client.on("guildMemberAdd", (member) => {
  if(!member.guild.id === '894164132100730880') return;
  c.init(member, {
    action: "kick",
  });
});

c.on("altAction", (member, date, action) => {
  if(!member.guild.id === '894164132100730880') return;
  const embed = new MessageEmbed()
    .setTitle("Alt Found!")
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(`
**__Alt Name__**: ${member.user} (${member.user.username})
**__ID__**: ${member.user.id}
**__Account Created__**: ${date.createdAt} days ago
**__Join Position__**: ${member.guild.memberCount}
**__Join Date__**: ${date.joinAt}
`);
  client.channels.cache.get("your id894164132704714765").send({ embeds: [embeds] });
});
}