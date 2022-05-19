const { model, Schema } = require("mongoose");

module.exports = model("Cookies", new Schema({
    GuildID: String,
    UserID: String,
    Cookies: Number
}));