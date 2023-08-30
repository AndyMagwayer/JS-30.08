// Функция для генерации случайного числа от 1 до 10
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  // Функция для вывода подсказки
  function showHint(target, randomNumber) {
    if (target < randomNumber) {
      console.log("Чуть больше");
    } else if (target > randomNumber) {
      console.log("Чуть меньше");
    }
  }
  
  // Функция для игры угадывания числа
  function startGame() {
    const randomNumber = getRandomNumber();
    let attempts = 5;
    
    console.log("Игра началась");
    
    while (attempts > 0) {
      const userNumber = parseInt(prompt("Угадайте число от 1 до 10"));
      
      if (userNumber === randomNumber) {
        console.log("Вы угадали число!");
        break;
      } else {
        showHint(userNumber, randomNumber);
        attempts--;
        console.log(`У вас осталось ${attempts} попыток`);
      }
    }
    
    if (attempts === 0) {
      console.log("Вы использовали все попытки. Игра окончена.");
      const playAgain = confirm("Хотите ли вы переиграть?");
      
      if (playAgain) {
        startGame();
      } else {
        console.log("До свидания!");
      }
    }
  }
  
  // Главная функция
  function main() {
    alert("Приветствую!");
  
    const playGame = confirm("Хотите ли вы начать игру?");
    
    if (playGame) {
      startGame();
    } else {
      console.log("До свидания!");
    }
  }
  
  // Запуск главной функции при загрузке страницы
  main();