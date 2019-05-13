function setup() {
	createCanvas(windowWidth, windowHeight);

	DDA(width*.5,0,width*.5,height)
	DDA(width,0,0,height)
	DDA(0,height*.5,width,height*.5)
	DDA(0,0,width,height)

	DDA(width*.5,height,width*.5,0)
	DDA(0,height,width,0)
	DDA(width,height*.5,0,height*.5)
	DDA(width,height,0,0)
}

function draw() {
	
}
function DDA(x1, y1, x2, y2){
	let x = x1;
	let y = y1;
	let dx = x2 - x1;
  	let dy = y2 - y1;
	let m = dy / dx;
  	if(Math.abs(m) <= 1){
		if(dx < 0){
			while(x >= x2){
				x--;
				y = y - m;
				point(x, y);
			}
		} else {
			while(x <= x2){
				x++;
				y = y + m;
				point(x, y);
			}
		}
  	} else {
		if(dy < 0){
			while(y >= y2){
				y--;
				x = x - 1 / m;
				point(x, y);
			}
		} else {
			while(y <= y2){
				y++;
				x = x + 1 / m;
				point(x, y);
			}
		}
	}
}
