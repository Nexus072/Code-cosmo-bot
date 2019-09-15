const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
bot.send(`${bot.guilds.size}`,'Серверов')
}
module.exports.help = {
    name: "list-servers"
};