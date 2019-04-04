<?php
$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'password');
if (!empty($username)){
if (!empty($password)) {
	$host="localhost";
	$dbusername="root";
	$dbpassword="";
	$dbname = "youtube";

	$conn = new mysqli($host,$dbusername,$dbpassword,$dbname);
if (mysqli_connect_errno()) {
		die('Connect Error ('. mysqli_connect_errno() .') '. mysqli_connect_error());
	}	
	else{
		$sql = "INSERT INTO account (username, passowrd)
		values ('$username','$password')";
	}
}
else{
	echo "Password should not be empty";
	die();
}
}
else{
	echo "Username should not be empty";
	die();
}
?>