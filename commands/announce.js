
exports.run = (client, message, args) => {
  Storage.setItemSync("updateGroup", message.group.id);
  message.reply("This goup will now recieve war updates");
}

//
//
//
//
