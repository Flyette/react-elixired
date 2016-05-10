var marked = require('marked');
console.log(marked('I am using __markdown__.'));


function init(){
	var fieldmd = CodeMirror(document.getElementById('textmd'), {
		value: "write markdown",
		mode: "text/x-markdown",
		lineNumbers: true,
		theme: "default",
		autofocus: true
	})
	fieldmd.refresh();
	getText(fieldmd);
};

function getText(fieldmd){
	$('#view').on('click', function(){
		var text = fieldmd.getValue();
		markdownToHtml(text);
	});
};

function setText(text){
	$('#text').html(text);
};

function markdownToHtml(text){
	var text = marked(text);
	setText(text);
};
init();	