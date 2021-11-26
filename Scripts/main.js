document.getElementById("blocks").innerHTML += `<div class="block draggable" data-id="3"></div>`;

//get all dragable elements on HTML page on startup
let draggableBlocks = document.querySelectorAll('.block.draggable');

//draggable blocks class
class Draggable {
    constructor(el) {
        //draggable element reference
        this.draggableEl = el;
        //init API for draggable element
        this.draggie = new Draggabilly(el);
        //starting position
        this.originPos = Object.assign({}, this.draggie.position);

    }
}
//init draggable blocks on startup
let draggables = Array.from(draggableBlocks).map(block => new Draggable(block));


const setSizes = (elements) => {
    elements.forEach((item, i) => {
        item.style.setProperty('--width', `50px`);
        item.style.setProperty('--border-radius', `5px`);
    });
};

const addBlock = () => {
    document.getElementById("blocks").innerHTML += `<div class="block draggable" data-id="4"></div>`;
    draggableBlocks = document.querySelectorAll('.block.draggable');
    // draggables.push(new Draggable(draggableBlocks[draggableBlocks.length - 1]));
    draggables = Array.from(draggableBlocks).map(block => new Draggable(block));
    setSizes(draggableBlocks);
    console.log(draggables.length);
};
// const listenDragEvent = () => {
//     draggables.forEach(draggable => {
//         const draggie = draggable.draggie;
//         draggie.on('dragEnd', function () {
//             const draggableElement = this.element;
//             const dragId = parseInt(draggableElement.dataset.id);
//         });
//     });
// };

document.addEventListener("keydown", addBlock);

const main = () => {
    setSizes(draggableBlocks);
    //listenDragEvent();
    console.log(type(draggableBlocks));
};
main();

document.addEventListener("keydown", addBlock);