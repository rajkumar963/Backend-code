const telegramBot=require("node-telegram-bot-api");
const dotenv=require("dotenv");
const axios=require("axios");

dotenv.config();

const bot=new telegramBot(process.env.TELEGRAM_TOKEN,{polling:true});

// bot.on('message',(option)=>{
//     console.log("message received", option);

//     bot.sendMessage(option.chat.id, "Hello, I am a bot. I am here to help you");
// })

bot.onText(/joke/, async(option)=>{
  const response=await axios.get("https://official-joke-api.appspot.com/random_joke");
  console.log(response.data);

  const setup=response.data.setup;
  const punchline=response.data.punchline;
  bot.sendMessage(option.chat.id,setup + "\n" + punchline);
})
