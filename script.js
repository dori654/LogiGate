
//create canvas for 2d
window.addEventListener("load", startup, false);
var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
let speed = 10;
let interval = null;


//main init function
function startup() {
	//call draw function every 30ms
	interval = setInterval(draw, speed);
}


var Particles = [];

//2d array representing canvas containing 0 - nothing, 1 - sand
function make2DArray(cols, rows) {
	var arr = new Array(cols);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows).fill(0);
		arr[i][0] = 2;
		arr[i][rows - 1] = 2;
	}
	arr[0].fill(1);
	
	return arr;
}
//array of zeros and ones representing canvas and pixels
let canvasArr = make2DArray(canvas.width, canvas.height);

//init array of new SandParticles with random location
for (var i = 0; i < 100; i++) {
	let x = Math.floor(Math.random() * canvas.width);
	let y = Math.floor(Math.random() * canvas.height);
	Particles.push(new SandParticle(
		x,
		y));
	canvasArr[y][x] = 1;
}

//add new particle func
function addParticle(x, y) {
	if (canvasArr[y][x] != 0) return;
	if (tool == "Sand") {
		Particles.push(new SandParticle(x, y));
		canvasArr[y][x] = 1;
	}
	if (tool == "Stone") {
		Particles.push(new StoneParticle(x, y));
		canvasArr[y][x] = 2;
	}
}
function removeParticle(x, y) {
	if (canvasArr[y][x] == 0) return;
	//delete value from Particles array
	Particles.splice(Particles.indexOf(Particles.find(p => p.x == x && p.y == y)), 1);
	canvasArr[y][x] = 0;
	
}

//canvas draw function (refresshes to often)
function draw() {
	//clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//update each particle
	for (var i = 0; i < Particles.length; i++) {
		Particles[i].update(canvasArr);
	}

	if (mouseHold == true) addParticle(mouseX, mouseY);
	if (rightMouseHold == true) removeParticle(mouseX, mouseY);
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
	else if (delta < 0) {
		speed -= 10;
	}
	//clear interval
	clearInterval(interval);
	//call draw function every new speed
	interval = setInterval(draw, speed);
});

