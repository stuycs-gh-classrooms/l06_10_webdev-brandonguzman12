var x;
var y;
var radius;
var nc;
function setup(){
  createCanvas(400, 400);
  background(255, 0, 0);
  x=40;
  y=40;
  radius=40;
  nc=0;
  fill(nc);
  circle(x, y, radius*2);
  circles();
}

function circles(){
  while(y<height){
  while(x<width){  
    fill(nc);
    circle(x, y, radius*2);
    x+=(radius*2);
    nc+=255/((width/(radius*2))*(height/(radius*2)));
   }
  y+=radius*2;
  x=radius;
}
  }
