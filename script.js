let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.ceil(Math.random() * 9);
}

function compareGuesses(currentHumanGuess, computerGuess, target) {
    numberRange(currentHumanGuess);
    const humanDifference = getAbsoluteDistance(currentHumanGuess, target);
    const computerDifference = getAbsoluteDistance(computerGuess, target);
    if ((humanDifference < computerDifference) || currentHumanGuess === target) {
        return true; // Human is closer
    // First, check for exact matches
    if (currentHumanGuess === target && computerGuess === target) {
        return true; // Both guessed exactly, tie goes to human
    } else if (currentHumanGuess === target) {
        return true; // Human guessed exactly
    } else if (computerGuess === target) {
        return false; // Computer guessed exactly
    } else if (humanDifference < computerDifference) {
        return true; // Human is closer
    } else if (computerDifference < humanDifference) {
        return false; // Computer is closer
    } else {
        return true; // Tie goes to human
    }
}

function numberRange(guess) {
    if ((guess >= 0) && (guess <= 9)) {
        return guess;
    } else {
        return true;
    } else {
        window.alert('Number out of range');
        return false;
    }
}
function getAbsoluteDistance(difference, target) {
    difference = Math.abs(difference - target);
    return difference;
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    } else {
        window.alert('Error 404: Wrong input type');
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}
