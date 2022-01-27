const { Client, Message, MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "dog",
  description : 'Shows a dog picture and a fact',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    let url = "https://some-random-api.ml/img/dog";

    let responseImg, dataImg;
    try {
      responseImg = await axios.get(url);
      dataImg = responseImg.data;
    } catch (e) {
      return interaction.reply(`An error occured!`);
    }

    url = "https://some-random-api.ml/facts/dog";
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
        "Dog 🐶"
      )
      .setDescription(dataFact.fact)
      .setImage(dataImg.link);

    await interaction.reply({embeds: [embed]});
  },
};
