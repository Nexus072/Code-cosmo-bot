module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "186717516825886720" && message.author.id !== "186717516825886720" && message.author.id !== "186717516825886720") return message.reply(`Пошёл в жопу, это не твой бот.`)

    let msgid = args[0]

    if (!msgid) return message.channel.send('Укажи ID сообщения!')

    await message.channel.fetchMessage(msgid)
        .then(async msg => {
            if (!msg) return message.channel.send('Сообщение не найдено')
            await msg.pin()
            message.delete().catch();
        }).catch(console.error)

}

module.exports.help = {
    name: 'fasten'
}