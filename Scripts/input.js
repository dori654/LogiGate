document.addEventListener('mousedown',mouseHandler, false);
document.addEventListener('mouseup', mouseHandler, false);
document.addEventListener('mousemove', mouseHandler, false);
document.addEventListener('wheel', mouseHandler, false);


var mousedown = false;
var mouseup = false;
var mouseX = 0;
var mouseY = 0;
var mouseDelta = 0;

function mouseHandler(e) {
    if (e.type == "mousedown") {
        mousedown = true;
        mouseup = false;
    }
    else if (e.type == "mouseup") {
        mousedown = false;
        mouseup = true;
    }
    if (e.type == "mousemove") {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    if (e.type == "wheel") {
        mouseDelta = e.deltaY;
    }
}