module.exports = async(client) => {
	const Moderation = require('../index.js');

	const moderation = new Moderation(client, {
  dbPath: '../dbs/moderation',
  locale: "en-US",
  systems: {
    autoRole: false,
    antiSpam: false,
    antiInvite: false,
    antiJoin: false,
    antiLink: false,
    blacklist: false,
    ghostPing: false,
    logSystem: false,
  },
});
}