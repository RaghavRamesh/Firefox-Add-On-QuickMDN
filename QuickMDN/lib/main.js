// Button
var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

var button = buttons.ActionButton({
	id: 'mozilla-developer-link',
	label: 'QuickMDN',
	icon: {
		"16": './icon-16.png',
		"32": './icon-32.png',
		"64": './icon-64.png'
	},
	onClick: handleClick
});

function handleClick(state) {
	tabs.open("http://developer.mozilla.org/en-US");
}

// ContextMenu
var contextMenu = require('sdk/context-menu');
var menuItem = contextMenu.Item({
	label: 'Search in MDN',
	context: contextMenu.SelectionContext(),
	contentScript: 'self.on("click", function() {' +
	'	var text = window.getSelection().toString();' +
	'   text = text.replace(" ", "+");' +
	'   self.postMessage(text);' +
	'});',
	onMessage: function(selectionText) {
		tabs.open("http://developer.mozilla.org/en-US/search?q=" + selectionText);
	}
});
