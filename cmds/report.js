const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    {
        if(message.author.bot) return;
        if (!args[0]) return message.reply(" а где содержимое?!");
        let spy = new Discord.RichEmbed()
          .setDescription(`**Сервер:** ${message.guild.name} - ${message.guild.id}\n **📢Канал:** - ${message.guild.id}\n **📝Жалоба от:** ${message.author.tag}\n **📄Причина** \n${message.content}`)
          .setColor(`PURPLE`)
      bot.channels.get('607648842111909977').send(spy)
    };
    let rreason = args.join(" ").slice(22);
    if(!rreason) return message.channel.send("Спасибо за отзыв, если это спам, тогда бот уйдёт из сервера.");

    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .addField("📝Жалоба от", `${message.author} with ID: ${message.author.id}`)
    .addField("📢Канал", message.channel)
    .addField("📄Причина", rreason)

}

module.exports.help = {
  name: "report",
  aliases: []
}