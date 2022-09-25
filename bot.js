const env = require('./.env');
const { Telegraf, Context } = require('telegraf');
const bot = new Telegraf(env.token);


// Ação quando o USER inicia o BOT
bot.start(async ctx =>{
  // Capturando dados do USER
  const nome = ctx.update.message.from.first_name;
  const idUser = ctx.update.message.from.id;
  const userName = ctx.update.message.from.username;
  const lang = ctx.update.message.from.language_code;
  
  // Tratando idioma do USER
  if(lang != "pt-br"){
    ctx.replyWithHTML (`Sorry <b>${userName}</b>. We do not currently support your language.`);
  } else {
  await ctx.replyWithHTML(`Olá <b>${userName}</b>. Eu sou o <b>CALCULATOR</b>, um bot de formas matemáticas!

  Para que eu funcione perfeitamente em seus estudos, substitua todas das vírgulas por pontos...

  Essa é a lista de todas as operações suportadas: /lista
  Caso tenha alguma dúvida: /ajuda
  `);
}});

bot.command('lista', ctx => {
ctx.replyWithHTML(`
<b>Conversões</b>

/Celsius_Para_Fahrenheit

`);
});














































































// Operações

// Celsius Para Fahrenheit

bot.hears(/Celsius_Para_Fahrenheit/i, async ctx => {
  await ctx.reply('Digite qual o valor em Celsius. Pode ser um valor positivo ou negativo.');
  bot.on('text', ctx => {
      let celsius = ctx.update.message.text;
      let valor = celsius.replace(/[^0-9,-]/g,'');
      let calculo = (((valor)*9/5) + 32);
      ctx.replyWithHTML(`${calculo}°F`);
      ctx.reply("Volte para a /lista");
    });
});

//Fahrenheit para Celsius
bot.hears('/Fahrenheit_Para_Celsius', async ctx =>{
  await ctx.reply('Digite qual o valor em Fahrenheit. Pode ser um valor positivo ou negativo.');
  bot.on('text', async ctx =>{
    var fahrenheit = ctx.update.message.text;
    var valor = fahrenheit.replace(/[^0-9,-]/g,'');
    var calculo = (((valor) - 32) * 5 / 9);
    var fahrenheitParaCelsius = calculo.toLocaleString('pt-BR');
    await ctx.reply((fahrenheitParaCelsius)+"°C");
    await ctx.reply("Volte para a /lista");
    
   });
  });




bot.startPolling();
