const { MessageEmbed } = require('discord.js');
const { getKoala, getKoalaFacts } = require('shitapi-wrapper');

module.exports = {
  name: "koala",
  category: '🐕 Animals',
  run: async (client, message, args) => {

    const image = await getKoala(`3YLQ3c8FMSwGPCRV`)
    const fact = await getKoalaFacts(`3YLQ3c8FMSwGPCRV`)
    const card = new MessageEmbed()
    .setTitle('🐨 Koalas!')
    .setDescription(fact)
    .setImage(image)
    message.channel.send(card)


  }
}