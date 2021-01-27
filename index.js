const Discord = require('discord.js');
const bot = new Discord.Client()
const fs = require('fs');
require('dotenv').config();

bot.on('ready', () => {
    console.log(bot.user.username + " is now online.");
})

bot.on('message', async message => {

    fs.appendFileSync('./logs.txt', `${message.id}/${message.author.id}: ${message.content}`);

})

bot.login(process.env.TOKEN)