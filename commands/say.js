module.exports = async (client,msg,args) => {
  let sayMsg= msg.content.substring(4)
  msg.delete();
  msg.channel.send(sayMsg);
};