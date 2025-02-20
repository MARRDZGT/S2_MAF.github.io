// Quiz Variables
var currentQuestionIndex = 0;
var score = 0;
var timerValue = 10; 
var timerInterval;
var userName = ''; 

// DOM Elements
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


// Function to check if the user has already taken the quiz
function checkUserExists(userId, callback) {
    var url = "https://script.google.com/macros/s/AKfycbx6hhxG7afxGSM7-Z3VWGE9GVcOvKNsMmj5CJ96S8VD5HKrB9elG2cH1V5ennBqO0uygQ/exec"; // Tu URL de Google Apps Script

    fetch(`${url}?userId=${userId}`)
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



// Function to start the quiz
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

// Function to display the current question
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
          '<input type="radio" name="answer" id="option' + i + '" value="' + i + '"> <label for="option' + i + '">' + currentQuestion.options[i] + '</label>';
      option.setAttribute('data-index', i);
      option.querySelector('label').addEventListener('click', checkAnswer);
      optionsArea.appendChild(option);
  }

  startTimer();
}


// Function to check the answer
function checkAnswer(event) {
    clearInterval(timerInterval);
    var selectedOption = event ? event.currentTarget.parentNode : null;
    var selectedAnswerIndex = selectedOption ? parseInt(selectedOption.getAttribute('data-index')) : null;
    var currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedAnswerIndex !== null && selectedAnswerIndex === currentQuestion.correctAnswer) {
        feedbackArea.textContent = 'Correcto!';
        score++;
    } else if (selectedAnswerIndex === null && timerValue <= 0) {
        feedbackArea.textContent = 'Time Out!';
    } else {
        feedbackArea.textContent = 'Incorrecto.';
    }

    setTimeout(nextQuestion, 2000);
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

// Function to display the final score and save it
//function displayScore() {
//    questionArea.textContent = '';
//    optionsArea.innerHTML = '';
//    feedbackArea.textContent = '';
//
//    var percentage = (score / quizQuestions.length) * 100;
//    var message = percentage >= 50 ? `Bien ${userName}! Tu puntaje es ${percentage}` : `Puedes mejorar, ${userName}. Tu puntaje es ${percentage}`;
//
//    scoreElement.textContent = score;
//    totalQuestionsElement.textContent = quizQuestions.length;
//    scoreArea.style.display = 'block';
//    scoreArea.innerHTML = '<p>' + message + '</p>';
//    progressBar.style.display = 'none';
//
//    // Guardar el resultado en la base de datos
//    saveResult(userName, score);
//}
function displayScore() {
  // Limpiar la pantalla del quiz
  questionArea.textContent = '';
  optionsArea.innerHTML = '';
  feedbackArea.textContent = '';

  // Calcular el puntaje final
  var percentage = (score / quizQuestions.length) * 100;
  var message = (percentage >= 50) ? 
      `Bien hecho, ${userName}! Tu puntaje es ${percentage.toFixed(2)}%` : 
      `Puedes mejorar, ${userName}. Tu puntaje es ${percentage.toFixed(2)}%`;

  // Mostrar el puntaje en la interfaz
  scoreElement.textContent = score;
  totalQuestionsElement.textContent = quizQuestions.length;
  scoreArea.style.display = 'block';
  scoreArea.innerHTML = `<p>${message}</p>`;
  progressBar.style.display = 'none';

  // Evitar que el quiz se reinicie automáticamente
  clearInterval(timerInterval);

  // Agregar un botón para volver al inicio (HOME)
  var homeButton = document.createElement('a');
  homeButton.textContent = 'Volver al Inicio';
  homeButton.href = '/';  // Ajusta esta ruta si tu home está en otra página
  homeButton.className = 'btn btn-primary mt-3';
  homeButton.style.display = 'block';
  homeButton.style.marginTop = '20px';

  scoreArea.appendChild(homeButton);
}



// Function to send result to the server
//function saveResult(userId, userScore) {
//    console.log("🚀 Enviando datos al servidor:", userId, userScore);
//
//    fetch("http://localhost:3000/save-result", { 
//        method: "POST",
//        headers: { "Content-Type": "application/json" },
//        body: JSON.stringify({ userId, userScore })
//    })
//    .then(response => response.text())
//    .then(data => {
//        console.log("✅ Respuesta del servidor:", data);
//    })
//    .catch(error => {
//        console.error("❌ Error al guardar:", error);
//    });
//}

function saveResult(userId, userScore) {
    var url = "https://script.google.com/macros/s/AKfycbx6hhxG7afxGSM7-Z3VWGE9GVcOvKNsMmj5CJ96S8VD5HKrB9elG2cH1V5ennBqO0uygQ/exec"; // Reemplaza con tu URL de Google Apps Script

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, userScore })
    })
    .then(response => response.text())
    .then(data => {
        console.log("✅ Respuesta del servidor:", data);
        alert(data); // Muestra un mensaje si el resultado se guardó correctamente
    })
    .catch(error => {
        console.error("❌ Error al guardar:", error);
    });
}

