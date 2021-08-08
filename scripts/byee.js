const Discord     = require("discord.js");
const config      = require("../config.json");
const fotos       = require("../fotos.json");

module.exports    = (client, member) => 
{
  const channelId = config.ejetadosChannelId;
  

  client.on("guildMemberRemove",(member)=>{

    const embed = new Discord.MessageEmbed()
    .setColor('#483D8B')
    .setImage("https://cdn.discordapp.com/attachments/872245099663360010/872525035687006258/how-to-use-vents-among-us_feature.jpg")
    .setTimestamp()
	  .setFooter('Órbita Server');  

    const channelId   = config.ejetadosChannelId;
    const channel     = member.guild.channels.cache.get(channelId);
    channel.send(`${member.user} saiu do server`, embed);
  });
}  