var marked = require('marked');
console.log(marked('I am using __markdown__.'));

$(function(){
	var app = {
		init : function(){

			// Initialisation des deux éditeurs

			var fielmd = CodeMirror(document.getElementById('textmd'), {
				value: "Write markdown",
				mode:  "text/x-markdown",
				lineNumbers: true,
				theme: "default",
				autofocus: true
			})
			fieldmd.getWrapperElement().style["font-size"] = 16 +"px";
  			fieldmd.refresh();
			app.getText(fieldmd);
		},
		getText : function(mdEditor){

			// Récupère la valeur du contenu de l'éditeur MD

			$('.textmd').on('keypress keyup keydown', function(){
				var text = fieldmd.getValue();
				app.markdownToHtml(text);
			});
		},
		setText : function(text){

			$('#view').html(text);

		},
		markdownToHtml : function(text){

			// Transforme le MD en HTML

			var text = marked(text);
			app.setText(text)
		},
	}
	app.init();
});
// var marked = require('marked');

// $(function(){
// 	var app = {
// 		init : function(){

// 			// Initialisation des deux éditeurs

// 			var mdEditor = CodeMirror(document.getElementById('textmd'), {
// 				value: "write",
// 				mode:  "text/x-markdown",
// 				lineNumbers: true,
// 				theme: "default",
// 				autofocus: true,
// 				fontSize: "24px"
// 			})
// 			mdEditor.getWrapperElement().style["font-size"] = 16 +"px";
//   			mdEditor.refresh();
// 			app.getText(mdEditor);
// 		},
// 		getText : function(mdEditor){

// 			// Récupère la valeur du contenu de l'éditeur MD

// 			$('#view').on('click', function(){
// 				var text = mdEditor.getValue();
// 				app.mdToHTML(text);
// 			});
// 		},
// 		setText : function(text){

// 			$('#text').html(text);

// 		},
// 		mdToHTML : function(text){

// 			// Transforme le MD en HTML

// 			var text = marked(text);
// 			app.setText(text)
// 		},
// 	}
// 	app.init();
// });
