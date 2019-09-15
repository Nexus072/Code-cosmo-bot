const { RichEmbed } = require("discord.js");
module.exports.run = async (message,args) => {
    client.guilds.forEach(guild =>
        guild.channels.filter(c => c.permissionsFor(guild.me).has('SEND_MESSAGES') && c.type == 'text').first().send(
        new RichEmbed()
        .setColor('GREEN')
        .setTitle('Update')
        .setDescription(args.join(" "))
        .setThumbnail(client.user.avatarURL)
        .setAuthor(message.author.username,message.author.avatarURL)
        .setTimestamp()
        ))
};
module.exports.help = {name: "update"}