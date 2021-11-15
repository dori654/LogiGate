
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const dimensions = [700,600];
canvas.style.width = canvas.width = dimensions[0];
canvas.style.height = canvas.height = dimensions[1];
let speed = 30;

//load up fire update event
window.addEventListener("load", update);

//updates the canvas every frame
function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0d0f0e';
    ctx.fillRect(0, 0, dimensions[0], dimensions[1]);
    // drawGrid();
    drawDotsGrid();

    drawButtons();
    requestAnimationFrame(update);
}

//draw grid on canvas
function drawGrid(){
    ctx.strokeStyle = "gray";
    for(let i = 0; i < canvas.width; i += 10){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
    }
    for(let i = 0; i < canvas.height; i += 10){
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
    }
    ctx.stroke();
}

function drawDotsGrid(){
    ctx.fillStyle = "gray";
    for(let i = 0; i < canvas.width; i += 10){
        for(let j = 0; j < canvas.height; j += 10){
            ctx.fillRect(i, j, 1, 1);
        }
    }
}

function drawButtons(){
    let w = 50;
ctx.fillStyle = "#1c261e";
ctx.fillRect(0, canvas.height-w, canvas.width, w);

}

function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}
