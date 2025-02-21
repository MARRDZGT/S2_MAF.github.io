// 📌 Quiz Variables
var currentQuestionIndex = 0;
var score = 0;
var timerValue = 10;
var timerInterval;
var userName = '';

// 📌 DOM Elements
var welcomeContainer = document.getElementById('welcome-container');
var nameInput = document.getElementById('name-input');
var startButton = document.getElementById('start-button');
var quizContainer = document.getElementById('quiz-container');
var questionArea = document.getElementById('question-area');
var optionsArea = document.getElementById('options-area');
var feedbackArea = document.getElementById('feedback-area');
var scoreArea = document.getElementById('score-area');
var scoreElement = document.getElementById('score');
var totalQuestionsElement = document.getElementById('total-questions');
var progressBar = document.getElementById('progress-bar');

// 📌 URL de Google Apps Script (reemplazada con la nueva)
var googleAppsScriptURL = "https://script.google.com/macros/s/AKfycbzcAi2oLCs1M3n_kUAWhp9yfj10Du3-IZZEuR2JSacl0ScDuihtApc1xkZpOu8SabkB1w/exec";


// 📌 Verifica si un usuario ya hizo el examen
function checkUserExists(userId, callback) {
    fetch(`${googleAppsScriptURL}?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
            console.log("✅ Respuesta de verificación:", data);
            callback(data.exists);
        })
        .catch(error => {
            console.error("❌ Error al verificar usuario:", error);
            callback(false);
        });
}

// 📌 Iniciar el quiz
startButton.addEventListener('click', function() {
    userName = nameInput.value.trim();

    if (userName === "") {
        alert("Por favor ingresa tu número de cuenta.");
        return;
    }

    checkUserExists(userName, function(exists) {
        if (exists) {
            alert("Este número de cuenta ya ha completado el examen.");
        } else {
            welcomeContainer.style.display = 'none';
            quizContainer.classList.remove('d-none');
            displayQuestion();
        }
    });
});

// 📌 Mostrar preguntas del quiz
function displayQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        displayScore();
        return;
    }

    var currentQuestion = quizQuestions[currentQuestionIndex];
    console.log("🟢 Mostrando pregunta:", currentQuestion);

    questionArea.textContent = currentQuestion.question;
    optionsArea.innerHTML = '';

    for (var i = 0; i < currentQuestion.options.length; i++) {
        var option = document.createElement('div');
        option.className = 'option';
        option.innerHTML =
            `<input type="radio" name="answer" id="option${i}" value="${i}">
            <label for="option${i}">${currentQuestion.options[i]}</label>`;
        option.setAttribute('data-index', i);
        option.querySelector('label').addEventListener('click', checkAnswer);
        optionsArea.appendChild(option);
    }

    startTimer();
}

// 📌 Verificar la respuesta seleccionada
function checkAnswer(event) {
    clearInterval(timerInterval);
    var selectedOption = event ? event.currentTarget.parentNode : null;
    var selectedAnswerIndex = selectedOption ? parseInt(selectedOption.getAttribute('data-index')) : null;
    var currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedAnswerIndex !== null && selectedAnswerIndex === currentQuestion.correctAnswer) {
        feedbackArea.textContent = '✅ ¡Correcto!';
        score++;
    } else if (selectedAnswerIndex === null && timerValue <= 0) {
        feedbackArea.textContent = '⏳ ¡Tiempo agotado!';
    } else {
        feedbackArea.textContent = '❌ Incorrecto.';
    }

    setTimeout(nextQuestion, 2000);
}

// 📌 Pasar a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

// 📌 Mostrar el puntaje final y guardar resultados
function displayScore() {
    questionArea.textContent = '';
    optionsArea.innerHTML = '';
    feedbackArea.textContent = '';

    var percentage = (score / quizQuestions.length) * 100;
    var message = (percentage >= 50) ? 
        `🎉 ¡Bien hecho, ${userName}! Tu puntaje es ${percentage.toFixed(2)}%` : 
        `📚 Puedes mejorar, ${userName}. Tu puntaje es ${percentage.toFixed(2)}%`;

    scoreElement.textContent = score;
    totalQuestionsElement.textContent = quizQuestions.length;
    scoreArea.style.display = 'block';
    scoreArea.innerHTML = `<p>${message}</p>`;
    progressBar.style.display = 'none';

    clearInterval(timerInterval);

    // Guardar el resultado en Google Sheets
    saveResult(userName, score);

    // Agregar un botón para volver al inicio (HOME)
    var homeButton = document.createElement('a');
    homeButton.textContent = '🏠 Volver al Inicio';
    homeButton.href = 'https://marrdzgt.github.io/S2_MAF.github.io/';
    homeButton.className = 'btn btn-primary mt-3';
    homeButton.style.display = 'block';
    homeButton.style.marginTop = '20px';

    scoreArea.appendChild(homeButton);
}

// 📌 Guardar el resultado en Google Sheets
function saveResult(userId, userScore) {
    fetch(googleAppsScriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, userScore })
    })
    .then(response => response.json())
    .then(data => {
        console.log("✅ Respuesta del servidor:", data);
        alert(data.message); // Muestra un mensaje si el resultado se guardó correctamente
    })
    .catch(error => {
        console.error("❌ Error al guardar:", error);
    });
}

// 📌 Función para el temporizador
function startTimer() {
    timerValue = 10;
    progressBar.style.width = '100%';

    timerInterval = setInterval(function () {
        timerValue -= 0.1;
        var progressPercentage = (timerValue / 10) * 100;
        progressBar.style.width = progressPercentage + '%';

        if (timerValue <= 0) {
            clearInterval(timerInterval);
            checkAnswer(null);
        }
    }, 100);
}

