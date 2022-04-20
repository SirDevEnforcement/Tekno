const { Schema, model } = require('mongoose');

const guildStats = new Schema({
    suggestion: String,
    tags: [{
        name: String,
        response: String,
        embed: Boolean,
        case: Boolean,
        include: Boolean,
    }],
})

module.exports = model("GuildDB", guildStats);