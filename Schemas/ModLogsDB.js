const { model, Schema } = require('mongoose')

module.exports = model("ModLogs", new Schema({
	GuildID: String,
	ChannelID: String
}))
