const { MessageEmbed } = require('discord.js');
const { getBear, getBearFacts } = require('shitapi-wrapper');

module.exports = {
  name: "bear",
  category: '🐕 Animals',
  run: async (client, message, args) => {

    const image = await getBear(`3YLQ3c8FMSwGPCRV`)
    const fact = await getBearFacts(`3YLQ3c8FMSwGPCRV`)
    const card = new MessageEmbed()
    .setTitle('🐻 Bears!')
    .setDescription(fact)
    .setImage(image)
    message.channel.send(card)


  }
}