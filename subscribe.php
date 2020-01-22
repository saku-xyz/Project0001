<?php
$size = $_POST['email'];

$db = mysqli_connect('sql113.epizy.com','epiz_19410716','lakmal93','epiz_19410716_trmdb')
			or die('Error connecting to MySQL server.');
$data_table = "INSERT INTO elist (email) VALUES ('$size')";

			$result = mysqli_query($db, $data_table);                            
$db->close;
header("Location: index1.html");
?>
