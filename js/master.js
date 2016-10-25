class Puerta {
  constructor(nPuerta,propietario) {
    this.nPuerta=nPuerta;
    this.propietario=propietario;
  }
}
class Planta {
  constructor(nPlanta,puertas) {
    this.nPlanta=nPlanta;
    this.puertas=puertas;//array tipo Puerta
  }
}
class Edificio {
  constructor(calle,numero,cp,plantas) {
    this.calle=calle;
    this.numero=numero;
    this.cp=cp;
    this.plantas=plantas;//Array tipo Planta

  }
  //agregar
  agregarPlantasyPuertas(numplantas,npuertas){
    var puerta=null;
    var puertas=new Array();
    var planta=null;
    //var plantas=new Array();
    for (var i = 0; i < numplantas; i++) {
      puertas=new Array();
      for (var j = 0; j < npuertas; j++) {
        puerta=new Puerta(j,null);
        puertas.push(puerta);
      }
      planta=new Planta(i,puertas);
      //plantas.push(planta);
      this.plantas.push(planta);
    }

  }
  agregarPropietario(nombre,planta,puerta){
    this.plantas[planta-1].puertas[puerta-1].propietario=nombre;
  }
  //modificar
  modificarNumero(nuevoNumero){
    this.numero=nuevoNumero;
  }
  modificarCalle(nuevaCalle){
    this.calle=nuevaCalle;
  }
  modificarCodigoPostal(nuevoCP){
    this.cp=nuevoCP;
  }
  //mostrar
  mostrarCalle(){
    document.write("Calle : "+this.calle);
  }
  mostrarNumero(){
    document.write("Nº : "+this.numero);
  }
  mostrarcodigoPostal(){
    document.write("Código Postal : "+this.cp);
  }
  mostrarPlantas(){
    var propietarios=new Array();
    var propietario=new Array();
    var plantas=this.plantas.length;
    var puertas=0;
    //document.write("<h3>Lista de propietarios de edificio "+this.calle+" nº "+this.numero+" con Código Postal : "+this.cp+"</h3>")
    for (var i = 0; i < plantas; i++) {
      puertas=this.plantas[i].puertas.length;
      for (var j = 0; j < puertas; j++) {
        var propietario=(this.plantas[i].puertas[j].propietario==null)?"VACÍO":this.plantas[i].puertas[j].propietario;
        //document.write("<p>El propietario del piso "+(j+1)+" de la planta "+(i+1)+" es : "+propietario+"</p>");
        propietario=new Array(j+1,i+1,propietario);
        propietarios.push(propietario);
      }
    }
    return propietarios;
  }
}

//var Edificio1=new Edificio("av del cid","31","46860",new Array());
// Edificio1.agregarPlantasyPuertas(3,2);
// Edificio1.agregarPlantasyPuertas(2,3);
// Edificio1.modificarNumero("4");
// Edificio1.modificarCalle("alto palancia");
// Edificio1.modificarCodigoPostal("46920");
//
// Edificio1.mostrarCalle();
// document.write("<br/>");
// Edificio1.mostrarNumero();
// document.write("<br/>");
// Edificio1.mostrarcodigoPostal();
//
// Edificio1.agregarPropietario("paco",1,1);
// Edificio1.agregarPropietario("pablo",5,3);
// Edificio1.mostrarPlantas();
