const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("У вас нет прав");
    if(!args[0]) return bot.send("Вы не указали название для канала");
    const name = args.join(" ");
    message.delete().catch();
    message.guild.createChannel(name, { type: 'category' }); 
    channel.setTopic(`Чат был создан спец услугой - CosmoBOT`)
}

module.exports.help = {
    name:"create-category"
}