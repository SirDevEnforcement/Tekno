const mongoose = require("mongoose");

const logSchema = mongoose.Schema({
  guildID: String,
  guildName: String,
  logChannelID: String,
  webhookid: String,
  webhooktoken: String
});

module.exports = mongoose.model("Log", logSchema, "log");