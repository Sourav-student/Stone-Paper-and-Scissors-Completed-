alert("You have to choose one of the following options: Rock, Paper, Scissors");
document.addEventListener("DOMContentLoaded", () => {
    const myValue = document.getElementById("myValue");
    const comValue = document.getElementById("comValue");
    const stone = document.getElementById("stone");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const whoWin = document.getElementById("whoWin");
    const score = document.getElementById("score");
    const restart = document.getElementById("restart");
    score.innerText = 0;
    
    //Getting values for Computer By using Math.random()
    function comChoose() {
        let choices = [paper.innerText, scissors.innerText, stone.innerText];
        let randomIndex = Math.floor(Math.random() * choices.length);
        comValue.innerText = choices[randomIndex];
    }
    
    
    //Getting Conditions for Win, Lost and Draw
    function result() {
        if ((myValue.innerText === stone.innerText) && (comValue.innerText === scissors.innerText) || (myValue.innerText === scissors.innerText) && (comValue.innerText === paper.innerText) || (myValue.innerText === paper.innerText) && (comValue.innerText === stone.innerText)) {
            whoWin.innerText = "You Won"
        }
    
        else if ((myValue.innerText === paper.innerText) && (comValue.innerText === paper.innerText) || (myValue.innerText === stone.innerText) && (comValue.innerText === stone.innerText) || (myValue.innerText === scissors.innerText) && (comValue.innerText === scissors.innerText)) {
            whoWin.innerText = "Draw"
        }
    
        else{
             whoWin.innerText = "You Lost"
        }
    }
    
    
    //Getting points for Win, Lose and Draw
    function scoreValue() {
    
        if (whoWin.innerText === "You Won") {
            score.innerText++;
        }
    
        else if (whoWin.innerText === "Draw") {
            score.innerText = score.innerText;
        }
    
        else if (whoWin.innerText === "You Lost") {
            score.innerText--;
        }
    
    }
    
    stone.addEventListener("click", function () {
    
        myValue.innerText = stone.innerText;
        comChoose();
        result();
        scoreValue();
    })
    
    scissors.addEventListener("click", function () {
    
        myValue.innerText = scissors.innerText;
        comChoose();
        result();
        scoreValue();
    })
    
    paper.addEventListener("click", function () {
    
        myValue.innerText = paper.innerText;
        comChoose();
        result();
        scoreValue();
    })
    
    restart.addEventListener("click", () => {
        myValue.innerText = "";
        comValue.innerText = "";
        score.innerText = 0;
        whoWin.innerText = ""
    })
})