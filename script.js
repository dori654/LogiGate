//import particle class
//import SandParticle from './particle.js';


//create canvas for 2d
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
// ctx.scale(2,2);
// canvas.width = 100;
// canvas.height = 100;

//array of new 1000 SandParticles
var sandParticles = [];

//2d array representing canvas containing 0 - nothing, 1 - sand
function make2DArray(cols, rows) {	
	var arr = new Array(cols);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows).fill(0);
	}
	return arr;
}
let canvasArr = make2DArray(canvas.width, canvas.height);

//init array of new 1000 SandParticles with random location
for (var i = 0; i < 100; i++) {
	let x = Math.floor(Math.random() * canvas.width);
	let y = Math.floor(Math.random() * canvas.height);
	sandParticles.push(new SandParticle(
		x, 
		y));
	canvasArr[x][y] = 1;
}

function addParticle(x, y){
	if (canvasArr[y][x] == 1) return;
	sandParticles.push(new SandParticle(
		x, 
		y));
	canvasArr[y][x] = 1;
}

//canvas draw function
function draw() {
	//clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//draw each particle
	for (var i = 0; i < sandParticles.length; i++) {
		sandParticles[i].update(canvasArr);
	}

	if (mouseHold == true) addParticle(mouseX, mouseY);
	// debug();
}


let speed = 10;
//call draw function every 30ms
let interval = setInterval(draw, speed);


function debug(){
	
	for (var i = 0; i < canvasArr.length; i++) {
		for (var j = 0; j < canvasArr[i].length; j++) {
			if (canvasArr[i][j] === 0){ 
			ctx.fillStyle = "red";
			ctx.fillRect(j, i, 1, 1);
			}
			else {
				ctx.fillStyle = "blue";
				ctx.fillRect(j, i, 1, 1);
			}
	}
	}
	ctx.fillText(mouseX +',' +mouseY,0,50);
	console.log(canvasArr.length,canvasArr[0].length);
	
}




//space keyboard key pressed event listener
document.addEventListener("keydown", e => {
	//check what key pressed
	if (e.keyCode === 32) {
		//reload page
		location.reload();
	}
});




//mouse wheel delta event listener
canvas.addEventListener("wheel", e => {
	//get mouse wheel delta
	let delta = e.deltaY;

	//change speed
	if (delta > 0) {
		speed += 10;
	}
	else if (delta < 0){
		speed -= 10;
	}
	//clear interval
	clearInterval(interval);
	//call draw function every new speed
	interval = setInterval(draw, speed);
});

