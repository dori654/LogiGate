let draggables = [];
//get all dragable elements on HTML page on startup

//draggable blocks class
class Draggable {
    constructor(el) {
        //draggable element reference
        this.draggableEl = el;
        //init API for draggable element
        this.draggie = new Draggabilly(el,
            {
                containment: true,
                // grid: [30, 30],
            });
        //starting position
        this.originPos = Object.assign({}, this.draggie.position);
    }
}
//init draggable blocks on startup


const setSizes = (elements) => {
    elements.forEach((item, i) => {
        item.style.setProperty('--width', `50px`);
        item.style.setProperty('--border-radius', `5px`);
    });
};

const init_gates = () => {
    let draggableBlocks = document.querySelectorAll('.block.draggable');
    draggables = Array.from(draggableBlocks).map(block => new Draggable(block));
    setSizes(draggableBlocks);
    draggables.forEach(draggable => draggable.draggie.on('dragMove', listener));
}

const addBlock = () => {
    document.getElementById("blocks").innerHTML += new_gate;
    init_gates();
};


function listener() {
    $('#l1').attr('x1', getPos(last_input)[0] - $('svg').position().left);
    $('#l1').attr('y1', getPos(last_input)[1] - $('svg').position().top);
    $('#l1').attr('x2', getPos(last_output)[0] - $('svg').position().left);
    $('#l1').attr('y2', getPos(last_output)[1] - $('svg').position().top);
}
document.addEventListener("keydown", addBlock); const main = () => {
    init_gates();
};

main();

document.addEventListener("keydown", addBlock);
