<?php

$login=$_POST['login'];
$pass=$_POST['pass'];
$name=$_POST['name'];

if(mb_strlen($login) < 5 || mb_strlen($login) > 20) {
	echo "Недопустимая длина пароля";
	exit();
}
else if(mb_strlen($pass) < 6 || mb_strlen($pass) > 50) {
	echo "Недопустимая длина пароля";
	exit();
}
$mysql=mysqli_connect('localhost', 'root', 'root', 'zollics');
	if ($mysql==False){
		echo "Соединение не установлено";
		echo mysqli_connect_error();
		exit();
	}

$mysql->query("INSERT INTO `registration` (`login`, `name`, `pass`)
	VALUES ('$login', '$name', '$pass')");
$mysql->close();

header('Location: ../reg.html')
?>