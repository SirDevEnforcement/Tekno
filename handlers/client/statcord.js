const Statcord = require("statcord.js");
module.exports = async(client) => {
const statcord = new Statcord.Client({
    client,
    key: process.env['statcord'],
    postCpuStatistics: true,
    postMemStatistics: true,
    postNetworkStatistics: true,
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