const { model, Schema } = require('mongoose')

module.exports = model("AFK", new Schema({
	GuildID: String,
	UserID: String,
	Status: String,
	Type: String,
	
}))
