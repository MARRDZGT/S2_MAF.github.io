// quizData_sem2.js

var quizQuestions = [
  {
    question: "¿Cuál es la serie de Taylor de $f(x) = \\cos(x)$ alrededor de $x = \\pi/3$?",
    options: [
      "$\\frac{1}{2} - \\frac{\\sqrt{3}}{2} (x - 2\\pi/6) - \\frac{1}{4} (x - \\pi/3)^2 + \\frac{\\sqrt{3}}{12} (x - \\pi/3)^3 + \\frac{1}{48} (x - \\pi/3)^4 + \\dots \\;$",
      "$\\frac{1}{2} - \\frac{\\sqrt{3}}{2} (x - \\pi/3) - \\frac{1}{4} (x - \\pi/3)^2 + \\frac{\\sqrt{3}}{12} (x - \\pi/3)^3 + \\frac{1}{24} (x - \\pi/3)^4 + \\dots \\;$",
      "$\\frac{1}{3} - \\frac{\\sqrt{3}}{6} (x - \\pi/3) - \\frac{1}{9} (x - \\pi/3)^2 + \\frac{\\sqrt{3}}{27} (x - \\pi/3)^3 + \\frac{1}{81} (x - \\pi/3)^4 + \\dots \\;$",
      "$\\frac{1}{2} - \\frac{\\sqrt{3}}{2} (x - 2\\pi/6) - \\frac{1}{4} (x - \\pi/3)^2 + \\frac{\\sqrt{4}}{12} (x - \\pi/3)^3 + \\frac{1}{48} (x - \\pi/3)^4 + \\dots \\;$"
    ],
    correctAnswer: 0,
    feedback2: "¡Muy bien! esa es la definición de Bola abierta",
    feedback: "¡error!  observa bien las desigualdades"
  },
  {
    question: "¿Cuál es la serie Mclaurin de $f(x) = \\sin(x)?$",
    options: [
      "$\\sin(x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^n}{(2n+1)!} x^{2n+1} \\;$",
      "$\\sin(x) = x + \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} - \\frac{x^9}{9!} + \\dots\\;$",
      "$\\sin(x) = x + \\frac{x^3}{3!} + \\frac{x^5}{5!} + \\frac{x^7}{7!} + \\frac{x^9}{9!} + \dots\\;$",
      "$\\sin(x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{(2n+1)!} x^{2n+1} \\;$",
    ],
    correctAnswer: 3,
    feedback2: "¡Muy bien! esa es la definición de Bola cerrada",
    feedback: "¡error! observa bien las desigualdades"
  },
  {
    question: "De la familia de soluciones para la ecuación diferencial del oscilador armónico simple $$\\frac{d^2 x(t)}{dt} = -\\omega x$$",
    options: [
      "$M\\cos(xt - \\delta) \\;$",
      "$M\\cos(\\omega t - \\delta) \\;$",
      "$M\\tan(\\omega t - \\delta) \\;$",
      "$M\\cosh(\\omega t + \\delta) \\;$"
    ],
    correctAnswer: 1,
    feedback2: "¡Muy bien! esa es la definición de Esfera",
    feedback: "¡error! observa bien la igualdad"
  },
];

// -------------------------------------------------------
// A partir de aquí, el resto del código para renderizar
// las preguntas se parece al que ya tienes:
//
//  1. randomizar las opciones con la función randomizeOptions()
//  2. insertar en el DOM con addQuestionToDOM()
//  3. invocar MathJax.typesetPromise()
//  4. y así sucesivamente...
// -------------------------------------------------------

// Ejemplo de randomizar antes de mostrarlas:
for (let i = 0; i < quizQuestions.length; i++) {
  quizQuestions[i] = randomizeOptions(quizQuestions[i]);
}

// Suponiendo que existe un contenedor con id="quizContainer":
let container = document.getElementById('quizContainer');

quizQuestions.forEach((question, qIndex) => {
  let questionDiv = document.createElement('div');
  questionDiv.className = 'question';
  questionDiv.setAttribute('data-question', qIndex);

  let questionTitle = document.createElement('h2');
  questionTitle.textContent = question.question;
  questionDiv.appendChild(questionTitle);

  question.options.forEach((option, oIndex) => {
    let optionDiv = document.createElement('div');
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'answer' + qIndex;
    radio.value = oIndex;

    let label = document.createElement('label');
    label.textContent = option;

    optionDiv.appendChild(radio);
    optionDiv.appendChild(label);

    let feedback = document.createElement('div');
    feedback.className = 'feedback';
    feedback.setAttribute('data-feedback', oIndex);

    // Breve ejemplo: en tu código real, manejarías feedback correct/incorrect
    feedback.textContent = (oIndex === question.correctAnswer) ? question.feedback2 : question.feedback;

    optionDiv.appendChild(feedback);
    questionDiv.appendChild(optionDiv);
  });

  container.appendChild(questionDiv);

  // Procesa MathJax en cada iteración
  MathJax.typesetPromise();
});

// Ejemplo muy básico de conteo de puntos, etc.
let points = 0;
document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
  radio.addEventListener('change', function(e) {
    let questionIndex = parseInt(e.target.closest('.question').getAttribute('data-question'));
    let selectedOption = parseInt(e.target.value);
    let currentQuestion = quizQuestions[questionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      points++;
    }
    console.log('Puntos:', points);
  });
});

