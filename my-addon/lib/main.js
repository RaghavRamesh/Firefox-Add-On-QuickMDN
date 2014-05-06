// Button
var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

var button = buttons.ActionButton({
	id: 'stack-overflow-link',
	label: 'QuickSO',
	icon: {
		"16": './icon-16.png',
		"32": './icon-32.png',
		"64": './icon-64.png'
	},
	onClick: handleClick
});

function handleClick(state) {
	// tabs.open("http://www.mozilla.org/");
	panel.show();
}

// ContextMenu
// var contextMenu = require('sdk/context-menu');
// var menuItem = contextMenu.Item({
// 	label: 'Log Selection',
// 	context: contextMenu.SelectionContext(),
// 	contentScript: 'self.on("click", function() {' +
// 	'	var text = window.getSelection().toString();' +
// 	'   alert(text);' +
// 	'   self.postMessage(text);' +
// 	'});',
// 	onMessage: function(selectionText) {
// 		console.log(selectionText);
// 	}
// });

// Toolbar
// var { ActionButton } = require('sdk/ui/button/action');
// var { Toolbar } = require('sdk/ui/toolbar');
// var { Frame } = require('sdk/ui/frame');

// var previous = buttons.ActionButton({
// 	id: "previous",
// 	label: "previous",
// 	icon: "./previous.png"
// });

// var next = buttons.ActionButton({
// 	id: "next",
// 	label: "next",
// 	icon: "./next.png"
// });

// var play = buttons.ActionButton({
// 	id: "play",
// 	label: "play",
// 	icon: "./play.png"
// });

// var frame = new Frame({
// 	url: "./frame-player.html"
// });

// var toolbar = new Toolbar({
// 	title: "Player",
// 	items: [previous, play, next, frame]
// });

