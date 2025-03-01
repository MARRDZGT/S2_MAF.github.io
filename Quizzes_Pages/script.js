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

// 📌 URL de Google Apps Script
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

    // 1. Ocultar el botón de comenzar
    startButton.style.display = 'none';
    
    // 2. Agregar la leyenda "cargando ..."
    let loadingMessage = document.createElement('div');
    loadingMessage.innerText = "Cargando ...";
    loadingMessage.style.fontStyle = "italic";
    loadingMessage.style.marginTop = "10px";
    document.getElementById('start-area').appendChild(loadingMessage);


    // 3. Continuar con tu flujo de verificación 
    checkUserExists(userName, function(exists) {
        // 4. (Opcional) Ocultar la leyenda una vez que verifiques
        loadingMessage.style.display = 'none';

        if (exists) {
            alert("Este número de cuenta ya ha completado el examen.");
            // Mostrar nuevamente el botón si deseas permitir reintentos
            startButton.style.display = 'block';
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

    questionArea.innerHTML = currentQuestion.question;
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

    // Procesar con MathJax para renderizar LaTeX
    if (window.MathJax) {
        MathJax.typesetPromise();
    } else {
        console.error("⚠️ MathJax no está definido. Verifica que se haya cargado en tu HTML.");
    }

    startTimer();
}


function checkAnswer(event) {
    clearInterval(timerInterval);

    var selectedOption = event ? event.currentTarget.parentNode : null;
    var selectedAnswerIndex = selectedOption ? parseInt(selectedOption.getAttribute('data-index')) : null;
    var currentQuestion = quizQuestions[currentQuestionIndex];

    // Verifica si fue la respuesta correcta
    if (selectedAnswerIndex !== null && selectedAnswerIndex === currentQuestion.correctAnswer) {
        feedbackArea.textContent = '✅ ¡Correcto!';
        score++;
    } else if (selectedAnswerIndex === null && timerValue <= 0) {
        feedbackArea.textContent = '⏳ ¡Tiempo agotado!';
    } else {
        feedbackArea.textContent = '❌ Incorrecto.';
    }

    // 1) Recorre todas las opciones
    var allOptions = document.querySelectorAll('.option');
    allOptions.forEach(function(optionDiv) {
        // Deshabilita el input radio
        var input = optionDiv.querySelector('input[type="radio"]');
        if (input) {
            input.disabled = true; 
        }

        // 2) Quita la posibilidad de hacer clic en todo el DIV
        optionDiv.style.pointerEvents = 'none';
    });

    // 3) Marca en rojo la opción seleccionada
    if (selectedOption) {
        selectedOption.style.border = '2px solid red';
    }

    // Esperar 2 segundos antes de ir a la siguiente pregunta
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
    homeButton.href = './e1.html';
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
        timerValue -= 0.05;
        var progressPercentage = (timerValue / 10) * 100;
        progressBar.style.width = progressPercentage + '%';

        if (timerValue <= 0) {
            clearInterval(timerInterval);
            checkAnswer(null);
        }
    }, 100);
}

