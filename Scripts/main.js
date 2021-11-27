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
    document.getElementById("l1").setAttribute("x1", draggables[0].draggie.position.x + getOutputPos(50)[0]);
    document.getElementById("l1").setAttribute("y1", draggables[0].draggie.position.y + getOutputPos(50)[1]);
}


document.addEventListener("keydown", addBlock);

const main = () => {
    init_gates();
};

main();

document.addEventListener("keydown", addBlock);

