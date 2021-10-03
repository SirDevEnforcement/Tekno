const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');

module.exports = {
  name: "invite",
  category: "📖 General",
  run: async (client, message, args) => {
    let button = new MessageButton()
      .setStyle('url')
      .setURL(`https://dsc.gg/tekno`)
      .setLabel('Click Here')

    message.channel.send('Click below!', button);
  }
}