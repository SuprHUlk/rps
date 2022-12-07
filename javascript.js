function getComputerChoice() {
    let rnd=Math.floor(Math.random()*3)+1;
    if(rnd == 1) {
        return "Rock"
    }
    else if(rnd == 2) {
        return "Paper"
    }
    else if(rnd == 3) {
        return "Scissors"
    }
}

function playRound(playerSelection,computerSelection) {
    if(playerSelection==computerSelection) {
        return ("Draw!");
    }
    else if(playerSelection=="Rock") {
        if(computerSelection=="Paper") {
            return ("You lose! "+computerSelection+" beats "+playerSelection);
        }
        else if(computerSelection=="Scissors") {
            return ("You win! "+playerSelection+" beats "+computerSelection);
        }
    }
    else if(playerSelection=="Paper") {
        if(computerSelection=="Rock") {
            return ("You win! "+playerSelection+" beats "+computerSelection);
        }
        else if(computerSelection=="Scissors") {
            return ("You lose! "+computerSelection+" beats "+playerSelection);
        }
    }
    else if(playerSelection=="Scissors") {
        if(computerSelection=="Rock") {
            return ("You lose! "+computerSelection+" beats "+playerSelection);
        }
        else if(computerSelection=="Paper") {
            return ("You win! "+playerSelection+" beats "+computerSelection);
        }
    }
    else {
        return ("Wrong choice!");
    }
}

function game(playerSelection) {
    
    let computerSelection=getComputerChoice();
    if(playRound(playerSelection,computerSelection).search("win")>=0) {
         c++;
    }
    else if(playRound(playerSelection,computerSelection).search("lose")>=0) {
        k++;
    } 

    g++;
    
    roundWinner.textContent=playRound(playerSelection,computerSelection);
    roundScore.textContent=c+" - "+k;

    if(g==5) {
        finalWinner.textContent="FINAL SCORE";
        if(c>k) {
            roundWinner.textContent="You win!";
            roundScore.textContent=c+" - "+k;
        }
        else if(c==k) {
            roundWinner.textContent="Draw!";
            roundScore.textContent=c+" - "+k;
        }
        else {
            roundWinner.textContent="You lose!";
            roundScore.textContent=c+" - "+k;
        }
        c=0,k=0;
    }
    if(g==6) {
        g=1;
        finalWinner.textContent="";
    }
}

const result=document.querySelector(".result");
const roundWinner=document.createElement("p");
roundWinner.classList.add("#roundWinner");

const roundScore=document.createElement("p");
roundScore.classList.add("#roundScore");

const finalWinner=document.createElement("p");
finalWinner.classList.add("#finalWinner");

result.appendChild(finalWinner);
result.appendChild(roundWinner);
result.appendChild(roundScore);

const rock=document.querySelector("#rock");
rock.addEventListener('click',()=>{
let playerSelection="Rock";
game(playerSelection);
});

const paper=document.querySelector("#paper");
paper.addEventListener('click',()=>{
let playerSelection="Paper";
game(playerSelection);
});

const scissors=document.querySelector("#scissors");
scissors.addEventListener('click',()=>{
let playerSelection="Scissors";
game(playerSelection);
});

let c=0,k=0,g=0;



