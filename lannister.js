/* lannister.js */


const Discord = require('discord.js');
const client = new Discord.Client();


const token = 'YOUR_CUSTOM_TOKEN';
const prefix = '$';

var consoleName = 'LannisterBot: ';


client.login(token);
console.log(consoleName + 'Attempting to connect to services.');


client.on('ready', () => {
  console.log(consoleName + 'Service Token: ' + token);
  console.log(consoleName + 'Service Prefix: ' + prefix);
  console.log(consoleName + 'Successfully connected to services.');
});


client.on('message', message => {

  //var msgArgs = message.content.split (/[ ]+/);
  var msgArgs = message.content.substring(prefix.lenght).split(" ");
  switch (msgArgs[0]) {
    case '$help':

    message.reply({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: 'Commands',
      url: '',
      description: 'All supported commands w/ params',
      fields: [{
          name: '$img',
          value: 'Coming Soon'
        },{
          name: '$8ball',
          value: 'Make your everyday decisions easier! - Usage: $8ball <param-question>'
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: 'Lannister Bot - A simple bot created by Heisen'
      }
    }
  });
      console.log(consoleName + message.author.username + ' used the ' + message.content + ' command.')

      break;
    case '$img':

      message.reply(msgArgs[1]);

      break;
    case '$8ball':
    if (msgArgs[1] === "undefined") {};
      var random = Math.random() * 100;

      if (random >=80) {
        var response = 'Yeah, for sure..';
      };
      if (random >=60 && random <=79) {
        var response = 'Definitely Yes.';
      };
      if (random >=40 && random <=59) {
        var response = 'Definitely No..';
      };
      if (random >=20 && random <=39) {
        var response = 'Maybe..';
      };
      if (random <=19) {
        var response = 'Nope!';
      };
        message.reply({embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: '',
          url: '',
          description: '',
          fields: [{
              name: 'Question',
              value: message.content
            },{
              name: 'Result',
              value: response
            }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: 'Lannister 8ball - Trustworthy Source'
          }
        }
      });
      console.log(consoleName + message.author.username + ' used the ' + '$8ball' + ' command.')
      break;
    default:
  }
});
