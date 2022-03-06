module.exports = async (client) => {
	const db = require('quick.db')
	const express = require("express")
	const dev_name = 'DevEnforcement'
	const app = express()
	app.set("views", __dirname)
	app.set("view engine", "ejs")
	const args = {
		servers: `${db.get('servers')}`,
		commands: `${db.get('usage')}`,
		users: `${db.get('users')}`,
		total: `${db.get('total_slash')}`,
		dev_name: dev_name
	}
	app.use(express.static("public"))
	app.get("/", (req, res) => {
		res.render("./public/index.ejs", args)
	})

	app.get("/home", (req, res) => {
		res.render("./public/index.ejs", args)
	})

	app.get("/stats", (req, res) => {
		res.render("./public/stats.ejs", args)
	})

	app.get("/team", (req, res) => {
		res.render("./public/team.ejs", args)
	})

	app.get("/invite", (req, res) => {
		res.redirect("https://discord.com/api/oauth2/authorize?client_id=913472906913267793&permissions=139523361014&scope=bot%20applications.commands")
	})


	app.get('/404', (req, res) => {
		res.render("./public/error.ejs", args)
	})
	app.get('/announcements', (req, res) => {
		res.render("./public/admin.ejs", args)
	})

	app.listen(5000)
}