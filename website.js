module.exports = async (client) => {
	const upd = require('./database/maintenance.json')
	const { lookup } = require('geoip-lite');
	const db = require('quick.db')
	const express = require("express")
	const ejs = require('ejs')
	const app = express()
	app.set("views", __dirname)
	app.set("view engine", "ejs")
	const args = {
		servers: `${db.get('servers')}`,
		commands: `${db.get('usage')}`,
		users: `${db.get('users')}`,
		total: `${db.get('total_slash')}`,
		staff: [
		  {
			  name: client.users.fetch('815878862075985971').username, // British (DevEnforcement)
			  role: 'Developer',
		  },
			{
				name: client.users.fetch('497200251661320212').username, // Aidan,
				role: 'Secondary Developer',
			},
			{
				name: client.users.fetch('691648449967554590').username, // Jonah
				role: 'Moderator',
			}
			]
	}
	app.use(express.static("public"))
	app.get("/", (req, res) => {
		res.render("./public/index.ejs", args)
		const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip); 
  console.log(lookup(ip));
		const info = lookup(ip)

		const embed = new client.Discord.MessageEmbed()
		.setTitle('Website Visited (Home)')
		.addField('IP', `\`\`\`${ip}\`\`\``)
		.addField('Country', `\`\`\`${info.country}\`\`\``)
		.addField('City', `\`\`\`${info.city ? info.city : 'Unavailable'}\`\`\``)
		.addField('Region', `\`\`\`${info.region ? info.region : 'Unavailable'}\`\`\``)
		.addField('Timezone', `\`\`\`${info.timezone}\`\`\``)

	const web = new client.Discord.WebhookClient({url: process.env['ipwebhook']})
		web.send({embeds: [embed]})
	})

	app.get("/home", (req, res) => {
		res.render("./public/index.ejs", args)
		const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip); 
  console.log(lookup(ip));
		const info = lookup(ip)

		const embed = new client.Discord.MessageEmbed()
		.setTitle('Website Visited (Home)')
		.addField('IP', `\`\`\`${ip}\`\`\``)
		.addField('Country', `\`\`\`${info.country}\`\`\``)
		.addField('City', `\`\`\`${info.city ? info.city : 'Unavailable'}\`\`\``)
		.addField('Region', `\`\`\`${info.region ? info.region : 'Unavailable'}\`\`\``)
		.addField('Timezone', `\`\`\`${info.timezone}\`\`\``)

	const web = new client.Discord.WebhookClient({url: process.env['ipwebhook']})
		web.send({embeds: [embed]})
	})

	app.get("/stats", (req, res) => {
		res.render("./public/stats.ejs", args)
		const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip); 
  console.log(lookup(ip));
		const info = lookup(ip)

		const embed = new client.Discord.MessageEmbed()
		.setTitle('Website Visited (Stats)')
		.addField('IP', `\`\`\`${ip}\`\`\``)
		.addField('Country', `\`\`\`${info.country}\`\`\``)
		.addField('City', `\`\`\`${info.city ? info.city : 'Unavailable'}\`\`\``)
		.addField('Region', `\`\`\`${info.region ? info.region : 'Unavailable'}\`\`\``)
		.addField('Timezone', `\`\`\`${info.timezone}\`\`\``)

	const web = new client.Discord.WebhookClient({url: process.env['ipwebhook']})
		web.send({embeds: [embed]})
	})

	app.get("/team", (req, res) => {
		res.render("./public/team.ejs", args)
		const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip); 
  console.log(lookup(ip));
		const info = lookup(ip)

		const embed = new client.Discord.MessageEmbed()
		.setTitle('Website Visited (Team)')
		.addField('IP', `\`\`\`${ip}\`\`\``)
		.addField('Country', `\`\`\`${info.country}\`\`\``)
		.addField('City', `\`\`\`${info.city ? info.city : 'Unavailable'}\`\`\``)
		.addField('Region', `\`\`\`${info.region ? info.region : 'Unavailable'}\`\`\``)
		.addField('Timezone', `\`\`\`${info.timezone}\`\`\``)

	const web = new client.Discord.WebhookClient({url: process.env['ipwebhook']})
		web.send({embeds: [embed]})
	})

	app.get("/invite", (req, res) => {
		res.redirect("https://discord.com/api/oauth2/authorize?client_id=913472906913267793&permissions=1619168951798&scope=bot%20applications.commands")
		const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip); 
  console.log(lookup(ip));
		const info = lookup(ip)

		const embed = new client.Discord.MessageEmbed()
		.setTitle('Website Visited (Invite)')
		.addField('IP', `\`\`\`${ip}\`\`\``)
		.addField('Country', `\`\`\`${info.city ? info.city : 'Unavailable'}\`\`\``)
		.addField('City', `\`\`\`${info.city}\`\`\``)
		.addField('Region', `\`\`\`${info.region ? info.region : 'Unavailable'}\`\`\``)
		.addField('Timezone', `\`\`\`${info.timezone}\`\`\``)

	const web = new client.Discord.WebhookClient({url: process.env['ipwebhook']})
		web.send({embeds: [embed]})
	})


	app.get('/404', (req, res) => {
		res.render("./public/error.ejs", args)
		const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip); 
  console.log(lookup(ip));
		const info = lookup(ip)

		const embed = new client.Discord.MessageEmbed()
		.setTitle('Website Visited (404)')
		.addField('IP', `||\`\`\`${ip}\`\`\`||`)
		.addField('Country', `\`\`\`${info.country}\`\`\``)
		.addField('City', `\`\`\`${info.city ? info.city : 'Unavailable'}\`\`\``)
		.addField('Region', `\`\`\`${info.region ? info.region : 'Unavailable'}\`\`\``)
		.addField('Timezone', `\`\`\`${info.timezone}\`\`\``)

	const web = new client.Discord.WebhookClient({url: process.env['ipwebhook']})
		web.send({embeds: [embed]})
	})

	app.get('/free-nitro', (req, res) => {
		res.render("./public/our-free-nitro.ejs", args)
		const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip); 
  console.log(lookup(ip));
		const info = lookup(ip)

		const embed = new client.Discord.MessageEmbed()
		.setTitle('Bozo got rickrolled')
		.addField('IP', `||\`\`\`${ip}\`\`\`||`)
		.addField('Country', `\`\`\`${info.country}\`\`\``)
		.addField('City', `\`\`\`${info.city ? info.city : 'Unavailable'}\`\`\``)
		.addField('Region', `\`\`\`${info.region ? info.region : 'Unavailable'}\`\`\``)
		.addField('Timezone', `\`\`\`${info.timezone}\`\`\``)

	const web = new client.Discord.WebhookClient({url: process.env['ipwebhook']})
		web.send({embeds: [embed]})
	})

  app.get('/gif-or-video', (req, res) => {
    res.render('./public/what.ejs', args)
  })

  app.get('*', (req, res) => {
  res.render("./public/error.ejs");
});

	app.listen(5000)
}