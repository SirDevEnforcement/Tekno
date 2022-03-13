const { model, Schema } = require('mongoose')

module.exports = model("CustomCommandDB", new Schema({
	GuildID: String,
	CommandName: String,
	Response: String,
}))
