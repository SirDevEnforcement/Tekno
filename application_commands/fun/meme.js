const Discord = require('discord.js');
const got = require('got');
module.exports = {
	name: 'meme',
	description: 'Pretty funny, ngl!',
	run: async(client, interaction, args) => {

const embed = new Discord.MessageEmbed()
		.setColor('#2f3136')
	got('https://www.reddit.com/r/memes/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setImage(memeImage);
			embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

			interaction.reply({embeds: [embed]});
		})
		.catch(console.error);
}
}