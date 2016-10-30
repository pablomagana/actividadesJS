//variables
campo=document.getElementById('campo');

acum=0;
num=0;
result=0;
ans=0;//ultimo numero marcado

n1=0;
n2=0;

opt=null;//operador
optFn=null;//operador de funciones
enableOpt=true;//habilita las operaciones simples
lastOpt=null;//controla que ha pasado por marcarOperador
exp=false;//controla una sola operacion exponencial al mismo tiempo

memoria=null;
operadores=new Array("+","-","*","/");
operadoresFunciones=new Array("sqrt ","sen ","cos ","n exp x","log ","tan ");

//funciones
function marcarNumero(n) {
  if((campo.value=="0" && n!=".") || operadores.indexOf(campo.value)>-1){
    campo.value="";
  }
  campo.value=campo.value.concat(n);
  num=parseFloat(campo.value);
}

function limpiar(){
  campo.value="0";
  acum=0;
  num=0;
  result=0;
  ans=0;

  n1=0;
  n2=0;

  opt=null;
  optFn=null;
  document.getElementById('logg').innerHTML="";
}// //limpia variables de la calculadora excepto la memoria
function borrar(){
  campo.value="0"
  memoria=0;
}//solo limpia la memoria
function operar(nu){
  if(n1==0){
    n1=nu;
  }else {
    n2=parseFloat(nu);
    switch (opt) {
      case "+":
        result=n1+n2;
        break;
      case "-":
        result=n1-n2;
        break;
      case "*":
        result=n1*n2;
        break;
      case "/":
        result=n1/n2;

        break;
      default:

    }
  }

  return result;
}//realizar la operación detectando si tiene todos los valores para ello
function marcarOperador(opt){
  if(enableOpt){
    campo.value=opt;
    this.opt=opt;
    lastOpt=opt;
    acum=operar(num);
  }
  //if (this.opt==operadores[2] || this.opt==operadores[3]){n1=acum;}
  printLog("---------------------------------");
  printLog("num "+num);
  printLog("acumulado "+acum);
  printLog("n1 "+n1);
  printLog("n2 " +n2);
  printLog("result "+result);
  printLog("ans "+ans);
  printLog("opt "+opt);
  printLog("optFn "+optFn);
}//inserta el el sistema el operador simple seleccionado
function resolver(){//detecta el tipo de operador seleccionado(simple , función) y ejecuta el metodo de calculo relativo. despues setea variables comunes
  if(enableOpt){
    acum=operar(lastOpt==null?ans:num);
  }else {
    acum=resolverFuncion(campo.value);//necesario string
  }
  if(lastOpt!=null){ans=num;}
  n1=acum;
  campo.value=acum;
  lastOpt=null;
  exp=false;
  enableOpt=true;

  printLog("---------------------------------");
  printLog("num "+num);
  printLog("acumulado "+acum);
  printLog("n1 "+n1);
  printLog("n2 " +n2);
  printLog("result "+result);
  printLog("ans "+ans);
  printLog("opt "+opt);
  printLog("optFn "+optFn);

}//

//memoria de la calculadora
function saveMemoria(num){
  if(!isNaN(num)){
    memoria=num;
  }
}
function getMemoria(){
  if(memoria!=null){
    campo.value=memoria;
    num=parseFloat(campo.value);
  }
}

function marcarFuncion(fn){
  console.log(fn);

  switch (fn) {
    case "SQRT x":
      campo.value="sqrt ";
      break;
    case "SEN x":
      campo.value="sen ";
      break;
    case "n EXP x":
    if(exp==false){
      if((campo.value=="0" && campo.value!=".") || (operadoresFunciones.indexOf(campo.value)>-1 && campo.value!="n exp x")){
        campo.value="1 E ";
      }else{
        campo.value=campo.value+" E ";
      }
      exp=true;
    }
      break;
    case "COS x":
      campo.value="cos ";
      break;
    case "LOG x":
      campo.value="log ";
      break;
    case "TAN x":
      campo.value="tan ";
      break;
    default:

  }
  optFn=fn;
  enableOpt=false;

  printLog("---------------------------------");
  printLog("num "+num);
  printLog("acumulado "+acum);
  printLog("n1 "+n1);
  printLog("n2 " +n2);
  printLog("result "+result);
  printLog("ans "+ans);
  printLog("opt "+opt);
  printLog("optFn "+optFn);
}//inserta en el sistema y en pantalla el operador seleccionado con el formato

function resolverFuncion(nstr){
  n=nstr.split(" ");
  switch (optFn) {
    case "SQRT x":
      result=Math.sqrt(n[1]);
      break;
    case "SEN x":
      result=Math.sin(n[1]);
      break;
    case "n EXP x":
      result=Math.pow(n[0],n[2]);
      break;
    case "COS x":
      result=Math.cos(n[1]);
      break;
    case "LOG x":
      result=Math.log(n[1]);
      break;
    case "TAN x":
      result=Math.tan(n[1]);
      console.log("tan "+n[1]+ " = "+result);
      break;
    default:

  }
  return result;
}//resolver funcion avanzada

logg.style.display='none';
logg.style.overflow='none';
function printLog(varLog){//log interno para control de variables. def not enable
  logg=document.getElementById('logg');
  logg.innerHTML=logg.innerHTML+"<p>"+varLog+"</p>";
}
