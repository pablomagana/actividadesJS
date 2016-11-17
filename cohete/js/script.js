var martian=document.getElementsByClassName('monstruo')[0];
var spaceship=document.getElementsByClassName('cohete')[0];
setInterval(moveMartian(),1000);

document.onmousemove=moveSpaceship;

function moveSpaceship(e) {
  var y=e.pageY;
  //console.log(y);
  spaceship.style.position = 'fixed';
  spaceship.style.top=(y-66)+"px";
}
function moveMartian() {
  var y=Math.floor((Math.random() * screen.height) + 1);
  //console.log(y);
  martian.style.position = 'fixed';
  martian.style.top=(y)+"px";
}
