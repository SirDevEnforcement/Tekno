module.exports = async(client) => {
	const express = require("express")
const app = express()
const main = process.cwd() + '/public'
app.use(express.static("public"))
app.get("/", (req, res) => {
  res.sendFile(main + "/index.html")
})

app.get("/home", (req, res) => {
  res.sendFile(main + "/index.html")
})

app.get("/faq", (req, res) => {
  res.sendFile(main + "/faq.html")
})

app.get("/invite", (req, res) => {
  res.redirect("https://discord.com/api/oauth2/authorize?client_id=913472906913267793&permissions=139523361014&scope=bot%20applications.commands")
})


app.get('/404', (req, res) => {
	res.sendFile(main + "/error.html")
})
app.get('/announcements', (req, res) => {
	res.sendFile(main + "/admin.html")
})

app.listen(5000)
}
