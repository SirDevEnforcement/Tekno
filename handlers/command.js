const { readdirSync } = require('fs');
const ascii = require('ascii-table');
const chalk = require('chalk')
const table = new ascii('Table');
table.setHeading('Command', 'Load status', 'Directory');

module.exports = async(client) => {
  readdirSync('./commands/').forEach(dir => {
    const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));

    for (const file of commands) {
      const pull = require(`../commands/${dir}/${file}`);

      if (pull.name) {
        client.commands.set(pull.name, pull);
        table.addRow(`${pull.name}`, `${chalk.green('✅ Loaded')}`, `${dir}`);
      }
      else {
        table.addRow(file, `${chalk.red('❎')}`);
      }
    }
  });

  await console.log(table.toString());
};