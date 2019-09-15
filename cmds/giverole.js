const Discord = require('discord.js'); //Модуль discord.js =\

module.exports.run = (bot, message, args) => { //Модуль экспорт бежать бот, сообщения, аргументы (забудьте это)
if(message.guild.id !== 'ID Сервера') return //Указываем ID сервера, данная команда только для одного сервера, использование на других серверах приведёт к ошибки без этой строчки.
    let embed = new Discord.RichEmbed() //Переменная с Имбедом(Да я знаю что можно её не создавать, но я так уже привык)
        .setColor("RANDOM") //Цвет сообщения, в данном случае рпндомный цвет.
        .setAuthor(`Роли.`) //Ну, верхняя строчка.
        .setDescription(`💛 - <@&ID роли>\n💚 - <@&ID роли>\n💙 - <@&ID роли>`)
        .setFooter(`${message.author.username}`, message.author.avatarURL)
        .setTimestamp() //Указывает время сообщения.
    message.channel.send(embed).then(msg => { //Отправляем в чат наш Имбед, а также делаем действия к сообщению бота.
        msg.react('💛').then(r => { //Ставим реакции и делаем для них коллекторы(действия??)
            msg.react('💚')
            msg.react('💙')
            const a = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id; //Реагирует только на нажатия автора команды, на остальных не реагирует.
            const b = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
            const h = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
            const d = msg.createReactionCollector(a, { time: 999000 }); //Количество времени которая будет работать команда.
            const z = msg.createReactionCollector(b, { time: 999000 });
            const l = msg.createReactionCollector(h, { time: 999000 });
            d.on('collect', r => {  //Обращаемся к первому Эмодзи.
                let roleS = message.guild.roles.find(r => r.name === 'Название роли'); //Переменная которая хранит в себе название роли.
                if (message.member.roles.has(roleS.id)) {
                    message.member.removeRole(`Id роли`);
                    message.author.send( //Отправляем в ЛС сообщение.
                        new Discord.RichEmbed()
                            .setColor("RANDOM")
                            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
                            .setTimestamp()
                            .setDescription(`💛 | **Вы успешно убрали с себя роль Роль !**`)
                    )
                }
                if (!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS);
                    message.author.send(
                        new Discord.RichEmbed()
                            .setColor("RANDOM")
                            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
                            .setTimestamp()
                            .setDescription(`💛 | **Вы успешно поставили себe роль Роль !**`)
                    )
                }
                embed.setDescription(`❤ | **Роль выдана!**`) //Изменяем сообщение бота.
                embed.setAuthor('')
                embed.setFooter(`Операция выполнена!`);
                msg.edit(embed).then(msg => { //Изменяем уже наконец сообщение, а также делаем действие к нему.
                    msg.clearReactions() //Делаем очистку Эмодзи.
                })
            })
            z.on('collect', r => {
                let roleS = message.guild.roles.find(r => r.name === 'Название роли');
                if (message.member.roles.has(roleS.id)) {
                    message.member.removeRole(`ID роли`);
                    message.author.send(
                        new Discord.RichEmbed()
                           .setColor("RANDOM")
                            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
                            .setTimestamp()
                            .setDescription(`💚 | **Вы успешно убрали с себя роль Роль !**`)
                    )
                }
                if (!message.member.roles.has(roleS.id)) {
                    message.member.addRole(roleS);
                    message.author.send(
                        new Discord.RichEmbed()
                           .setColor("RANDOM")
                            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
                            .setTimestamp()
                            .setDescription(`💚 | **Вы успешно поставили себe роль !**`)
                    )
                }
                embed.setDescription(`❤ | **Роль выдана!**`)
                embed.setAuthor('')
                embed.setFooter(`Операция выполнена!`);
                msg.edit(embed).then(msg => {
                    msg.clearReactions()
                })
            })
            l.on('collect', r => {
                let roleS = message.guild.roles.find(r => r.name === 'Название роли');
                if (message.member.roles.has(roleS.id)) { //Если есть роль убирает её.
                    message.member.removeRole(`ID роли`); //Убирает роль.
                    message.author.send(
                        new Discord.RichEmbed()
                          .setColor("RANDOM")
                            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
                            .setTimestamp()
                            .setDescription(`💙 | **Вы успешно убрали с себя роль Роль !**`)
                    )
                }
                if (!message.member.roles.has(roleS.id)) { //Проверяет есть ли роль у игрока. Если нету он ставит её.
                    message.member.addRole(roleS); //Ставит роль автору сообщения
                    message.author.send(
                        new Discord.RichEmbed()
                        .setColor("RANDOM")
                            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
                            .setTimestamp()
                            .setDescription(`💙 | **Вы успешно поставили себe роль Роль !**`)
                    )
                }
                embed.setDescription(`❤ | **Роль выдана!**`)
                embed.setAuthor('')
                embed.setFooter(`Операция выполнена!`);
                msg.edit(embed).then(msg => {
                    msg.clearReactions()
                })
            })
        })
    })
}
exports.help = {
    name: 'role' //Название команды.
}