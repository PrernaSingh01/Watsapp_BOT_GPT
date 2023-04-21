const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

//client.on('message', message => {
//	if(message.body === 'Hi') {
//		message.reply('hlo');
//	} else {
//		message.reply('Buddhu');
//	}
//});

client.on('message', message => {
	if(message.body === 'Hi') {
		message.reply('Yes👋');
	} else {
		message.reply('Or Bolo😁');
	}
});
 

client.initialize();
 