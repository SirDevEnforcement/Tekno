const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "binary",
    category: "Fun",
    description: "Convert text to binary!",
    usage: "t!binary <text>",
    timeout: 5000,
    run: async (client, message, args) => {

        const url = `http://some-random-api.ml/binary?text=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle('Text to Binary')
            .setDescription(data.binary)

        await message.channel.send(embed)
    }
}