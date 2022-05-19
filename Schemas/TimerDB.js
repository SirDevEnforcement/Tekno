const { Schema, model } = require('mongoose');

const Timer = new Schema({
    id: String,
    user: String,
    channel: String,
    reason: String,
    guild: String,
    time: String,
    createdAt: String,
    endAt: String,
})

module.exports = model("TimerDB", Timer);