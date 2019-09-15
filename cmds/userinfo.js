const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let user = message.mentions.members.first() || message.guild.member(message.author);
    if (!user) return message.channel.send('Укажите пользователя!');
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`, user.user.avatarURL)
            .setDescription(`Информация о пользователе <@${user.id}>\n\
\n\
Этот пользователь бот?: ${user.user.bot}\n\
Самая высшая роль: ${user.highestRole}`)
            .setThumbnail(user.user.avatarURL)
            .addField('ID Пользователя:', user.id)
            .addField('Дата присоединения к серверу', user.joinedAt, false)
            .addField('Дата регистрации', user.user.createdAt, false)
            .setColor(0x6495ed)
    await message.channel.send(embed)


}
module.exports.help = { 
        name: 'user'
      };