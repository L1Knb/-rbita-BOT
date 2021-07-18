const Discord = require("discord.js");

module.exports.run = async (client,msg,args) => {
  const sayMsg = args.join(" ");
  msg.delete();
  msg.channel.send(sayMsg);
};