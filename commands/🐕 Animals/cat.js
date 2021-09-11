const { MessageEmbed } = require('discord.js');
const { getCat, getCatFacts } = require('shitapi-wrapper');

module.exports = {
  name: "cat",
  category: 'Animals',
  run: async (client, message, args) => {

    const image = await getCat(`3YLQ3c8FMSwGPCRV`)
    const fact = await getCatFacts(`3YLQ3c8FMSwGPCRV`)
    const card = new MessageEmbed()
    .setTitle('Cats!')
    .setDescription(fact)
    .setImage(image)
    message.channel.send(card)


  }
}