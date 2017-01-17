function start(event) {
  event.dataTransfer.setData("id", event.target.id);
  console.log(event.target.id);
}
function over(event) {
  event.preventDefault();
}
function drop(objeto,event) {
  event.preventDefault();
  var id = event.dataTransfer.getData("id");
  console.log(event.target);
  if(objeto.hasChildNodes()){
    objeto.removeChild(objeto.lastChild);
  }
  objeto.appendChild(document.getElementById(id).cloneNode(true));
  check();
}

function check() {
  caja1=document.getElementById("caja1");
  caja2=document.getElementById("caja2");
  caja3=document.getElementById("caja3");
  while (caja3.hasChildNodes()) {
    caja3.removeChild(caja3.lastChild);
  }

  if(caja1.childElementCount>0 && caja2.childElementCount>0){
    num1=parseInt(caja1.lastChild.id);
    num2=parseInt(caja2.lastChild.id);
    suma=num1+num2;
    console.log(suma);
    nums=checkNum(suma);
    console.log(nums);
    for (var i = 0; i < nums.length; i++) {
      caja3.appendChild(document.getElementById(nums[i]).cloneNode(true));
    }
  }

  function checkNum(num) {
    nums=[];
    if (num>9) {
      nums.push(1);
      nums.push(num-10);
    }else {
      nums.push(num);
    }
    return nums;
  }
}
