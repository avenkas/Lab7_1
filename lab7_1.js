// Змінні для підрахунку правильних відповідей та загальної кількості запитань
let correctAnswers = 0;
let totalQuestions = 0;
let num1, num2;

// Функція для генерації нового завдання з множенням
function generateTask() {
    // Генеруємо два випадкові числа від 1 до 10
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    
    // Виводимо задачу на сторінку
    document.getElementById("task").textContent = `Задача: ${num1} × ${num2} = ?`;
    
    // Очищуємо поле введення відповіді
    document.getElementById("answer").value = "";
}

// Функція для перевірки відповіді користувача
function checkAnswer() {
    // Отримуємо відповідь користувача та конвертуємо її у число
    let userAnswer = parseInt(document.getElementById("answer").value);
    
    // Обчислюємо правильну відповідь
    let correctAnswer = num1 * num2;
    
    // Збільшуємо кількість запитань
    totalQuestions++;

    // Перевіряємо правильність відповіді
    if (userAnswer === correctAnswer) {
        // Якщо відповідь правильна, збільшуємо кількість правильних відповідей
        correctAnswers++;
        document.getElementById("result").textContent = "Правильно!";
    } else {
        // Якщо відповідь неправильна, виводимо правильне значення
        document.getElementById("result").textContent = `Помилка, правильна відповідь: ${correctAnswer}`;
    }

    // Оновлюємо статистику рахунку
    updateScore();
}

// Функція для оновлення статистики правильних відповідей
function updateScore() {
    // Обчислюємо відсоток правильних відповідей
    let scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Оновлюємо значення на сторінці
    document.getElementById("score").textContent = scorePercentage;
    document.getElementById("correct").textContent = correctAnswers;
    document.getElementById("total").textContent = totalQuestions;
}

// Функція для переходу до наступного запитання
function nextTask() {
    // Генеруємо нове завдання
    generateTask();
    
    // Очищуємо результат попередньої перевірки
    document.getElementById("result").textContent = "";
}

// Запускаємо перше завдання при завантаженні сторінки
generateTask();
