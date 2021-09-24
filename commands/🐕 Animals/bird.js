const { MessageEmbed } = require('discord.js');
const { getBird, getBirdFacts } = require('shitapi-wrapper');

module.exports = {
  name: "bird",
  category: '🐕 Animals',
  run: async (client, message, args) => {

    const image = await getBird(`3YLQ3c8FMSwGPCRV`)
    const fact = await getBirdFacts(`3YLQ3c8FMSwGPCRV`)
    const card = new MessageEmbed()
    .setTitle('🐦 Birds!')
    .setDescription(fact)
    .setImage(image)
    message.channel.send(card)


  }
}