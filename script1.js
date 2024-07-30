let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guess-btn').addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById('guess-input').value);
    const message = document.getElementById('message');
    const hint = document.getElementById('hint');
    const attemptsDisplay = document.getElementById('attempts');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed the number!";
        hint.textContent = "";
        document.getElementById('guess-btn').disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low!";
        hint.textContent = `Hint: Try a number greater than ${userGuess}`;
    } else {
        message.textContent = "Too high!";
        hint.textContent = `Hint: Try a number less than ${userGuess}`;
    }
});

document.getElementById('reset-btn').addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = "Guess a number between 1 and 100";
    document.getElementById('hint').textContent = "";
    document.getElementById('attempts').textContent = "Attempts: 0";
    document.getElementById('guess-input').value = "";
    document.getElementById('guess-btn').disabled = false;
});
