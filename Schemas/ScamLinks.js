const { model, Schema } = require('mongoose');

module.exports = model('ScamLinks', new Schema({
	Guild: String,
  User: String,
  content: Array
}))