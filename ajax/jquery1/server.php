<?php

$user=$_POST["user"];
$passwd=$_POST["passwd"];

if ($user == "pepe" && $passwd=="1234") {
  echo "OK";
  return;
}
echo "KO";
