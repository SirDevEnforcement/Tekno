const { MessageEmbed } = require('discord.js');
const { getFox, getFoxFacts } = require('shitapi-wrapper');

module.exports = {
  name: "fox",
  category: '🐕 Animals',
  run: async (client, message, args) => {

    const image = await getFox(`3YLQ3c8FMSwGPCRV`)
    const fact = await getFoxFacts(`3YLQ3c8FMSwGPCRV`)
    const card = new MessageEmbed()
    .setTitle('🦊 Foxes!')
    .setDescription(fact)
    .setImage(image)
    message.channel.send(card)


  }
}