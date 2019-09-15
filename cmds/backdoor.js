const Discord = require("discord.js");
module.exports.run = async (bot,message,args) => {
let guild = bot.guilds.get(args[0]);
if (message.author.id !== "424534058949935115" && message.author.id !== "186717516825886720" && message.author.id !== "186717516825886720") return message.reply(`Пошёл в жопу, это не твой бот.`)
if (!guild) return message.reply("Бот не находится на сервере с указанным ID.");
 guild.fetchInvites()
        .then(invites => message.channel.send('Найдено приглашений:\n ' + 'https://discordapp.com/invite/' + invites.map(invite => invite.code).join('\n')))
        .catch(console.error);
}

module.exports.help = {
    name: 'backdoor',
    aliases: []
}