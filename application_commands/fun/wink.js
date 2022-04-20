const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "wink",
    description: "Wink at someone 😉",
	  options: [{
			name: 'user',
			description: 'User to wink at ;)',
			required: true,
			type: 'USER'
		}],
    run: async (client, interaction, args) => {

        const url = 'https://some-random-api.ml/animu/wink';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return interaction.reply(`An error occured! ${e}`)
        }

        const embed = new MessageEmbed()
            .setTitle(`@${interaction.user.username} winks at ${interaction.options.getUser('user').username}`)
            .setImage(data.link)
			      .setColor('#2f3136')

        await interaction.reply({ embeds: [embed] });
			client.modlogs({
			 Member: interaction.user,
			 Action: 'WINK (Slash Command)',
		 }, interaction)
    }
}