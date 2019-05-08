var x,y,d
function setup() {
	createCanvas(windowWidth, windowHeight);

}
//examen
//dda, bresenham, puntomedio

function draw() {
	//circulo(50,30,100)

	background('#ffffff')
	circulo(mouseX,mouseY,100)
}
function circulo(px,py,r){
	point(px,py)
	 let x1=0
	 let y1=r
	 let p=(5/4)-r
	 while(x1<=y1){
		 	if(p<0){
				x1++
				p=p+(2*x1)+1
			}else {
				x1++
				y1--
				p=p+(2*x1)+1-(2*y1)
			}
			point(px+x1,py+y1)
			point(px+y1,py+x1)

			point(px+x1,py-y1)
			point(px+y1,py-x1)

			point(px-x1,py-y1)
			point(px-y1,py-x1)

			point(px-x1,py+y1)
			point(px-y1,py+x1)



	 }

}
