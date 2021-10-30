const { readdirSync } = require('fs');

const ascii = require('ascii-table');
const chalk = require('chalk')

const table = new ascii('Commands');
table.setHeading('Command', 'Load status');

module.exports = (client) => {
  readdirSync('./commands/').forEach(dir => {
    const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));

    for (const file of commands) {
      const pull = require(`../commands/${dir}/${file}`);

      if (pull.name) {
        client.commands.set(pull.name, pull);
        table.addRow(`${chalk.yellow(pull.name)}`, `${chalk.green('✅ -> File Ready')}`);
      }
      else {
        table.addRow(file, `${chalk.red('❎ -> Not ready')}`);
      }
    }
  });

  console.log(table.toString());
};