//import particle class
//import SandParticle from './particle.js';


//create canvas for 2d
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//array of new 1000 SandParticles
var sandParticles = [];

//2d array representing canvas
function make2DArray(cols, rows) {	
	var arr = new Array(cols);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows).fill(0);
	}
	return arr;
}
let canvasArr = make2DArray(canvas.width, canvas.height);

//init array of new 1000 SandParticles with random location
for (var i = 0; i < 1000; i++) {
	sandParticles.push(new SandParticle(
		Math.random() * canvas.width, 
		Math.random() * canvas.height));
}

//canvas draw function
function draw() {
	//clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//draw each particle
	for (var i = 0; i < sandParticles.length; i++) {
		sandParticles[i].update(sandParticles);
	}
}



//call draw function every 30ms
let interval = setInterval(draw, 30);

