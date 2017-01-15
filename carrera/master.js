var coches_num=5;
var coches= [];
var winner=null;
var interval=null;

function getSpeed() {
  return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}
function checkwinner() {
  for (var i = 0; i < coches.length; i++) {
    if(coches[i].ganador==true){
      winner=(coches[i].id)+1;
      return true;
    }
  }
}
class Coche{
  constructor(id){
    this.id=id;
    this.pos=0;
    this.ganador=false;
    $("#pista").append("<div class=carril><img id="+this.id+" src='img/coche_"+(this.id+1)+".png'/></div>");
    this.elemento=document.getElementById(this.id);
    this.elemento.style.left=this.pos+"px";
  }

  avanzar(){
    if(this.pos<=(document.getElementById("pista").offsetWidth-100)){
      this.pos=this.pos+getSpeed();
      $("#"+this.id).animate({
        left:this.pos+"px"
      },250);
      //this.elemento.style.left=this.pos+"px";
      return;
    }
    this.ganador=true;
  }
}

$(document).ready(function() {
  for (var i = 0; i < coches_num; i++) {
    coches[i]=new Coche(i);
  }
  interval=setInterval(function () {
    checkwinner();
    if(winner!=null){
      clearInterval(interval);
      alert("Ha ganado el coche "+winner);
    }
    for (var i = 0; i < coches.length; i++) {
      coches[i].avanzar();
    }

  }, 250);

  //console.log(coches);
  //console.log(document.getElementById("pista").offsetWidth);
});
