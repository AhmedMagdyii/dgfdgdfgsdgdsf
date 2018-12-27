const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const UserBlocked = new Set();
const prefix = '*'

 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 



client.on('message', message => {
    if (message.content === '*spam') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 90000; x++) {
            message.channel.send(`GMZN Host #Spam ${x}`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    

client.login(process.env.BOT_TOKEN);
