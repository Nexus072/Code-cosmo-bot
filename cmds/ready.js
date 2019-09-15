const Discord = require("discord.js");
let snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send("Введите сайт с которого хотите взять текст 👀")
let url = args.join(" ");
snekfetch.get(url).then(r => message.channel.send(decodeURIComponent(r.body)));
}

module.exports.help = {
name: "read"
}