const config = require("../config.json");

module.exports = async (client,msg) =>{
    const sorteioChannel = await msg.guild.channels.cache.find(channel=>channel.id == config.sorteioChannelId);
    
    var message = msg.content.split(" ");
    message.splice(0,1);
    message = message.join(" ");
    await sorteioChannel.send(`${message}`);
    msg.reply(`Avisado no canal ${sorteioChannel}`);
}