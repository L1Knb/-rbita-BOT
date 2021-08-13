const Discord   = require ('discord.js');
const config = ("../config.json");

module.exports = async (client, msg) =>
{

  if(msg.channel.id == '813508660709163038') 
  {

    const marcado = msg.content.substring(7);
    const mamaEmbed = new Discord.MessageEmbed()
    .setColor ('#483D8B')
    .setImage ('https://i.redd.it/o9gqzvn3mx141.gif');

    msg.delete();
    msg.channel.send(`${msg.author} mamou ${marcado}`,mamaEmbed);

  }
  else(msg.reply('Aqui não rsrs'));

}
