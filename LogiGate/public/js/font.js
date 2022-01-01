//select all text in the document 
function enlarge(value) {
    document.querySelectorAll("div").forEach(e => {
        e.style.fontSize = value + "px";
    });
}