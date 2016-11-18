var martian=document.getElementsByClassName('monstruo')[0];
var spaceship=document.getElementsByClassName('cohete')[0];
var balasContent=document.getElementById("balas");
var contadorSpan=document.getElementById('contador');
var balas=null;
var disparado=false;
var intervalBala;
movimiento=0//0 descendente  1 ascendente
yMartian=0;
xBala=0;
contador=0;


setInterval(moveMartian,2000);

document.onmousemove=moveSpaceship;
document.onkeypress=lanzarBala;


function moveSpaceship(e) {
  var y=e.pageY+50+66;

  //console.log(y);
  spaceship.style.position = 'fixed';
  spaceship.style.top=(y-66)+"px";
}
function moveMartian() {
  if(movimiento==0){
    yMartian+=30;
  }else{
    yMartian-=30;
  }
  if(yMartian==(screen.height-200)){
    movimiento=1;
  }else if(yMartian==0){
    movimiento=0;
  }
  //console.log(yMartian);
  martian.style.position = 'fixed';
  martian.style.right="0px";
  martian.style.top=(yMartian)+"px";
}
function lanzarBala(e){
  //console.log(martian.style.top);
  if (e.keyCode === 0 || e.keyCode === 32) {
      e.preventDefault();
      if(disparado==false){
        balasContent.innerHTML+="<img class='balas' src='img/proyectil.png'style='position:fixed;top:"+(spaceship.style.top.split("p")[0]-20)+"px;left:0px;' />";
        balas=document.getElementsByClassName('balas')[0];

        intervalBala=setInterval(moverBala,10);
        disparado=true;
      }
  }
}
function moverBala() {

    xBala+=5;
    balas.style.left=xBala+"px";
    if(xBala>=screen.width){
      xBala=0;
      balas.parentNode.removeChild(balas);
      disparado=false;
      clearInterval(intervalBala);
    }
    checkColision();


}

function checkColision(){
  //comparar posiciones
  if(balas.style.left.split("px")[0]>(screen.width-350)){
    console.log("altura alcanzada");
    clearInterval(intervalBala);
    balas.style.left=balas.style.left.split("px")[0]+"px";
  }
  contadorSpan.innerHTML=contador;
}
