module.exports = async (client) => {
  client.on('interactionCreate', async interaction => {
    if(interaction.isCommand()) {
     const slash_commands = client.slashcommands.get(interaction.commandName);
    if (!slash_commands) return interaction.followUp({ content: "This interaction failed." });

    try {
      slash_commands.execute(client, interaction);
    } catch (e) {
      console.error(e)
    }
  } else return;

  })
}