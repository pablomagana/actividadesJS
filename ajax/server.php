<?php
$pais= $_POST["pais"];
$clima="";
switch ($pais) {
  case 'españa':
    $clima="iberica";
    break;
  case 'italia':
    $clima="mediterranea";
    break;
  case 'siberia':
    $clima="gelida";
    break;
  case 'sahara':
    $clima="ardiente";
    break;

  default:
    $clima="no definido";
  break;
}
echo $clima;

 ?>
