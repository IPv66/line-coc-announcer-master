
exports.run = (client, message, args) => {

  list((list) => {
    message.reply(`GOM vs ${warData.stats.opponent.name}\n\n${list}\nRemove your target If 3⭐️\n\Mark Result if otherwise\nUse list appropriately`);
  })

}
