const { Client, Message, MessageEmbed } = require('discord.js');
const { searchManga } = require("@freezegold/anime.js");

module.exports = {
    name: 'manga',
	  description: 'Manga',
    options: [{
		name: 'name',
		description: 'Specify a manga',
		required: true,
		type: 'STRING'
	}],
  run: async (client, interaction, args) => {
    const query = interaction.options.getString('name')
    const manga = await searchManga(query, 1).then((res) => {
      return res[0];
    });
    function trim(input) {
      return input.length > 1024 ? `${input.slice(0, 1015)} [...]` : input;
    }
    const embed = new MessageEmbed()
      .setAuthor(manga.titles.en, "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png")
			.setColor('#2f3136')
      .setTitle("Manga")
      .addFields(
        {
          name: "Titles: ",
          value:
            `➥ English: ${manga.titles.en}\n` +
            `➥ Romaji: ${manga.titles.enJp}`,
          inline: true,
        },
        {
          name: "Ratings: ",
          value:
            `➥ Readers: ${manga.userCount}\n` +
            `➥ Favourites: ${manga.favoritesCount}\n` +
            `➥ Ratings: ${manga.averageRating} ⭐`,
          inline: true,
        },
        {
          name: "Synopsis: ",
          value: trim(manga.synopsis),
          inline: false,
        }
      )
      .setThumbnail(manga.posterImage.original)
      .setTimestamp();

    message.reply({embeds: [embed]});
    }
}