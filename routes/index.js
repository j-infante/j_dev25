var express = require('express');
var router = express.Router();
const TelegramBot = require('node-telegram-bot-api');
const token = '592619128:AAFM798mn1cJdw-XN2KTnEhdV8pakfjlFho';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  console.log('msg: ', msg);
     if(msg.text){
        bot.sendMessage(msg.chat.id, 
          "Fuck off user")
     }
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jdev_25 BOT API' });
});

module.exports = router;
