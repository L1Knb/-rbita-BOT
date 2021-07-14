module.exports = async (client, msg) => {
  const channel = msg.channel;

  const fetchMessages = await channel.messages.fetch().catch(console.error);

  await channel.bulkDelete(fetchMessages);

  msg.reply(`Apagou ${fetchMessages.size} menssagens`);
  
}