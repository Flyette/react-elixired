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
	fieldmd.getText(fieldmd);
};
init();

'use strict';
var gulp = require('gulp');
var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');
console.log(marked('I am using __markdown__.'));

console.log('linked : main.js');


window.onload = function(){
	var fieldmd = document.getElementById('textmd');
	var Markdown = CodeMirror.fromTextArea(fieldmd, {
		value: "#Markdown",
		mode: "markdown"
	});
	var fieldHtml = document.getElementById('text');
	fieldHtml.innerHTML = 'Text html';

};
ReactDOM.render(
  '<h1>Hello, world!</h1>', document.getElementById('hello')
);

// var myCodeMirror = CodeMirror(document.body, {
//   value: "showText();",
//   mode:  "javascript"
// });

// function insertTag(startTag, endTag, textareaId, tagType){
// 	var field = document.getElementbyId('#markdownArea');
// 	var titre = field.innerText || field.innerContent;
	
// }

// function showText(){
// 	var field = document.getElementbyId('#textMarkdown'); 
// 	var titre = field.innerText || field.innerContent; 
	
// }

var marked = require('marked');

$(function(){
	var app = {
		init : function(){

			// Initialisation des deux éditeurs

			var mdEditor = CodeMirror(document.getElementById('container'), {
				value: "Hi there",
				mode:  "text/x-markdown",
				lineNumbers: true,
				theme: "default",
				autofocus: true,
				fontSize: "24px"
			})
			mdEditor.getWrapperElement().style["font-size"] = 16 +"px";
  			mdEditor.refresh();
			app.getText(mdEditor);
		},
		getText : function(mdEditor){

			// Récupère la valeur du contenu de l'éditeur MD

			$('.CodeMirror').on('keypress keyup keydown', function(){
				var text = mdEditor.getValue();
				app.mdToHTML(text);
			});
		},
		setText : function(text){

			$('#result').html(text);

		},
		mdToHTML : function(text){

			// Transforme le MD en HTML

			var text = marked(text);
			app.setText(text)
		},
	}
	app.init();
});

