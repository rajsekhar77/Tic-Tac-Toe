let btns = document.querySelectorAll(".btn");
let resetgame = document.querySelector(".new");
let res = document.querySelector(".result");

let turnO = true;

let winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", startgame);
}

resetgame.addEventListener("click",reset);

function startgame() {
    if(turnO == true) {
        this.innerText = "O";
        turnO = false;
    }
    else {
        this.innerText = "X";
        turnO = true;
    }
    checkwinner();
    this.removeEventListener("click",startgame);
}

function checkwinner() {
    for(pattern of winpatterns) {
        let posval1 = btns[pattern[0]].innerText;
        let posval2 = btns[pattern[1]].innerText;
        let posval3 = btns[pattern[2]].innerText;
        console.log(posval1);
        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3) {
                res.innerText = `Congratulation Player ${posval1} was Won`;
                disablebtns();
            }
        }
    }
}

function enablebtns(){
    for (i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", startgame);
        btns[i].innerText = "";
    }
}

function disablebtns(){
    for (i = 0; i < btns.length; i++) {
        btns[i].removeEventListener("click", startgame);
    }
}

function reset() {
    enablebtns();
    res.innerText = "";
    turnO = true;
    console.log("btn was clicked");
}