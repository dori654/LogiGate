//mouse position variables
var mouseX = 0;
var mouseY = 0;
//mouse button variables
var mouseHold = false;

//mouse hold event
document.addEventListener("mousedown", e => {
    if (e.type == "mousedown"){
        mouseHold = true;
    }
});
document.addEventListener("mouseup", e => {
    if (e.type == "mouseup"){
        mouseHold = false;
    }
});

//mouse move event  
document.addEventListener("mousemove", e => {
    let ratioX = 600 / canvas.width;
	let ratioY = 500 / canvas.height;
	mouseX = e.offsetX / ratioX;
	mouseY = e.offsetY / ratioY;
	mouseX = Math.floor(mouseX) + 1;
	mouseY = Math.floor(mouseY);

});
