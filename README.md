# Wordle Game

This is a simple Wordle game developed using HTML, CSS, and JavaScript.

## How to Play

1. Open the `index.html` file in your browser to start the game.
2. The game presents a grid of five rows, each containing five input boxes. The objective is to guess a randomly selected five-letter word by typing your guesses into these input boxes.
3. After entering your guess in the "Guess!!!" input field, click the "ENTER!" button or press the Enter key to submit your guess.
4. The game provides feedback on your guess:
   - A green background indicates a correct letter in the correct position.
   - A yellow background indicates a correct letter but in the wrong position.
   - A grey background indicates an incorrect letter.
5. You have five attempts to guess the word correctly. If unsuccessful, the game will notify you of your loss. If you guess the word correctly within the given attempts, you win!

## Files

- `index.html`: Contains the game's user interface.
- `styles.css`: Stylesheet file for the game's visual layout.
- `script.js`: JavaScript file handling the game logic and functionality.

## Game Mechanics

- **Input Boxes**: Represent spaces for each letter in the word to be guessed.
- **Guess Input Field and Button**: Allows you to input your guesses and submit them for evaluation.
- **Feedback**: The background color of the input boxes provides feedback on your guesses.

## Implementation Details

- The game randomly selects a five-letter word from a predefined list loaded from the `five-letter.txt` file.
- It compares your input against the chosen word and provides color-coded feedback based on correct letters and positions.
- The game allows five attempts to guess the word correctly.
- Upon a win or loss, the game resets for a new round with a new randomly selected word.

## Credits

- Developed by Jordan/Jordanthecs

Feel free to modify, enhance, or expand this game as you like!

Enjoy playing Wordle and have fun challenging your word-guessing skills!
