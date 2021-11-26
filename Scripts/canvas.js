let ctx = canvas.getContext("2d");
const dimensions = [700,600];
canvas.style.width = canvas.width = dimensions[0];
canvas.style.height = canvas.height = dimensions[1];
let speed = 30;

//load up fire update event
window.addEventListener("load", update);

const shapes = [];
//updates the canvas every frame
function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0d0f0e';
    ctx.fillRect(0, 0, dimensions[0], dimensions[1]);
    drawDotsGrid();

    //drawButtons();
    
    // if (mousedown) draw_gate_base(mouseX, mouseY, 50, 50, "red");
    if (mouseleft) shapes.push(new gate(50, 50, "red"));
    shapes.forEach((s) => s.draw());
    
    if (mouseright) {
        shapes.some((s) => {
            if (isCursorWithinRectangle(s.x,s.y,s.size.w,s.size.h)) {
                drag(s);
            }
        });
    }

    //refresh the canvas
    requestAnimationFrame(update);
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
