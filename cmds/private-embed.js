const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send("У вас нет прав");
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(botmessage)

    message.channel.send(embed);
    message.delete().catch();
};
module.exports.help = {
    name: "embed-2"
};