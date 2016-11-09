var librosId=["ijs","ijq","jsa","jqa","dboo"];
var libros=["Introdución a JavaScript","Introducción a Jquery","Javascript Avanzado","Jquery Avanzado","Desarrollo con bootstrap"];
function setCookie(nombre,valor,caducuidad,dominio,ruta,segura){
  if (arguments.length < 2) {
    return null;
  }

  cookie=encodeURIComponent(nombre)+"="+encodeURIComponent(valor);//codificar el campo para evitar problemas con caracteres extraños

  if (arguments[2]!=undefined) {
    cookie+=";max-age="+caducuidad;//expires-formato fecha utf
  }
  if (arguments[3]!=undefined) {
    cookie+=";domain="+dominio;
  }
  if (arguments[4]!=undefined) {
    cookie+=";path="+ruta;
  }
  if (arguments[5]!=undefined && arguments[5]=="Y") {
    cookie+=";secure";
  }
  document.cookie=cookie;
}

function getCookie(nameCookie){
  if (document.cookie.length>0) {
    cookies=document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      cookie=cookies[i].split("=");
      name=decodeURIComponent(cookie[0]);
      value=decodeURIComponent(cookie[1]);
      if(name==nameCookie){
        return value;
      }
    }
    return null;
  }
}

function verCesta(){
  cesta=document.getElementById('listacesta');
  document.write("<li onclick='rmcesta("+item+")'>"+libros[librosId.indexOf(item)]+"</li>");
}
function vaciarCesta(){
  if (document.cookie.length>0) {
    cookies=document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      cookie=cookies[i].split("=");
      name=decodeURIComponent(cookie[0]);
      value=decodeURIComponent(cookie[1]);
      //imprimir linea de libro
    }
    return null;
  }
}
function addCesta(item) {
  cookieItem=getCookie(item);
  if(cookieItem!=null){
      setCookie(parseInt(cookieItem)+1)
  }
}
function rmCesta(item) {
  cookieItem=getCookie(item);
  if(cookieItem!=null){
      if(parseInt(cookieItem)<0){
        setCookie(parseInt(cookieItem)-1);
      }
  }
}
