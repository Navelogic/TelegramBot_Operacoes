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
 await ctx.reply(`Por favor, substitua todas as vírgulas por pontos`);
 await ctx.reply(`Para obter toda a lista de operações suportadas digite ou selecione /lista`);
});




bot.hears('/lista', ctx =>{
  ctx.replyWithHTML(`
    <b>Conversões</b>
    /Celsius_Para_Fahrenheit
    /Fahrenheit_Para_Celsius
    `);
 });














































































//Operações

bot.hears(/Celsius_Para_Fahrenheit/i, async ctx => {
  await ctx.reply('Digite qual o valor em Celsius. Pode ser um valor positivo ou negativo.');
  bot.on('text', async ctx =>{
    var celsius = ctx.update.message.text;
    var valor = celsius.replace(/[^0-9,-]/g,'');
    var calculo = (((valor)*9/5) + 32);
    ctx.reply((calculo)+"°F");
    var celsius = 0;
    var calculo = 0;
    await ctx.reply("Volte para a /lista");
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
