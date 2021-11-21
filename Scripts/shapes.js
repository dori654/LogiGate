function draw_gate_base(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = "white";
    ctx.fillText("AND", x + width/4, y + height/2);
    draw_circle(x,y + height/4,10,"white");
    draw_circle(x,y + height/1.5,10,"white");
    draw_circle(x+width,y + height/2,10,"white");
}


function draw_circle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}
/*
function draw_rectangle_path2d(x, y, width, height, color,shapes) {
    var rect = new Path2D();
    ctx.fillStyle = color;
    rect.rect(x, y, width, height);
    ctx.fill(rect);
    shapes.push(rect);
}*/

function gate(width,height,color){

    this.x = mouseX;
    this.y = mouseY;
    this.size = {
        w: width,
        h: height,
    };
    this.draw = () => {
        const ls = {
            x: this.x,
            y: this.y,
        };
        draw_gate_base(ls.x,ls.y,width,height,color);
    }
}

function drag(gate){
    gate.x = -gate.size.w/2 + mouseX;
    gate.y = -gate.size.h/2 + mouseY;
}