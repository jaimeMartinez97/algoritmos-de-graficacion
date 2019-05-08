function setup() {
	createCanvas(windowWidth, windowHeight);
	circulo(30,30,10)
}
//examen
//dda, bresenham, puntomedio

function draw() {
	//circulo(30,30,10)
}
function circulo(px,py,rad){
	var x,y,d
	x=0
	y=rad
	d=(5/4)-rad
	while (y>x) {
		if (d<0) {
			d+=2*x+5
			x++
		}else{
			d+=2*(x-y)+5
			x++
			y--
		}
		point(x,y)
	}
}
