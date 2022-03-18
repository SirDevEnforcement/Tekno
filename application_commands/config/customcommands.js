const Discord = require('discord.js');
const premium = require('../../database/premium.json')

module.exports = {
   name: "custom-commands",
	 description: "Configure custom commands for this server! (Premium Only)",
	 options: [
		 {
			 name: 'create',
			 description: 'Create a custom command',
			 type: 'SUB_COMMAND',
			 options: [
				 {
					 name: 'name',
					 description: 'Command name',
					 type: 'STRING',
					 required: true
				 },
				 {
					 name: 'response',
					 description: 'Response for the command',
					 type: 'STRING',
					 required: true
				 }
			 ]
		 },
		 {
			 name: 'delete',
			 description: 'Delete a custom command',
			 type: 'SUB_COMMAND',
			 options: [
				 {
					 name: 'command',
					 description: 'Command name',
					 type: 'STRING',
					 required: true
				 }
			 ]
		 }
	 ],
	 run: async(client, interaction) => {

		 const subCommand = interaction.options.getSubcommand()
		 const commandName = interaction.options.getString('name');
		 const DB = require('../../Schemas/CustomCommandDB')
		 const customCommand = await DB.findOne({ commandName });
		 const commandResponse = interaction.options.getString('response')
		 const properties = {
			 
			     GuildID: interaction.guild.id,
					 CommandName: commandName,
					 Response: commandResponse
					 
				 }
		 

		 if(subCommand === 'create') {
			 if(!customCommand) {
				 await DB.create(properties)
			 } else {
				 DB.update(properties)
			 }

			 await interaction.guild.commands.create({name: commandName, description: 'A custom command'})

			 const embed = new Discord.MessageEmbed()
			 .setColor('#2f3136')
			 .setDescription(` Successfully created \`${commandName}\``)

			 interaction.reply({embeds: [embed]})
			 
		 } else if(subCommand === 'delete') {
			 if(!customCommand) return interaction.reply('This command does not exist!')
		 }
	 }
}