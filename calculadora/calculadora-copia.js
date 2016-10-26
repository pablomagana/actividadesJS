//variables
campo=document.getElementById('campo');
num1=null;
num2=null;
opt=null;
result=null;
operadores=new Array("+","-","*","/");
operadoresFunciones=new Array("sqrt(","sen(","cos(","exp(","log(","tan(");
memoria=null;
optFn=null;

//funciones
function marcarNumero(num) {
  if((campo.value=="0" && num!=".") || operadores.indexOf(campo.value)>-1){
    campo.value="";
  }
  campo.value=campo.value.concat(num);
  if(opt==null){
    num1=parseFloat(campo.value);
  }else {
    num2=parseFloat(campo.value);
  }
}

function limpiar(){
  campo.value="0";
  num1=null;
  num2=null;
  opt=null;
}

function borrar(){
  campo.value="0"
  num1=null;
  num2=null;
  result=null;
  opt=null;
  memoria=null;
}

function marcarOperador(opt){
  campo.value=opt;
  this.opt=opt;
}

function resolver(){
  n1=parseFloat(num1);
  n2=parseFloat(num2);
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
  num1=result;
  campo.value=result;
}

function saveMemoria(num){
  memoria=num;
}

function getMemoria(){
  campo.value=memoria;
  if(opt==null){
    num1=parseFloat(campo.value);
  }else {
    num2=parseFloat(campo.value);
  }
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