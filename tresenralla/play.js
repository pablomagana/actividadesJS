class Tablero{
  constructor(){
    this.casillas=new Array(3);
    this.turno=1;
    this.numMovimientos=9;
    campoTurno.innerHTML="Jugador "+this.turno;
  }
  inicializarTablero(){
    //matriz 3x3
    for (var i = 0; i < this.casillas.length; i++) {
      this.casillas[i]=new Array(3);
      // for (var j = 0; j < this.casillas[i].length; j++) {
      //   this.casillas[i][j]=null;
      // }
    }
  }

  detectarLineaHorizontal(){
    for (var i = 0; i < this.casillas.length; i++) {
      if(this.casillas[i][0]>0 && this.casillas[i][1]>0 && this.casillas[i][2]>0){
        if(this.casillas[i][0]==this.casillas[i][1] && this.casillas[i][1]==this.casillas[i][2]){
        //if (this.casillas[i][0]==this.casillas[i][1]==this.casillas[i][2]) {
          return true;
        }
      }
    }
    return false;
  }
  detectarLineaVertical(){
    for (var i = 0; i < this.casillas.length; i++) {
      if(this.casillas[0][i]>0 && this.casillas[i][1]>0 && this.casillas[2][i]>0){
        if(this.casillas[0][i]==this.casillas[1][i] && this.casillas[1][i]==this.casillas[2][i]){
        //if (this.casillas[0][i]==this.casillas[1][i]==this.casillas[2][i]) {
          return true;
        }
      }
    }
    return false;
  }
  detectarLineaDiagonal(){
    if((this.casillas[0][0]>0 && this.casillas[1][1]>0 && this.casillas[2][2]>0) || (this.casillas[0][2]>0 && this.casillas[1][1]>0 && this.casillas[2][0]>0)){
      if(this.casillas[0][0]==this.casillas[1][1] && this.casillas[1][1]==this.casillas[2][2]){
      //if (this.casillas[0][0]==this.casillas[1][1]==this.casillas[2][2]) {
        return true;
      }else if(this.casillas[0][2]==this.casillas[1][1] && this.casillas[1][1]==this.casillas[2][0]){
      //}else if(this.casillas[0][2]==this.casillas[1][1]==this.casillas[2][0]){
        return true;
      }
    }
    return false;
  }
  detectarLinea(){
    if (this.detectarLineaHorizontal()) {
      return true;
    }
    if (this.detectarLineaVertical()) {
      return true;
    }
    if (this.detectarLineaDiagonal()) {
      return true;
    }
    return false;
  }
  marcarMovimiento(casilla){
    //console.log(casilla.id.split("casilla")[1].substring(0,1));
    //console.log(casilla.id.split("casilla")[1].substring(1,2));
    var x=parseInt(casilla.id.split("casilla")[1].substring(0,1));
    var y=parseInt(casilla.id.split("casilla")[1].substring(1,2));
    this.casillas[x][y]=this.turno;

    if (this.turno==1) {
      //console.log("tirada de 1");
      casilla.textContent="X";
    }else {
      //console.log("tirada de 2");
      casilla.textContent="O";
    }
    // console.log(this.casillas[0][0]+"-"+this.casillas[0][1]+"-"+this.casillas[0][2]);
    // console.log(this.casillas[1][0]+"-"+this.casillas[1][1]+"-"+this.casillas[1][2]);
    // console.log(this.casillas[2][0]+"-"+this.casillas[2][1]+"-"+this.casillas[2][2]);
    this.numMovimientos--;

    if (this.detectarLinea()) {
      console.log("Jugador "+this.turno+" gana la partida");
      alert("Enhorabuena Jugador "+this.turno+ ". Has ganado la partida");
      fin=true;
    }else if (this.numMovimientos==0) {
      alert("Fin de la partida. Limite de movimientos alcanzado");
      location.reload();
    }
    this.changeTurn();


  }
  changeTurn(){
    if (this.turno==1) {
      this.turno=2;
    }else {
      this.turno=1;
    }
  }
}
