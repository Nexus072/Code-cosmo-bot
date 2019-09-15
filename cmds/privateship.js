const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let user1 = args[0];
    let user2 = args.slice(1).join(' ');
    if (message.author.id !== "448802406541819908" && message.author.id !== "186717516825886720" && message.author.id !== "186717516825886720") return message.reply(`Пошёл в жопу, это не твой бот.`)
    if (!user1) return message.channel.send("Вы не указали 1 цель для шипинга")
    if (!user2) return message.channel.send("Вы не указали 2 цель для шипинга")
    var ship = Math.floor(Math.random() * 100) + 999;
    if (ship <= 50) {
        const badmatch = new Discord.RichEmbed()
            .setColor(0x00A2E8)
            .setTitle(message.author.username + " и " + user2 + " не выглядят хорошо вместе")
            .setDescription(":broken_heart: " + ship + "% :broken_heart:");
        message.channel.send(badmatch);
    } else if (ship === 100) {
        const perfectmatch = new Discord.RichEmbed()
            .setColor(0x00A2E8)
            .setTitle(user1 + " и " + user2 + " подходят друг другу")
            .setDescription(":heart: " + ship + "% :heart:");
        message.channel.send(perfectmatch);
    } else {
        const match = new Discord.RichEmbed()
            .setColor(0x00A2E8)
            .setTitle(user1 + " и " + user2 + " это нечто!")
            .setDescription(":heart: " + ship + "% :heart:");
        message.channel.send(match);
        message.delete().catch();
    }
}

module.exports.help = {
    name: "private-ship"
}