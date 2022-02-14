module.exports = {
  name: "emojilist",
	description: 'Get your server emojis!',
  run: async(client, interaction, args) => {
    const message = interaction;
    const Discord = require("discord.js");
    let list = [];
    let emojis = interaction.guild.emojis.cache.array();
    if (emojis.size === 0) return message.reply("There are no emojis in this server");
     emojis = emojis.map((e, i) => `${i + 1}. ${e} \\${e}`);
    for (var i = 0; i < emojis.length; i += 10) {
      const items = emojis.slice(i, i + 10);
      list.push(items.join("\n"));
    }
    const symbols = ["➡️", "⏹", "⬅️"];
    let page = 0;
    let e  = new Discord.MessageEmbed()
    .setDescription(list[page])
    .setFooter(`Page ${page + 1} of ${list.length} (${emojis.length} emojis)`)
    .setColor("BLUE");
    const msg = await message.reply({ embed: e });
    symbols.forEach(symbol => msg.react(symbol));
    let doing = true;
    while (doing) {
    let r;
    const filter = (r, u) => symbols.includes(r.emoji.name) && u.id == message.author.id;
    try { r = await msg.awaitReactions(filter, { max: 1, time: 20000000, errors: ["time"] }) }
    catch { return message.reply("Command timed out.") }
    const u = message.author;
    r = r.first();
    if (r.emoji.name == symbols[0]) {
      if (!list[page + 1]) msg.reactions.resolve(r.emoji.name).users.remove(u.id).catch(err => {});
      else {
      page++;
      msg.reactions.resolve(r.emoji.name).users.remove(u.id).catch(err => {});
      let newEmbed = new Discord.MessageEmbed()
     .setDescription(list[page])
     .setFooter(`Page ${page + 1} of ${list.length} (${emojis.length} emojis)`)
     .setColor("BLUE");
     msg.edit(newEmbed);
      }
    } else if (r.emoji.name == symbols[2]) {
      if (!list[page - 1]) msg.reactions.resolve(r.emoji.name).users.remove(u.id).catch(err => {});
      else {
      page--;
      msg.reactions.resolve(r.emoji.name).users.remove(u.id).catch(err => {});
      let newEmbed = new Discord.MessageEmbed()
     .setDescription(list[page])
     .setFooter(`Page ${page + 1} of ${list.length} (${emojis.length} emojis)`)
     .setColor("BLUE");
     msg.edit(newEmbed);
      }
    } else if (r.emoji.name == symbols[1]) {
       msg.reactions.removeAll();
       return;
      }
  }}
}