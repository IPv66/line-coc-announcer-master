const moment = require('moment');

exports.run = (client, message, args) => {
  message.reply(`Been announcing coc wars since ${moment("2017-08-25T23:13:33-05:00").fromNow()}`)
}
