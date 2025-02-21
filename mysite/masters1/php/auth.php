<?php

$login=$_POST['login'];
$pass=$_POST['pass'];

$mysql=mysqli_connect('localhost', 'root', 'root', 'zollics');
if ($mysql==False)
{
    echo "can`t connect";
    echo mysqli_connect_error();
    exit ();
}
$result=$mysql->query("SELECT * FROM `registration` WHERE `login`
='$login' and `pass`='$pass'");
$user=$result->fetch_assoc();
if (count($user) ==0)
{
    echo "Пользователь не найден";
    exit();
}

$mysql->close();

header('Location: ../auth1.html')

?>