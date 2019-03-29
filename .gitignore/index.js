const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
	bot.user.setGame('Discord').catch(console.error)
}

	)

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log')
  if (!channel) return
  channel.send(`Bienvenue sur le serveur, ${member} ! N'ésite pas aller voir les #infos_du_clan et les #règles ainsi que de rejoindre le clan si ce n'est pas déjà fait !`)
})

bot.on('guildMemberAdd', function (member) {
	member.createDM().then(function(channel) {
		return channel.send('Bienvenue sur le serveur ' + member.displayName)
		//général.sendMessage ('Bienvenue sur le serveur ' + member.displayName + " ! N'ésite pas aller voir les #infos_du_clan et les #règles ainsi que de rejoindre le clan si ce n'est pas déjà fait !" )//
	}).catch(console.error)
	
	}


	)

bot.login('NTYwNTMzMzQ0NDk3MTcyNDgw.D31Y9A.WFjKSeZLxqi2odqjTK3Urn2AoFA')
