// alert("Matanze-be-like-WHAAAAT");
var canvas = document.getElementById("myCanvas"); 
var ctx = canvas.getContext("2d");

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function draw_square(){
ctx.beginPath(); 
ctx.rect(20, 40, 50, 50); 
ctx.fillStyle = "#FF0000"; 
ctx.fill(); 
ctx.closePath();
}

function draw_circle(){
ctx.beginPath(); 
ctx.arc(240, 160, 40, 0, Math.PI*2, false); 
ctx.fillStyle = "green"; 
ctx.fill(); 
ctx.closePath();
}

function draw_outline(){
ctx.beginPath(); 
ctx.rect(160, 10, 100, 40); 
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)"; 
ctx.stroke(); 
ctx.closePath();
}

function draw_ball(){
  ctx.beginPath();
  ctx.arc(x, y, ball_radius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw_paddle() { 
  ctx.beginPath(); 
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight); 
  ctx.fillStyle = "#0095DD"; 
  ctx.fill(); 
  ctx.closePath(); 
  
}

function draw() { 
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw_ball();
	draw_outline();
	draw_square();
	draw_circle();
	draw_paddle();
	x += dx;
	y += dy;
	
	if(x + dx > canvas.width - ball_radius || x + dx < ball_radius) { dx = -dx; }
	if(y + dy > canvas.height || y + dy < 0) { dy = -dy; }
    if(y + dy < ball_radius) { dy = -dy; } 
    else if(y + dy > canvas.height-ball_radius) { 
    	if(x > paddleX && x < paddleX + paddleWidth) { dy = -dy; } 
    	else { 
    		alert("GAME OVER"); 
    		document.location.reload(); 
    		clearInterval(interval); 
    	} 
    }
  
  
	if(rightPressed) 
	{ 
		paddleX += 7; 
		if (paddleX + paddleWidth > canvas.width)
			{ paddleX = canvas.width - paddleWidth; } 
	}
	
	else if(leftPressed) { 
		paddleX -= 7; 
		if (paddleX < 0){paddleX = 0; } 
	}

  // ball_radius = (ball_radius+1)% 20
} 
var interval = setInterval(draw, 10);

var paddleHeight = 10; 
var paddleWidth = 75; 
var paddleX = (canvas.width-paddleWidth) / 2;
var x = canvas.width/2; 
var y = canvas.height-30;
var dx = 2; 
var dy = -2;
var ball_radius = 10;
var rightPressed = false; 
var leftPressed = false;


function keyDownHandler(e) { 
  if(e.key == "Right" || e.key == "ArrowRight") 
  { rightPressed = true; } 
  else if(e.key == "Left" || e.key == "ArrowLeft") 
  { leftPressed = true; } 
}
  function keyUpHandler(e) { 
    if(e.key == "Right" || e.key == "ArrowRight") 
    { rightPressed = false; } 
    else if(e.key == "Left" || e.key == "ArrowLeft") 
    { leftPressed = false; } 
    
  }