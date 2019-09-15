const Discord = require("discord.js");
module.exports.run = async (bot,message,args) => {

    if (message.author.id !== "424534058949935115" && message.author.id !== "186717516825886720" && message.author.id !== "186717516825886720") return message.reply(`Ты не создатель бота!`)
bot.guilds.forEach(guild =>
    bot.send(`${guild.name}: ${guild.id}`));
};

module.exports.help = {
    name: "list"
};