//mouse position variables
var mouseX = 0;
var mouseY = 0;
//mouse button variables
var mouseHold = false;
var rightMouseHold = false;
let color = "brown";
let s_color = "black";
let tool = "Sand";
let canvas = document.getElementById("myCanvas");

canvas.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
//mouse hold event
canvas.addEventListener("mousedown", e => {
    if (e.type == "mousedown" && e.button == 0) {
        mouseHold = true;
    }
    if (e.type == "mousedown" && e.button == 2) {
        rightMouseHold = true;
    }
});
canvas.addEventListener("mouseup", e => {
    if (e.type == "mouseup" && e.button == 0) {
        mouseHold = false;
    }
    if (e.type == "mouseup" && e.button == 2) {
        rightMouseHold = false;
    }
});

//mouse move event  
canvas.addEventListener("mousemove", e => {
    let ratioX = 600 / canvas.width;
    let ratioY = 500 / canvas.height;
    mouseX = e.offsetX / ratioX;
    mouseY = e.offsetY / ratioY;
    mouseX = Math.floor(mouseX) + 1;
    mouseY = Math.floor(mouseY) + 1;

});

//input color changed event
document.getElementById("sand_color").addEventListener("input", e => {
    color = e.target.value;
});
document.getElementById("stone_color").addEventListener("input", e => {
    s_color = e.target.value;
});

document.addEventListener('change', e => {
    tool = e.target.value;
});