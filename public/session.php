<?php 
session_start();
//on enregistre les parametres comme variables de session
if(isset($_POST['sauvegarde'])){
	$data = $_POST['data'];
	$nom = $_POST['filename'];
	$_SESSION[$nom] = $data;
}
//on cherche la valeur de la clef postee
if(isset($_POST['cherche'])){
	$nom = $_POST['filename'];
	if(isset($_SESSION[$nom])){
	$_SESSION['data'] = $_SESSION[$nom];
	}
}
?>

