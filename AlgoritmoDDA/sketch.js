function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	//algoritmoDDA(0, 0, width, height);
	algoritmoDDA(width, height,0,0);
	//algoritmoDDA(floor(width * 0.5), 0, floor(width * 0.5), height);
}

function algoritmoDDA(x1, y1, x2, y2) {
  let y = y1;
  let x = x1;
  let dx = x2 - x1;
  let dy = y2 - y1;
  let m = dy / dx;

	if(dx<=0){
		if (m > 0) {
	    if (m <= 1) {
	      while (x != x2) {
	        x++;
	        y = y - m;
	        point(x, y);
	      }
	    } else if (m > 1) {
	      while (y != y2) {
	        y++;
	        x = x - 1 / m;
	        point(x, y);
	      }
	    }
	  }

	}else {
		if (m > 0) {
	    if (m <= 1) {
	      while (x != x2) {
	        x++;
	        y = y + m;
	        point(x, y);
	      }
	    } else if (m > 1) {
	      while (y != y2) {
	        y++;
	        x = x + 1 / m;
	        point(x, y);
	      }
	    }
	  }

	}


}
