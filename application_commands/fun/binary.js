const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "binary",
    description: "Turn text into binary!",
	  options: [{
			name: 'text',
			description: 'Text to convert',
			required: true,
			type: 'STRING'
		}],
    run: async (client, interaction) => {

        const url = `http://some-random-api.ml/binary?text=${interaction.options.getString('text')}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return interaction.reply({content: e, ephemeral: true})
        }

        const embed = new MessageEmbed()
            .setTitle('Text to Binary')
            .setDescription(data.binary)
			      .setColor('#2f3136')

         await interaction.reply({ embeds: [embed] });

			client.modlogs({
			 Member: interaction.user,
			 Action: 'BINARY (Slash Command)',
		 }, interaction)
    }
}