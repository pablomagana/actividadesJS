// cambiar todo por un sistema de dos numeros
// y una variable que almacene la respuesta anterior
// la acumulativa solo almacena hasta resolver la operación.
// en principio no se permite en una misma operación operandos distintos


//variables
campo=document.getElementById('campo');
acum=0;
num=0;
opt=null;
result=0;
operadores=new Array("+","-","*","/");
operadoresFunciones=new Array("sqrt(","sen(","cos(","exp(","log(","tan(");
memoria=null;
optFn=null;
ans=0;

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
  num1=0;
  num2=0;
  opt=0;
}

function borrar(){
  campo.value="0"
  acum=0;
  num=0;
  result=0;
  opt=null;
  memoria=0;
}
function operar(nu){

  n1=parseFloat(acum);
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
      result=n2/n1;
      break;
    default:

  }
  //num=0;
  return result;
}
function marcarOperador(opt){

  campo.value=opt;
  this.opt=opt;
  lastOpt=opt;
  acum=operar(num);
  console.log("num "+num);
  console.log("acumulado "+acum);
}
lastOpt=null;
function resolver(){
  acum=operar(lastOpt==null?ans:num);
  if(lastOpt!=null){ans=num;}
  campo.value=acum;
  num=0;
  lastOpt=null;
  console.log("ans "+ans);
  console.log("num "+num);
}

function saveMemoria(num){
  memoria=num;
}

function getMemoria(){
  campo.value=memoria;
  num=parseFloat(campo.value);

}

function marcarFuncion(fn){
  console.log(fn);
  switch (fn) {
    case "SQRT":
      campo.value="sqrt(";
      break;
    case "SEN":
      campo.value="sen(";
      break;
    case "EXP":
    if((campo.value=="0" && campo.value!=".") || (operadoresFunciones.indexOf(campo.value)>-1 && campo.value!="E")){
      campo.value="1E";
    }else{
      campo.value=campo.value+"E";
    }
      break;
    case "COS":
      campo.value="cos(";
      break;
    case "LOG":
      campo.value="log(";
      break;
    case "TAN":
      campo.value="tan(";
      break;
    default:

  }
}

function resolverFuncion(){
  nstr=n;
  n=parseFloat()
  switch (fn) {
    case "SQRT":
      result=Math.sqrt(n);
      break;
    case "SEN":
      result=Math.sin(n);
      break;
    case "EXP":
      result=Math.pow(n1,n2);
      break;
    case "COS":
      result=Math.cos(n);
      break;
    case "LOG":
      result=Math.log(n);
      break;
    case "TAN":
      result=Math.tan(n);
      break;
    default:

  }
}
