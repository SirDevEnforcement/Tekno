const { Client, Message, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "panda",
  description : 'Shows a panda picture and a fact',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    let url = "https://some-random-api.ml/img/panda";

    let responseImg, dataImg;
    try {
      responseImg = await axios.get(url);
      dataImg = responseImg.data;
    } catch (e) {
      return interaction.reply(`An error occured!`);
    }

    url = "https://some-random-api.ml/facts/panda";
    let responseFact, dataFact;
    try {
        responseFact = await axios.get(url);
        dataFact = responseFact.data;
    } catch (e) {
      return interaction.reply(`An error occured!`);
    }

    const embed = new MessageEmbed()
      .setTimestamp()
      .setTitle(
        "Panda 🐼"
      )
      .setDescription(dataFact.fact)
      .setImage(dataImg.link)
		  .setColor('#2f3136')

    await interaction.reply({embeds: [embed]});
  },
};
