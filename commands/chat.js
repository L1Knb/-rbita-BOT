const config = require("../config.json");

module.exports = async (client,msg) =>{
    const chatChannel = await msg.guild.channels.cache.find(channel=>channel.id == config.chatChannelId);
    
    var message = msg.content.split(" ");
    message.splice(0,1);
    message = message.join(" ");
    await chatChannel.send(`${message}`);
    msg.reply(`Avisado no canal ${chatChannel}`);
}