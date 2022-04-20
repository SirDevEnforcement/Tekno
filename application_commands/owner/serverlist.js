const Discord = require('discord.js')

module.exports = {
   name: "serverlist",
	 description: "Get all the bot's servers",
	 run: async(client, interaction) => {

		 const owners = [
      "815878862075985971",
      "497200251661320212",
      "585835814743834661",
      "788504211704512543",
      "691648449967554590"
    ]
    if(!owners.includes(interaction.user.id)) return;

		 const guilds = await client.guilds.cache.map(
    (guild) =>
  `Owner: ${guild.ownerId} | Server Name: ${guild.name} | Server ID: ${guild.id} | Server Member Count: ${guild.memberCount}`
    );
    interaction.reply({files: [new Discord.MessageAttachment(Buffer.from(`${require('util').inspect(guilds)}`), 'all_guilds.json')]})
	
	 }
}