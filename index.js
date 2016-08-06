'use strict';

const Slapp = require('slapp');
const BeepBoopContext = require('slapp-context-beepboop');

const slapp = Slapp({
	context: BeepBoopContext()
});

slapp.message('.*', ['direct_message', 'direct_mention'], (msg, text, greeting) => {
	msg.say('Fine');
});
