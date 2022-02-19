const { Client, Message, MessageEmbed } = require("discord.js");
const { AnimeWallpaper } = require("anime-wallpaper");
const wall = new AnimeWallpaper();

module.exports = {
  name: "anime-wallpaper",
  description : 'Give an anime wallpaper about a query',
	options: [{
		name: 'name',
		description: 'Specify an anime',
		required: true,
		type: 'STRING'
	}],
  run: async (client, interaction, args) => {
    const query = interaction.options.getString('name')
    async function Wallpaper1() {
      const wallpaper = await wall.getAnimeWall1({
        search: query,
        page: 1,
      });
      return wallpaper;
    }
    try {
        var wallpapers = await Wallpaper1();
    } catch (err) {
        return interaction.reply("❌ I dind't find any wallpaper with the name: " + query.toString());
    }

    const wallpaper =
      wallpapers[Math.floor(Math.random() * wallpapers.length)].image;
    const embed = new MessageEmbed()
      .setImage(wallpaper)
      .setTitle("🖼️ Anime PC Wallpaper!")
      .setDescription(`[⬇️ **__Download__**](${wallpaper})`)
			.setColor('#2f3136')
      .setTimestamp()

    interaction.reply({embeds: [embed]});
  },
};
