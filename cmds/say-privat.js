module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send('Недостаточно прав!')

    let content = args.slice(0).join(' ')
    if (!content) return message.channel.send('Укажи текст сообщения!')
    await message.delete()
    await message.channel.send(content)
    message.delete().catch();
}

module.exports.help = {
    name: 'say-privat'
}