import TelegramBot from "node-telegram-bot-api";
import axios from "axios";
import express  from "express";

const app = express();
app.use(express.json());

const token = '7319523060:AAGdD4LdffumYxHTF0AO_AZp8MSDgOvP0Xo';
const webhookUrlPreview = 'tg-bot-wangthing-closers-projects-691e03b6.vercel.app';
const webhookUrl = 'tg-bot-blush.vercel.app';

// 使用从BotFather获得的token

// 创建一个新的Telegram机器人实例
const bot = new TelegramBot(token, { polling: true });

// 处理'/start'命令
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello! I am your bot. How can I help you?');
});

// 回显用户发送的消息
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  
  // 检查是否是命令，忽略命令消息
  if (messageText.startsWith('/')) return;

  bot.sendMessage(chatId, messageText);
});


// 设置Webhook
// axios.post(`https://api.telegram.org/bot${token}/setWebhook`, {
//   url: webhookUrl
// }).then(response => {
//   console.log('Webhook set:', response.data);
// }).catch(error => {
//   console.error('Error setting webhook:', error);
// });

// // 处理Webhook回调
// app.post('/telegram-webhook', (req, res) => {
//   const message = req.body.message;
//   const chatId = message.chat.id;
//   console.log(message, 'dsada?????>?>?>?>?')

//   if (message.text === '/hello') {
//     res.json({ message: 'Hello from the preview environment!' });
//   } else {
//     res.json({ message: 'This is a message from the preview environment.' });
//   }
// });

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the preview environment!' })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});