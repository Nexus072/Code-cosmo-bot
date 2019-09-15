const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Вау, как ты нашёл эту команду?")
    .setColor('#10c7e2')
    .addField("Молодец! Ты нашёл посхалку!","Что вы теперь можете сделать? Ничего.")
    .addField(message.author.username,"Ты только что получил достижение - Поиск тупых комманд.")

    message.channel.send(embed);

};
module.exports.help = {
    name: "unfined"
};