var ax,ay;
var x,y;
var widthHalf,heightHalf;

function setup() {
  createCanvas(windowWidth, windowHeight);
  widthHalf=windowWidth/2
  heightHalf=windowHeight/2
}

function draw() {
  DDA(0,0,windowWidth,windowHeight)
  DDA(widthHalf,0,widthHalf,windowHeight)
  DDA(windowWidth,0,0,windowHeight)
  DDA(0,heightHalf,windowWidth,heightHalf)
}
function DDA(x1, y1, x2, y2) {

  let dx=x2-x1
  let dy=y2-y1

  let final;
  if(Math.abs(dx)>Math.abs(dy)){
	final=Math.abs(dx)
  }
  else{
    final=Math.abs(dy)
  }
  

  let xi=dx/final;
  let yi=dy/final;
  let x=x1;
  let y= y1;
  
  for(let i=0;i<final;i++)
  {
    point(x, y)
    x+=xi
    y+=yi
  }
}
