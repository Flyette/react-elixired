<?php 
if(isset($_POST['submit'])){
	$_session['data'] = $_POST['data'];
}
?>
<h1><?= $_session['data'];?></h1>