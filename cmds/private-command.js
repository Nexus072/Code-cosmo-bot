const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "424534058949935115" && message.author.id !== "186717516825886720" && message.author.id !== "186717516825886720") return message.reply(`Пошёл в жопу, это не твой бот.`)
    if(message.author.bot) return;
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " День" : " Дней") + " назад";
    };
    let verifLevels = ["Нету, а зачем она?", "Слабая", "Средняя", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
    const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription("Описание full сервера")
        .addField("Название сарая", message.guild.name, true)
        .addField("ID", message.guild.id, true)
        .addField("Основатель", `<@!${message.guild.owner.user.id}>`, true)
        .addField("Где находится?", region[message.guild.region], true)
        .addField("Все|Люди|Боты", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Уровень требований", verifLevels[message.guild.verificationLevel], true)
        .addField("кАналов", message.guild.channels.size, true)
        .addField("Ролей", message.guild.roles.size, true)
        .addField("Дата основания", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setThumbnail(message.guild.iconURL)
    message.channel.send({embed});
    message.delete().catch();
}

module.exports.help = {
  name:"serverip"
}