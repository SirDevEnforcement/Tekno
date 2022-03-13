module.exports = async(client) =>
	{
		const Levels = require("discord-xp");
Levels.setURL(process.env['mongo_uri']);
client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;

  const randomAmountOfXp = Math.floor(Math.random() * 29) + 1;
  const hasLeveledUp = await Levels.appendXp(
    message.author.id,
    message.guild.id,
    randomAmountOfXp
  );
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.channel.send({
      content: `GG ${message.author.tag}! You have reached level \` ${user.level} \`! Current XP: \` ${user.xp} \``,
    });
  }
});
	}