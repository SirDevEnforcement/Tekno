const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "drake",
    description: "Drake!", 
  run: async (client, message, args) => {


    if(!args[0] && !args[1]) return message.channel.send(` \`\`\`t!drake <Bad Thing> <Good Thing> \nMUST be one word only for both!\`\`\` `)


    const embed = new MessageEmbed()
      .setTitle('Drake!')
      .setImage(`https://shit-api.ml/imagegen/drake?key=3YLQ3c8FMSwGPCRV&text=${args[0]}&text2=${args[1]}`)
      message.channel.send({ embeds: [embed] });
  }

}