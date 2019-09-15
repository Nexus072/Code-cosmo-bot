const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
var a = (5>10) ? 'you idiot' : "not idiot"
bot.send(`${a}`)
}
module.exports.help = {
    name: "random"
};