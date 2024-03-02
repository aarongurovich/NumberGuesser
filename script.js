let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.floor(Math.random()*10));
}

function compareGuesses(humanGuess, computerGuess, targetNum){
    if(humanGuess >= 0 && humanGuess <= 9){
        let human = Math.abs(targetNum - humanGuess);
        let computer = Math.abs(targetNum - computerGuess);
    if(human <= computer){   
        return true;
    }
    else{
        return false;
    }
    }
    else{
        alert('number is out of range, must be inclusively between 0-9');
    }
    
}

function updateScore(winner){
    if(winner === 'human'){
        humanScore ++;
    }
    else{
        computerScore ++;
    }
}

function advanceRound(){
    currentRoundNumber ++;
}


