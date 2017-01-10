<?php
$pais= $_POST["pais"];
$clima="";
switch ($pais) {
  case 'españa':
    $clima="iberica";
  case 'italia':
    $clima="mediterranea";
  case 'siberia':
    $clima="gelida";
  case 'sahara':
    $clima="ardiente";
    break;

  default:
    $clima="no definido"
  break;
}
echo $clima;

 ?>
