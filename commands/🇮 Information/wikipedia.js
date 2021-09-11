const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "wikipedia",
  category: 'Information',
  run: async (client, message, args) => {
  const fetch = require("node-fetch")
     const body = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(args.join(" "))}`,
          ).then(res => res.json().catch(() => {}));
        
        if (!body) return message.channel.sendmessage.channel.send({embed: {
                      
                      title: "❌ Error Page Not Found."
                  }})
          if (body.title && body.title === "Not found.") return message.channel.send({embed: {
                      
                      title: "❌ Error Page Not Found."
                  }});
      
        const embed = new MessageEmbed()
            .setTitle(`🌐 ${body.title} `)
        .addField("More Info: ",`**[Click Here!](${body.content_urls.desktop.page})**`, true)
            .setDescription(`** ${body.extract}**`)
            .setColor(`RANDOM`)
        .setTimestamp()
        
         if (body.thumbnail) embed.setThumbnail(body.thumbnail.source);
        message.channel.send(embed);

    
  
}}