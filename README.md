# JS-30.08


#Deploy:https://guess-the-number-game-magamed.netlify.app/


#About the project:
 In the index.html file, we created the HTML structure for the "Guess the Number" game.
- We have an `
` heading with the text "Guess the Number" which is displayed on the page.
- Below that, there is an input field for the number and a "Guess" button which the user will interact with.

CSS styles:
- We defined styles for the game elements to make them visually appealing and user-friendly.
- We set the background color, font, and text alignment to make the page look attractive.

JavaScript code:
- We used JavaScript to add the game logic and handle user input.
- The `getRandomNumber()` function generates a random number between 1 and 10, which the user will try to guess.
- The `showHint()` function provides a hint to the user if their guess does not match the secret number. For example, if the user enters a number higher than the secret number, the function will display the text "A little lower" to help the user narrow down their guess range.
- The `startGame()` function implements the game process. It generates a random number using the `getRandomNumber()` function, sets an initial number of attempts (5), and starts a loop that prompts the user to enter numbers. If the user's guess matches the secret number, the game ends and a victory message is displayed. If the user does not guess the number, the `showHint()` function provides a hint and decreases the remaining attempts. If the attempts run out, the game asks the user if they want to play again.
- The main `main()` function starts the game when the page loads. It displays a welcome message and asks the user if they want to start the game. Depending on the response, the `startGame()` function initiates the game process or displays a game over message.

Overall, the project is a simple game where the user needs to guess a random number between 1 and 10 using an input field and a "Guess" button. The JavaScript code handles user input, provides hints, and tracks the number of attempts. HTML and CSS are used to create the visual elements of the game.
