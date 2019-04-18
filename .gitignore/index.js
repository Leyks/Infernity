const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
	bot.user.setActivity('Deezer Music', { type: 'LISTENING' })
	bot.user.setActivity('Le flood', { type: 'WRITING
	//bot.user.setGame('Tape !co').catch(console.error)//
}

	)

bot.on('message',function (message) {
	if (message.content == '!co') {
		message.channel.send('oui')
	}
})
/*
bot.on("guildMemberAdd", function (member) => {
	member.guild.channels.find("name", "general").send('Bienvenue ${member}')
})

bot.on("guildMemberRemove", function (member) => {
	member.guild.channels.find("name", "general").send('${member} vient de quitter le serveur')
})
*/

/*bot.on('guildMemberAdd', function (member) {
	member.createDM().then(function(channel) {
		return channel.send('Bienvenue sur le serveur ' + member.displayName)
		//général.sendMessage('Bienvenue sur le serveur ' + member.displayName + " ! N'ésite pas aller voir les #infos_du_clan et les #règles ainsi que de rejoindre le clan si ce n'est pas déjà fait !" )
	}).catch(console.error)
	
	}


	)
*/
bot.login('NTYwNTMzMzQ0NDk3MTcyNDgw.D31Y9A.WFjKSeZLxqi2odqjTK3Urn2AoFA')
