let canvas = document.getElementById("canvas");
canvas.addEventListener('mousedown',mouseHandler, false);
canvas.addEventListener('mouseup', mouseHandler, false);
canvas.addEventListener('mousemove', mouseHandler, false);
canvas.addEventListener('wheel', mouseHandler, false);
document.addEventListener('contextmenu', function(e) {
   e.preventDefault();
  }, false);

var mouseright = false;
var mouseleft = false;
var mouseX = 0;
var mouseY = 0;
var mouseDelta = 0;
var holding = false;

function mouseHandler(e) {
    if (e.type == "mousedown") {
        if (e.button == 2) {
            mouseright = true;
        }
        if (e.button == 0) {
            mouseleft = true;
        }
    }
    else if (e.type == "mouseup") {
        if (e.button == 2) {
            mouseright = false;
        }
        if (e.button == 0) {
            mouseleft = false;
        }
    }
    if (e.type == "mousemove") {
        //canvas mouse position
        mouseX = e.clientX - canvas.offsetLeft;
        mouseY = e.clientY - canvas.offsetTop;
    }
    if (e.type == "wheel") {
        mouseDelta = e.deltaY;
    }
}

function isCursorWithinRectangle(x, y, width, height) {
    if(mouseX > x && mouseX < x + width && mouseY > y && mouseY < y + height) {
        return true;
    }
    return false;
}

function isCursorWithinCircle(x, y, r) {
    var distSqr = Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2);

    if(distSqr < r * r) {
        return true;
    }
    return false;
}