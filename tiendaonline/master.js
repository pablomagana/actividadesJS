var librosId=["ijs","ijq","jsa","jqa","dbo"];
var libros=["Introdución a JavaScript","Introducción a Jquery","Javascript Avanzado","Jquery Avanzado","Desarrollo con bootstrap"];
var vacia=document.getElementById('vacia');
var cesta=document.getElementById('listacesta');
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
      name=decodeURIComponent(cookie[0]).trim();
      value=decodeURIComponent(cookie[1]).trim();
      if(name==nameCookie){
        return value;
      }
    }
    return null;
  }
}

function verCesta(){
  cesta.innerHTML="";
  if (document.cookie.length>0) {
    vacia.style.display="none";
    cookies=document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      cookie=cookies[i].split("=");
      name=decodeURIComponent(cookie[0]).trim();
      value=decodeURIComponent(cookie[1]);
      indice=librosId.indexOf(name);
      libro=libros[indice];
      cesta.innerHTML+="<li><button type='button' name='button' onclick=\"rmCesta('"+name+"')\"> - </button>"+libro+" ("+value+")"+"</li>";
    }
    return null;
  }else {
    vacia.style.display="inline";
  }
}
function vaciarCesta(){
  dc=document.cookie;
  if (document.cookie.length>0) {
    cookies=document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      cookie=cookies[0].split("=");
      name=decodeURIComponent(cookie[0]).trim();
      value=decodeURIComponent(cookie[1]).trim();
      setCookie(name,0,0);
    }
    //verCesta();
  }
}

function addCesta(item) {
  cookieItem=getCookie(item);
  if(cookieItem!=null){
      setCookie(item,parseInt(cookieItem)+1);
  }else{
    setCookie(item,1);
  }
  verCesta();
}

function rmCesta(item) {
  cookieItem=getCookie(item);
  if(cookieItem!=null){
      if(parseInt(cookieItem)>1){/*get cookie devuelve el valor de la cookie que en este caso es el numero de libros de ese item*/
        setCookie(item,parseInt(cookieItem)-1);
      }else {
        setCookie(item,0,0);
      }
      verCesta();
  }
}
