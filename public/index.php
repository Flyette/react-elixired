<?php require 'session.php';?>
<!DOCTYPE html>
<html lang="fr">
<head>

	<meta charset="UTF-8">
	<title>React all the things !</title>
	<link rel="stylesheet" href="css/codemirror.css">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<h1>Editeur : Markdown / Html</h1>

<!-- 	<script>
		function set() {
			filename = document.forms["editor"].filename.value;
			data = document.getElementById('textmd').getValue;
			console.log('ici le texte');
			console.log(data);
			localStorage.setItem(filename, data);
			document.forms["editor"].value = "";
		}
		function get() {
			filename = document.forms["editor"].filename.value;
			document.getElementById('textmd').getValue = localStorage.getItem(filename);
		}
	</script> -->
	<div id="editeur">
	<form method="POST" action="index.php" name="editor">
		<textarea onclick="this.value=''" name="data" id="textmd"></textarea>
		<input name="filename" placeholder="nom du fichier">
		<input type="submit" value="Sauvegarde" name="sauvegarde">
		<input type="submit" placeholder="nom du fichier" value="cherche" name="cherche">
		<div id="editeur">

		</form>	
		<div id="text"></div>
	</div>
	<h1><?= $_SESSION[$nom]; ?></h1>
	<h1><?= $_POST['filename']; ?></h1>
</body>
<script src="js/jquery.min.js"></script>
<script src="js/codemirror.js"></script>
<script src="mode/javascript/javascript.js"></script>
<script src="js/markdown.js"></script>
<script src="js/bundle.js"></script>

</html>


