const Discord = require('discord.js');
const PastebinAPI = require('pastebin-js');
const bot = new Discord.Client();
const pastebin = new PastebinAPI('c0433c6e1f136b822e5f467af732319c');
var cantsend = [];
var canTimerResetKey = true;

bot.on('message', (message) => {
	
	if (message.content === '!help') {
		
		message.reply('\n- !gen fortnite - generate a fortnite account\n- !gen hulu - generate a hulu account\n- !gen spotify - generate a spotify account\n- !gen roblox - generate a roblox account\n- !gen uplay - generate an uplay account\n- !gen minecraft - generate a minecraft account\n- !gen grammarly - generate a grammarly account\n- !help - this nigger\n- !claim [key] - if you have key special cupcakes only\n- !credits - See that PolygonNL#4921 made this and is always looking for work');
		
	} 
	
	if (message.content.startsWith("!gen")) {
		
		var sender = message.author;
		
		if (cantsend.includes(message.member.user.tag)) {
			
			message.reply("Only 1 account per 90s is permitted on this C O M M E R C I A L  P R O F F E S I O N A L  S E R V E R.");
			return;
			
		}	
				
			if (message.content.split(" ")[1] === "fortnite") {
					pastebin.getPaste('HJ5kknud').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Fortnite account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, 90000);
			}
			if (message.content.split(" ")[1] === "hulu") {
					pastebin.getPaste('9JK7yJgz').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Hulu account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, 90000);
			}
			if (message.content.split(" ")[1] === "spotify") {
					pastebin.getPaste('kaSSPzxa').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Spotify account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, 90000);
			}
			if (message.content.split(" ")[1] === "uplay") {
					pastebin.getPaste('G8tBEZdZ').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Uplay account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, 90000);
			}
			if (message.content.split(" ")[1] === "roblox") {
					pastebin.getPaste('4LE40hyW').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Roblox account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, 90000);
			}
			if (message.content.split(" ")[1] === "minecraft") {
					pastebin.getPaste('zn4Hiiyx').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Minecraft account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, 90000);
			}
			if (message.content.split(" ")[1] === "grammarly") {
					pastebin.getPaste('M88Yq58i').then( function(data) {
							var accounts = data.split('\n');
							sender.send("Grammarly account: " + accounts[Math.floor(Math.random() * accounts.length)]);
					});
					cantsend.push(message.member.user.tag);
					setTimeout(function(){ 
    					 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }
					}, 90000);
			}
			
	}
	
	if (message.content == '!credits')
		message.reply('NULLED: PolygonNL DISCORD: PolygonNL#4921 BLACKHAT DEV WILL DO ANY JOB FOR THE RIGHT PRICE LEGAL OR ILLEGAL, 150+ WPM TYPESPEED FAST JOBS.');
	if (message.content.startsWith('!claim')) {
		
		var key = message.content.split(" ")[1];
		
		if (key === '53531367') {
			
			if (!(canTimerResetKey)) {
				
				message.reply('This key is on cooldown.');
				return;
				
			}
			
			message.reply('Congratulations. You have claimed a Timer Reset key. This key will be avaliable for anyone to use again in 360s.');
			canTimerResetKey = false;
			var index = cantsend.indexOf(message.member.user.tag);
    		if (index > -1) {
      			cantsend.splice(index, 1);
    		}
			setTimeout(function(){canTimerResetKey=true;},360000);
			return;
			
		}
		
		if (key === '777') {
			
			if (cantsend.includes(message.member.user.tag)) {
			
				message.reply("You must be off of gen and gamble cooldown to roll.");
				return;
			
			}
			
			var no = Math.random();
			
			if (no < 0.5) {
				
				message.reply("Unlucky, you lost the roll. You're on cooldown from gambling and genning for 600 seconds.");
				cantsend.push(message.member.user.tag);
				setTimeout(function(){	 var index = cantsend.indexOf(message.member.user.tag);
    					 if (index > -1) {
      						 cantsend.splice(index, 1);
    					 }},600000);
				return;
				
			}
			
			cantsend = [];
			message.reply("Lucky, you won. The entire servers gen timers just got reset.");
			
		}
	}
});
bot.login('NDk1MDMzMTk1ODg5MTY0MzA4.Do8S9w.CDbnhlryAvzGrqpQz09iKbz8fXc');