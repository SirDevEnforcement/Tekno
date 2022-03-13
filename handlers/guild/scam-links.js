module.exports = async(client) => {
const scamlinks = require('../../database/scam.json')

client.on("messageCreate", async (message) => {
  if (!message.guild || message.author.bot) return;
  if (message.member.permissions.has("ADMINISTRATOR")) return;
  if (scamlinks.includes(message.content)) {
    await message.delete().catch((e) => {});
    let role = await message.guild.roles.cache.find((r) => r.name === "Muted");
    if (!role) {
      role = await message.guild.roles.create({
        name: "Muted",
        permissions: ["VIEW_CHANNEL"],
        mentionable: false,
      });
    }
    await message.member.roles.add(role).catch((e) => {});

    await message.guild.channels.cache.forEach((ch) => {
      ch.permissionOverwrites.edit(role, {
        SEND_MESSAGES: false,
        CONNECT: false,
        SPEAK: false,
      });
    });

    message.channel.send(`${message.author} Muted for sending links`);
  }
});
}