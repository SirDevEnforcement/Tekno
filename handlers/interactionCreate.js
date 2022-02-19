module.exports = async (client) => {
  client.on('interactionCreate', async interaction => {
    if(interaction.isCommand()) {
     const slash_commands = client.slashcommands.get(interaction.commandName);
    if (!slash_commands) return interaction.followUp({ content: "This interaction failed." });

    try {
      slash_commands.run(client, interaction);
			client.db.add('usage', 1)
    } catch (e) {
      console.error(e)
    }
  } else return;

  })
}