const express = require('express')

const TelegramBot = require('node-telegram-bot-api');
const token = '5742569474:AAFObbHXPRiWMjlpyKbxL-_0reCIuVC-Lyg';

const chatId = -781969682

const bot = new TelegramBot(token, {polling: true});

const app = express()

app.use(cors())
app.use(express.json());

app.post('/telegram', function(request, response){
    bot.on('message', (msg) => {
        console.log(request.body);

        bot.sendMessage(chatId, 'Test');
        // your JSON
        response.send(request.body);
    });
});

app.listen(8000)