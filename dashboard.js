module.exports = async(client) => {
const express = require('express');
const app = express()

	app.listen(90)
	app.enable("trust proxy")
	app.set("etag", false)

	app.use((req, res, next) => {
		console.log(`User visited.\nIP: ${req.ip}\nURL: ${req.url}`)
		next()
	})

	app.get('/stats', (req, res) => {
		res.send(`<h1>${client.users.cache.get}</h1>`)
	})
}