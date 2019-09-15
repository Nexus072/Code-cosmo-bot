const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    console.log(`работает бот - ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
        bot.send(link);
    });
};
module.exports.help = {
    name: "invite"
};