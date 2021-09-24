const { MessageEmbed } = require('discord.js');
const { getPanda, getPandaFacts } = require('shitapi-wrapper');

module.exports = {
  name: "panda",
  category: '🐕 Animals',
  run: async (client, message, args) => {

    const image = await getPanda(`3YLQ3c8FMSwGPCRV`)
    const fact = await getPandaFacts(`3YLQ3c8FMSwGPCRV`)
    const card = new MessageEmbed()
    .setTitle('🐼 Pandas!')
    .setDescription(fact)
    .setImage(image)
    message.channel.send(card)


  }
}