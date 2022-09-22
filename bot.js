const env = require('./.env');
const { Telegraf, Context } = require('telegraf');
const bot = new Telegraf(env.token);

bot.start(async ctx =>{
  //Capturando dados do USER
  const nome = ctx.update.message.from.first_name;
  const idUser = ctx.update.message.from.id;
  const userName = ctx.update.message.from.username;
  const lang = ctx.update.message.from.language_code;

 await ctx.replyWithHTML(`Olá <b>${userName}</b>. Eu sou o <b>CALCULATOR</b>, um bot de formas matemáticas!`);
 await ctx.reply(`Vamos começar fazendo uma conversão de Celsius para Fahrenheit!`);

 bot.on('text',async ctx =>{
  const celsius = ctx.update.message.text;
  const valor = celsius.replace(/[^0-9,-]/g,'');
  const calculo = ((valor)*9/5) + 32;
  const celsiusParaFahrenheit = calculo.toLocaleString('pt-BR');
  ctx.reply(celsiusParaFahrenheit);
 });
});





bot.startPolling();
