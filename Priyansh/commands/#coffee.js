const fs = require("fs");
module.exports.config = {
  name: "coffee",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("coffee") ||
     react.includes("Coffe") || react.includes("cofe") || react.includes("Cofe") ||
react.includes("caufi") ||
react.includes("Caufi") ||     
react.includes("cofie")) {
    var msg = 
        body: `${name} 𝐋𝐨 𝐁𝐀𝐁𝐘 𝐂𝐎𝐅𝐅𝐄  𝐏𝐈𝐎💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/coffee.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }