var myCodeMirror = CodeMirror(document.body, {
  value: "showText();",
  mode:  "javascript"
});

function insertTag(startTag, endTag, textareaId, tagType){
	var field = document.getElementbyId('#markdownArea');
	var titre = field.innerText || field.innerContent;
	
}

function showText(){
	var field = document.getElementbyId('#textMarkdown'); 
	var titre = field.innerText || field.innerContent; 
	
}