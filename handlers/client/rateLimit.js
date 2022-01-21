const axios = require('axios')
module.exports = async(client) => {
client.on('rateLimit', (args) => {
    axios({
        method: "post",
        url: "https://discord.com/api/webhooks/932701679302877285/vQ12VANjGl3KzKCkaUq2CQKFxI5Gu_RC--9HiOU4QWHyILtAu9laXUzfskt_LlJFROOK",
        data: {
            username: "Tekno Ratelimit Logs",
            content: args,
            avatarURL: client.user.displayAvatarURL()
        }
    })
});
}