var $draggable = $('.draggable').draggabilly({
    containment: true,
});

let connection = {
    "from": 0,
    "to": 0
}
//TODO: figure out how to connect gates
const connections = [];

//get all dragable elements on HTML page on startup

//draggable blocks class

const setSizes = () => {
    $('.draggable').each(function () {
        $(this).css('--width', `50px`);
        $(this).css('--border-radius', `5px`);
    });
};

const init_gates = () => {
    $draggable = $('.draggable').draggabilly({
        containment: true,
    });
    setSizes();
    $draggable.on('dragMove', listener);
}

const addBlock = () => {
    //gate text defined here
    document.getElementById("blocks").innerHTML += new_gate('AND');
    //init draggable gates
    init_gates();
};


function listener() {
    var draggie = $(this).data('draggabilly');
    $('.wire').each(function () {
        $(this).attr('x1', getPos(last_input)[0] - $('svg').position().left);
        $(this).attr('y1', getPos(last_input)[1] - $('svg').position().top);
        $(this).attr('x2', getPos(last_output)[0] - $('svg').position().left);
        $(this).attr('y2', getPos(last_output)[1] - $('svg').position().top);
    });
}
document.addEventListener("keydown", addBlock);

const main = () => {
    init_gates();
};

main();

