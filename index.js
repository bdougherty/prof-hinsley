'use strict';

const Slapp = require('slapp');
const BeepBoopContext = require('slapp-context-beepboop');

if (!process.env.PORT) {
	throw Error('PORT missing but required');
}

const slapp = Slapp({
	context: BeepBoopContext()
});

slapp.message('.*', ['direct_message', 'direct_mention'], (msg, text, greeting) => {
	msg.say('Fine');
});

slapp.attachToExpress(require('express')()).listen(process.env.PORT);
