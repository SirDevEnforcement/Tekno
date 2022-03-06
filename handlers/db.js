module.exports = async(client) => {

	const Database = require('@replit/database');
	client.db = new Database()

	client.on('messageCreate', async message => {
		if(!client.db.get(`bal_${message.author.id}`)) {
		client.db.set(`bal_${message.author.id}`, 0)
		}
	})
	
}