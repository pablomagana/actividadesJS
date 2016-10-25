//variables
campo=document.getElementById('campo');
num1=null;
num2=null;
opt=null;
result=null;
operadores=new Array("+","-","*","/");
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

function borrar(){
  campo.value="0"
  num1=null;
  num2=null;
  result=null;
  opt=null;
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
