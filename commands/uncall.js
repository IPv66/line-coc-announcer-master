
exports.run = (client, message, args) => {
  var number = args[0];

  var warData = Storage.getItemSync(warId);
  var warCalls = Storage.getItemSync("warCalls");

  if (warData.stats.state == "warEnded" || !warData) return message.reply("there is no war to be cancelling calls");

  if (number < 1 || number > 30) {
    return message.reply("bases are only between 1 and 30");
  }

  if(warCalls[number] === "empty" ){
	  list((list) => {
    message.reply(`GOM vs ${warData.stats.opponent.name}\n\n*That base isn\'t called yet*\n\n${list}\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately`);
	  })
  } else if (warCalls[number] === "hide") {
    message.reply("Bot trusts game servers more than you that base is already 3 starred")
  } else if (warCalls[number] !== message.author.displayName) {
	  warCalls[number] = "empty";
    Storage.setItemSync("warCalls", warCalls);

    list((list) => {
  message.reply(`GOM vs ${warData.stats.opponent.name}\n\n*${message.author.displayName} has overwritin ${warCalls[number]}\'s call*\n \n${list}\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately`);
  })
  } else {
    warCalls[number] = "empty";
    Storage.setItemSync("warCalls", warCalls);

    list((list) => {
      message.reply(`GOM vs ${warData.stats.opponent.name}\n\n*${number} has been canceled*\n\n${list}\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately`);
    })
  }
}
