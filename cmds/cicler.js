const discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
setInterval(() => {
    let spam = args.join(" ");
    message.channel.send(spam).then(msg => msg.delete(250))
    }, 12500)

}

module.exports.help = {
    name: "cicler",
	aliases: []
};