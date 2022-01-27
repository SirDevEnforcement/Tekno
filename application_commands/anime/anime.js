const { Client, Message, MessageEmbed } = require("discord.js");
const { searchAnime } = require("@freezegold/anime.js");

module.exports = {
  name: "anime",
  description : 'Get an anime descrption about a query',
  options: [{
		name: 'name',
		description: 'Specify an anime',
		required: true,
		type: 'STRING'
	}],
  run: async (client, interaction, args) => {
    const query = interaction.options.getString('name')
    const anime = await searchAnime(query, 1).then((res) => {
      return res[0];
    });
    function trim(input) {
      return input.length > 1024 ? `${input.slice(0, 1015)} [...]` : input;
    }

    const embed = new MessageEmbed()
      .setAuthor(
        anime.titles.english,
        "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
      )
      .setTitle("Anime")
      .addFields(
        {
          name: "Titles: ",
          value: (anime.titles.english
            ? `➥ English: ${anime.titles.english}\n`
            : "➥ English: ❌\n") +
              `➥ Romaji: ${anime.titles.romaji}\n` +
              `➥ Japanese: ${anime.titles.japanese}`,
          inline: true,
        },
        {
          name: "Ratings: ",
          value:
            `➥ Watchers: ${anime.userCount}\n` +
            `➥ Favourites: ${anime.favoritesCount}\n` +
            `➥ Ratings: ${anime.averageRating} ⭐`,
          inline: true,
        },
        {
          name: "Synopsis: ",
          value: trim(anime.synopsis),
          inline: false,
        }
      )
      .setThumbnail(anime.posterImage.original)
      .setTimestamp();

    message.reply({embeds: [embed]});
  },
};
