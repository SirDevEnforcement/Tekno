const Statcord = require("statcord.js");
module.exports = async(client) => {
const statcord = new Statcord.Client({
    client,
    key: process.env['statcord'],
    postCpuStatistics: false,
    postMemStatistics: false,
    postNetworkStatistics: false,
});
 

 
client.on("ready", async () => {
    console.log("Auto-posting to statcord");
 
    // Start auto posting
    statcord.autopost();
});


statcord.on("autopost-start", () => {
    console.log("Started autopost");
});

statcord.on("post", status => {
    if (!status) console.log("Successful post");
    else console.error(status);
});
}