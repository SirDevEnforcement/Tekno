const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "embed", //the command name for the Slash Command
  description: "Send a embed into the Chat", //the command description for Slash Command Overview
  options: [
		{
			name: 'title',
			description: 'Set a title',
			required: true,
			type: 'STRING'
		},
		{
			name: 'description',
			description: 'Set a description',
			type: 'STRING',
			required: true
		},
		{
			name: 'channel',
			description: 'Set a channel',
			required: true,
			type: 'CHANNEL'
		},
		{
			name: 'footer',
			description: 'Set a footer',
			required: false,
			type: 'STRING'
		}
		
  ],
  run: async (client, interaction, cmduser, es, ls, prefix, player, message) => {
    try{
	    //console.log(interaction, StringOption)
		
		//things u can directly access in an interaction!
		const { member, channelId, guildId, applicationId, 
		        commandName, deferred, replied, ephemeral, 
				options, id, createdTimestamp 
		} = interaction; 
		const { guild } = member;
		
		//let IntOption = options.getInteger("OPTIONNAME"); //same as in IntChoices //RETURNS NUMBER 
		const EmbedTitle = options.getString("title"); //same as in StringChoices //RETURNS STRING 
		const EmbedDescription = options.getString("description"); //same as in StringChoices //RETURNS STRING 
		const EmbedFooter = options.getString("footer")
		//let UserOption = options.getUser("OPTIONNAME"); //RETURNS USER OBJECT 
		const ChannelOption = options.getChannel("in_where"); //RETURNS CHANNEL OBJECt
		//let RoleOption = options.getRole("OPTIONNAME"); //RETURNS ROLE OBJECT
		const channel = ChannelOption && ["GUILD_PRIVATE_THREAD ", "GUILD_PUBLIC_THREAD ", "GUILD_NEWS_THREAD ", "GUILD_NEWS", "GUILD_TEXT"].includes(ChannelOption.type) ? ChannelOption : guild.channels.cache.get(channelId);
		let embed = new MessageEmbed().setColor('#2f3136')
		.setTitle(String(EmbedTitle).substr(0, 256))
		.setDescription(String(EmbedDescription).substr(0, 2048).split("+n+").join("\n"))
		.setFooter(EmbedFooter ? EmbedFooter : `${interaction.user.username}`)
		.setTimestamp()
		//update it without a response!
		await interaction?.reply({content: `Sending the Embed...`, ephemeral: true}).catch(()=>{});
		await channel.send({embeds: [embed]}).catch(()=>{
			channel.send({embeds: [embed]}).catch(()=>{});
		})
		//Edit the reply
		interaction?.editReply({content: `✅ Embed sent in ${channel}!`, ephemeral: true}).catch(()=>{});
    } catch (e) {
        console.log(String(e.stack))
    }
  }
}