var marked = require('marked');
console.log(marked('I am using __markdown__.'));

//affiche l'editeur
var fieldmd = CodeMirror.fromTextArea(document.getElementById('textmd'), {
	value: "write markdown",
	mode: "text/x-markdown",
	lineNumbers: true,
	theme: "default",
	autofocus: true
});

function init(){
	reset();
};

//repetition
function reset(){
	setInterval(getText, 200);
}
function getText(){

	var text = fieldmd.getValue();
	document.getElementById('text').innerHTML = marked(text);
	
};

init();	