const { Schema, model } = require('mongoose');

const userConfig = new Schema({
    user: String,
})

module.exports = model("UserDB", userConfig);