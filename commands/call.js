
exports.run = (client, message, args) => {
  var warCalls = Storage.getItemSync("warCalls");

  let number = args[0]

  var warData = Storage.getItemSync(warId);

  if (warData.stats.state == "warEnded" || !warData) return message.reply("there is no war to be calling oponents");

  if (number < 1 || number > 30) {
    return message.reply("Base does\n't exist");
  }

  if(warCalls[number] === "empty"){
    warCalls[number] =  `${message.author.displayName}`;
    Storage.setItemSync("warCalls", warCalls);
    list((list) => {
      message.reply(`GOM vs ${warData.stats.opponent.name}\n\n*${warCalls[number]} has called ${number}*\n\n${list}\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately`);
    })
  } else if (warCalls[number] === "hide") {
    message.reply("Bot trusts game servers more than you that base is already 3 starred")
  } else {
	  list((list) => {
    message.reply(`GOM vs ${warData.stats.opponent.name}\n\n*${number} is taken by ${warCalls[number]}*\n\n ${list}\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately`);
	  })
  }
}