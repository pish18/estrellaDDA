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
/*
const punto1 = {x: 0, y: 0};//arriba-izquierda
const punto2 = {x: 0, y: 0};//abajo-derecha
const punto3 = {x: 0, y: 0};//ariba-derecha
const punto4 = {x: 0, y: 0};//abajo-izquierda
const punto5 = {x: 0, y: 0};//arriba-centro
const punto6 = {x: 0, y: 0};//abajo-centro
const punto7 = {x: 0, y: 0};//centro-izquierda
const punto8 = {x: 0, y: 0};//centro-derecha



function setup() {
	createCanvas(windowWidth, windowHeight);
	//background('purple')
	//linea 1
	punto2.x=windowWidth;
    punto4.x=windowWidth;
    punto5.x=Math.floor(windowWidth/2)
    punto6.x=Math.floor(windowWidth/2)
    punto8.x=windowWidth;
    punto2.y=windowHeight;
    punto3.y=windowHeight;
    punto6.y=windowHeight;
    punto7.y=Math.floor(windowHeight/2)
    punto8.y=Math.floor(windowHeight/2)
}

function draw() {
	//line(p1.x, p1.y, p2.x, p2.y)
	pendiente(punto1, punto2)
	pendiente(punto3, punto4)	
	pendiente(punto5, punto6)
	pendiente(punto7, punto8)
}

function pendiente(p1, p2){
	const dx = p2.x - p1.x
	const dy= p2.y-p1.y
	const m =dy/dx
	const b = (p1.y-m)*p1.x

	point(p1.x, p1.y)
	let x= p1.x +1
	//y es el val que se va a calcular
	let y
	while(x!= p2.x){
		y=m*x+b
		point(x,y)
		x++
	}
}

cada punto es la coordenada del punto de inicio (x1,y1)

y=pendiente de la linea + punto de intersección

algoritmo para encontrar la sig. x
sigX=pendiente * x + interseccion del eje
pendiente(m)= deltaY/deltaX
deltay=(y2(xpunto2)*-y1(xpunto1))
deltax=(x2(xpunto2)*-x1(xpunto1))
intersección(b)= y1 - pendiente*x1
*/
