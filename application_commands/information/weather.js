const Discord = require("discord.js");
const weather = require("weather-js");
const { MessageEmbed } = require("discord.js");

module.exports = {
 name: "weather",
    description: "Get the weather!",
	options: [{
		name: 'location',
		description: 'Specify a location',
		required: true,
		type: 'STRING'
	}],
 run: async (client, interaction, args) => {

 weather.find({ search: interaction.options.getString('location') }, function(error, result) {
 if (error) return interaction.reply({content: `Something went wrong, try again later!`});

 if (result === undefined || result.length === 0)
 return interaction.reply({content: `Invalid location`});

 var current = result[0].current;
 var location = result[0].location;

 const Weather = new Discord.MessageEmbed()
 .setTitle(`${location.name}'s Weather`)
 .setDescription(`\`${current.skytext}\``)
 .setThumbnail(current.imageUrl)
 .addField('Degree Type', ` \`${location.degreetype}\``, true)
 .addField(`Temperature`, ` \`${current.temperature}°\``, true)
 .addField(`Humidity`, `\`${current.humidity}%\``, true)
 .addField(`Wind`, `\`${current.winddisplay}\``, true)
 .addField(`Feels Like`, `\`${current.feelslike}\``, true)
 .addField(`Timezone`, `\`${location.timezone}\``, true)
 .setTimestamp()
 .setFooter(`Temperatures are in Farenheit.`)

  interaction.reply({ embeds: [Weather] });
 });


 }
};