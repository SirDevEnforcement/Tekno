module.exports = async(client) => {
	const Enmap = require('enmap');

	client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep',
  autoEnsure: {
    modLogChannel: "mod-log",
    welcomeMessage: "Say hello to {{user}}, everyone!"
  }
});

	client.points = new Enmap({
		name: 'points'
	})

	console.log(client.settings)
	
}