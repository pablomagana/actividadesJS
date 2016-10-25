//variables
campo=document.getElementById('campo');
acum=0;
num=null;
opt=null;
result=null;
operadores=new Array("+","-","*","/");
function marcarNumero(n) {
  if((campo.value=="0" && n!=".") || operadores.indexOf(campo.value)>-1){
    campo.value="";
  }
  campo.value=campo.value.concat(n);
  num=parseFloat(campo.value);

}

function borrar(){
  campo.value="0"
  acum=null;
  num=null;
  result=null;
  opt=null;
}
function operar(){
  n1=parseFloat(acum);
  n2=parseFloat(num);
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
  return result;
}
function marcarOperador(opt){
  campo.value=opt;
  this.opt=opt;
  acum=operar();
}
function resolver(){
  operar();
  acum=result;
  campo.value=result;
}
