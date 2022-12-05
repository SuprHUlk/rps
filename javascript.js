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

function game() {
    let c=0,k=0;
    for(let i=0;i<5;i++) {
        let computerSelection=getComputerChoice();
        let playerSelection=input();
        if(playRound(playerSelection,computerSelection).search("win")>=0) {
            c++;
        }
        else if(playRound(playerSelection,computerSelection).search("lose")>=0) {
            k++;
        }
        console.log(playRound(playerSelection,computerSelection));
    } 
    if(c>k) {
        console.log("You win!");
    }
    else if(c==k) {
        console.log("Draw!");
    }
    else {
        console.log("You lose!");
    }
}

function input() {
    let playerSelection=prompt("Rock, Paper, Scissors?").toLowerCase();
    playerSelection=playerSelection.replace(playerSelection.charAt(0), playerSelection.charAt(0).toUpperCase());
    return playerSelection;
}

game();

