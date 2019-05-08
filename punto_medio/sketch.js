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
	var p =(5/4)-rad
	if (p<0) {
			point(px,py)
			p=p+(2*px)+1
		}else {
			px+=1
			py-=1
			p=p+(2*px)+1-(2*py)
		}
	// for (var k = 0; px >= py; k++) {
	// 	if (p<0) {
	// 		point(px,py)
	// 		p=p+(2*px)+1
	// 	}else {
	// 		px+=1
	// 		py-=1
	// 		p=p+(2*px)+1-(2*py)
	// 	}
	// }

}
