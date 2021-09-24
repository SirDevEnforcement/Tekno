const { MessageEmbed } = require('discord.js');
const { getDuck, getDuckFacts } = require('shitapi-wrapper');

module.exports = {
  name: "duck",
  category: '🐕 Animals',
  run: async (client, message, args) => {

    const image = await getDuck(`3YLQ3c8FMSwGPCRV`)
    const fact = await getDuckFacts(`3YLQ3c8FMSwGPCRV`)
    const card = new MessageEmbed()
    .setTitle('🦆 Ducks!')
    .setDescription(fact)
    .setImage(image)
    message.channel.send(card)


  }
}