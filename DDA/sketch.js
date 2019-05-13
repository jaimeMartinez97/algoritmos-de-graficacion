function setup() {
	createCanvas(windowWidth, windowHeight);

	linea(30,30,0,0)
	//linea(1,1,500,500)
}

function draw() {
//linea(30,30,0,0)
//linea(0,0,width,height)
//linea(10,10,500,500)
}
function linea(x1,y1,x2,y2){
	
	var ax,ay,x,y,res,idea,i
	if( (x2-x1) >= (y2-y1)){
			res=x2-x1
	}else {
		res=y2-y1
	}
	ax=abs(x2-x1)/res
	ay=abs(y2-y1)/res
	x=x1
	y=y1
	i=0
	while (i<=res) {
		point(x,y)
		x=x+ax
		y=y+ay
		i++
	}

}
