const { MessageEmbed } = require('discord.js');
const { getDog, getDogFacts } = require('shitapi-wrapper');

module.exports = {
  name: "dog",
  category: '🐕 Animals',
  run: async (client, message, args) => {

    const image = await getDog(`3YLQ3c8FMSwGPCRV`)
    const fact = await getDogFacts(`3YLQ3c8FMSwGPCRV`)
    const card = new MessageEmbed()
    .setTitle('Doggo!')
    .setDescription(fact)
    .setImage(image)
    message.channel.send(card)


  }
}