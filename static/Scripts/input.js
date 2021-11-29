var last_input = 0;
var last_output = 0;
var draggables = []
const getPos = (last) => {
    const pos = last.offset();
    const dim = last.outerWidth();
    const correct = pos.left + dim / 2;
    const correct2 = pos.top + dim / 2;
    return [Math.round(correct), Math.round(correct2)];
}



$(document).on('click', '.input', function () {
    last_input = $(this);
    console.log(last_input.offset());
});

$(document).on('click', '.output', function () {
    last_output = $(this);
    console.log(last_output.offset());
});

$(document).on('click', '.wire', function () {
    //delete wire
    $(this).remove();
});
