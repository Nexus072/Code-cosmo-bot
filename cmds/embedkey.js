const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send("У вас нет прав");
    let title = args.join("Чё по чём у нас.");
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField("Не дорогие - (от 25 руб.)","1 key = 5 invites \n 5 key = 10 invites")
    .addField("Средние(от 60 руб.)","1 key = 20 invites \n 5 key = 40 invites")
    .addField("Дорогие(От 180 руб.)","1 key = 70 invites \n 5 key = 150 invites")
    message.channel.send(embed);
};
module.exports.help = {
    name: "embed-key"
};