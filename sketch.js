let randomWalkerArr = [];
let eraserArr = [];
let bias = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	for (let i = 0 ; i < 25 ; i++ ) {
		randomWalkerArr.push(new walker(width/2,height/2));
  }
  for (let i = 0 ; i < 10 ; i++ ) {
		eraserArr.push(new eraser(random(width), random(height)));
  }
  
}

function draw() {
	//background(0)
	for (let i = 0 ; i < randomWalkerArr.length ; i++) {
		randomWalkerArr[i].update(bias);
		randomWalkerArr[i].display(); 
  }
	for (let i = 0 ; i < eraserArr.length ; i++) {
		eraserArr[i].update(bias);
		eraserArr[i].display(); 
  }
  

}
function mousePressed() {
	randomWalkerArr.push(new walker(mouseX,mouseY));
}

function keyPressed() {
	//console.log(keyCode );
	//bias = keyCode;
	randomWalkerArr.push(new walker(mouseX,mouseY));
	 
  }
