const DB = require("../../Schemas/CookiesDB");

module.exports = async(client) => {
  client.on('messageReactionAdd', async reaction => {
        if(user.bot) return;
        if(reaction.message.channel.type == "DM") return;
        if(reaction.message.author.bot) return;
        if(reaction.message.author.id == user.id) return;

        if(reaction.emoji.name === "🍪") {
            const { guildId, author } = reaction.message;

            if(client.cookiescooldowns.has(`${guildId}||${user.id}||${author.id}`)) return;

            if(user.id) {
                DB.findOne({ GuildID: guildId, UserID: author.id }, async (err, data) => {
                    if(err) throw new Error(err);
                    if(!data) {
                        DB.create({ GuildID: guildId, UserID: author.id, Cookies: 1 });
                    } else {
                        data.Cookies += 1;
                        data.save();
                    }
                });

                client.cookiescooldowns.set(`${guildId}||${user.id}||${author.id}`, Date.now() + 120000);
            }

            setTimeout(async () => client.cookiescooldowns.delete(`${guildId}||${user.id}||${author.id}`), 120000);
        }

  })
    }