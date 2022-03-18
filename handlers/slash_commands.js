const { readdirSync } = require("fs");
const DB = require('../Schemas/CustomCommandDB')

module.exports = async (client) => {
    const array = [];
    readdirSync("./application_commands/").forEach((dir) => {
        const commands = readdirSync(`./application_commands/${dir}/`).filter((files) => files.endsWith(".js"));
        for (const file of commands) {
            const command = require(`../application_commands/${dir}/${file}`);
            if(!command.name) throw new Error("Please provide a slash command name");
					  if(!command.description) throw new Error("Please provide a slash command description");

            client.slashcommands.set(command.name, command);
            array.push(command);
            console.log(`Application (/) Command Loaded: ${command.name} (${dir})`);
        }
    });

    client.on("ready", async () => {
			client.slasharray = array;
			client.application.commands.set(array)
			client.guilds.cache.get('949696356753240094').commands.set(array)

			DB.find().then(data => {
				data.forEach((cmd) => {
					const guild = client.guilds.cache.get(cmd.GuildID)
					guild?.commands.create({name: cmd.CommandName, description: 'A custom command'})
				})
			})
    })
}