const Discord = require("discord.js");
const weather = require("weather-js");
const { MessageEmbed } = require("discord.js");

module.exports = {
 name: "weather",
    description: "Get the weather!", 
 run: async (client, message, args) => {
 
 

 if (!args[0]) return message.channel.send({content: "Please give a location!"});

 weather.find({ search: args.join(" ") }, function(error, result) {
 if (error) return message.channel.send({content: `Something went wrong, try again later!`});

 if (result === undefined || result.length === 0)
 return message.channel.send({content: `Invalid location`});

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

  message.channel.send({ embeds: [Weather] });
 });


 }
};