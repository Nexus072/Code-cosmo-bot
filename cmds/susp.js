const Discord = require("discord.js");
const { version } = require(`discord.js`);
const moment = require(`moment`);
module.exports.run = async (bot,message,args) => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
          let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])); //Gets the user
          if (!rMember) return message.reply("That user does not exist.");
          let gRole = message.guild.roles.find('name', 'SUSPENDED'); //Gets the SUSPENDED role
      
          rMember.removeRoles(rMember.roles).then(console.log).catch(console.error); //Removes all roles
          rMember.addRole(494838840687591424); //Adds suspended Role
      
      
          message.channel.send("— человека были сн€ты все роли."); //Messages the channel that the user was suspended
      
          try {
            await rMember.send("¬ы были очищенны."); //Tries to DM User
          } catch (e) {
            message.channel.send("я хотел ему написать что роли сн€ты, но он заблокировал DM'S"); //Announces that their DMs are locked
          }
      
      
        } else {
          message.channel.send("You do not have permission to use this command.");
        }
}
module.exports.help = {
    name:"susp"
}