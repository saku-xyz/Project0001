<?php

$size1 = $_POST['name1'];
$size = $_POST['email1'];
$size2 = $_POST['message'];

$db = mysqli_connect('sql113.epizy.com','epiz_19410716','lakmal93','epiz_19410716_trmdb')
			or die('Error connecting to MySQL server.');
$data_table = "INSERT INTO mlist (name,email,message) VALUES ('$size1','$size','$size2')";

			$result = mysqli_query($db, $data_table);                            
$db->close;
header("Location: index1.html");
?>
