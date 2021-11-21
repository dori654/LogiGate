const mainMenu = document.querySelector(".main-menu");

mainMenu.show = function() {
    openedSaveFile && save();
    this.style.display = "block";

    setTimeout(() => {
        this.style.opacity = 1;
    },10);

    this.querySelector("h1").style.top = 0;

    const buttons = this.querySelectorAll(".main-menu > button");
    for(let i of buttons) {
        i.style.top = 0;
        i.style.opacity = 1;
        i.style.transform = "translateX(0px)";

        i.querySelector(".material-icons").style.transform = "translateX(0px)";
    }

    setTimeout(() => loading.style.display = "none");
    setTimeout(clearBoard,1000);
}
