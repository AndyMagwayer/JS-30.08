# JS-30.08
# ![Screen](https://github.com/AndyMagwayer/JS-30.08/blob/main/Screenshot%202023-08-30%20180909.png)

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

<br>

<br>

# in the Russian language:

- В файле index.html мы создали базовую структуру HTML документа. Внутри тега `` у нас есть контейнер `.game-container`, который будет содержать всю игру.
- Внутри контейнера `.game-container` есть `
` с заголовком "Угадай число".
- Далее идет контейнер `.game-content`, который содержит поле ввода числа и кнопку "Угадать".
- Под `.game-content` есть контейнер `.hearts-container`, в котором расположены сердечки, отображающие количество оставшихся попыток.

CSS стили:
- Мы определили стили для всего проекта в файле styles.css.
- Задали фоновый цвет для `` и установили выравнивание текста по центру.
- Контейнер `.game-container` настроен с использованием flexbox, чтобы расположить его по центру страницы.
- Задали стили для заголовка `
`, поля ввода числа и кнопки "Угадать".
- Контейнер `.hearts-container` настроен с использованием flexbox, чтобы сердечки были выровнены по правому краю и имели небольшой отступ.

JavaScript код:
- Мы определили несколько функций для работы игры.
- Функция `getRandomNumber()` генерирует случайное число от 1 до 10.
- Функция `showHint()` выводит подсказку пользователю, если его число не совпадает с загаданным.
- Функция `startGame()` реализует игровой процесс. Она генерирует случайное число, устанавливает количество попыток (начально 5) и запускает цикл, в котором пользователю предлагается вводить числа. Если число пользователя совпадает с загаданным, игра завершается. Если нет, выводится подсказка и количество попыток уменьшается. Если попытки заканчиваются, игра спрашивает у пользователя, хочет ли он сыграть еще раз.
- Главная функция `main()` выводит приветственное сообщение и спрашивает пользователя, хочет ли он начать игру. В зависимости от ответа, игра начинается или закрывается.
- Мы запускаем главную функцию `main()` при загрузке страницы с помощью `
