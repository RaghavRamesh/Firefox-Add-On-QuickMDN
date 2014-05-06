var { ActionButton } = require('sdk/ui/button/action');
var { Toolbar } = require('sdk/ui/toolbar');
var { Frame } = require('sdk/ui/frame');

var previous = ActionButton({
	id: "previous",
	label: "previous",
	icon: "./previous.png"
});

var next = ActionButton({
	id: "next",
	label: "next",
	icon: "./next.png"
});

var play = ActionButton({
	id: "play",
	label: "play",
	icon: "./play.png"
});

var frame = new Frame({
	url: "./frame-player.html"
});

var toolbar = new Toolbar({
	title: "Player",
	items: [previous, play, next, frame]
});