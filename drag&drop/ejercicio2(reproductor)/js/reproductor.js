var titulos=["Tocado y hundido", "Dangerous", "I bet my life"];
var mp3=["melendi.mp3","dguetta.mp3","imaginedragons.mp3"];
var cantante=["Melendi","David Guetta", "Imagine Dragons"];
var imgs_peq=["melendi_peq.jpg","dguetta_peq.jpg","imaginedragons_peq.jpg"];
var imgs=["melendi.jpg","dguetta.jpg","imaginedragons.jpg"];

var lista=document.getElementById("lista");

var canciones=[];
class Cancion{
  constructor(id,titulo,mp3,cantante,img_peq,img){
    this.id=id;
    this.titulo=titulo;
    this.mp3=mp3;
    this.cantante=cantante;
    this.img_peq=img_peq;
    this.img=img;
    this.crearMiniatura();
  }

  crearMiniatura() {
    var mini_img=document.createElement("img");
    mini_img.src="imagenes/"+this.img_peq;
    mini_img.id=this.id;
    mini_img.alt=this.titulo;

    mini_img.setAttribute("dragable","true");
    mini_img.setAttribute("ondragstart","start(event)");
    lista.appendChild(mini_img);
  }
  reproducir() {

  }
}

for (var i = 0; i < titulos.length; i++) {
  cancion=new Cancion(i,titulos[i],mp3[i],cantante[i],imgs_peq[i],imgs[i]);
  canciones.push(cancion);
}
