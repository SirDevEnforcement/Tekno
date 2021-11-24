const { Client, Message, MessageEmbed } = require("discord.js");
const { shorten } = require("isgd");
module.exports = {
  name: "shorten",
  aliases: ["sl"],
  description: "Short a given link",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const query = args.join(" ");
    if (!query) return message.reply("Please give me a link to i short");

    shorten(query, function (res) {
      message.reply({content: res});
    });
  },
};