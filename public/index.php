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
	<h1 id="titre">Editeur : Markdown / Html</h1>

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
	<h1 id="titre">Fichier : <?= $_POST['filename']; ?></h1>
	<div class="container">
		<div class="editeur">
			<form method="POST" action="index.php" name="editor">
				<textarea onclick="this.value=''" name="data" id="textmd"><?php if(isset($_POST['cherche'])){ echo $_SESSION[$nom];} ?></textarea>
				<p><input name="filename" placeholder="nom du fichier"></p>
				<button type="submit" value="Sauvegarder" name="sauvegarde">Sauvegarder</button>
				<button type="submit" placeholder="nom du fichier" value="Chercher" name="cherche">Chercher</button>
			</form>	
		</div>
		<div class="edit">
			<div id="text"></div>
		</div>
	</div>
</body>
<script src="js/jquery.min.js"></script>
<script src="js/codemirror.js"></script>
<script src="mode/javascript/javascript.js"></script>
<script src="js/markdown.js"></script>
<script src="js/bundle.js"></script>

</html>


