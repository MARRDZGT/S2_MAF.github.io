// quizData_sem2.js

var quizQuestions = [
  {
    question: "Sea $x_0 \\in X$ y $r>0$ un real. Definimos: $$B(x_0; r) = \\{ x \\in X \\mid d(x,x_0) < r \\}$$ como:",
    options: [
      "Como la Bola abierta con centro en $\\; x_0 \\;$ y radio $\\; r \\;$",
      "Como la Bola cerrada con centro en $\\; x_0 \\;$ y radio $\\; r \\;$",
      "Como Esfera con centro en $\\; x_0 \\;$ y radio $\\; r \\;$",
      "El conjunto vacío $\\; \\emptyset \\;$"
    ],
    correctAnswer: 0,
    feedback2: "¡Muy bien! esa es la definición de Bola abierta",
    feedback: "¡error!  observa bien las desigualdades"
  },
  {
    question: "Sea $x_0 \\in X$ y $r>0$ un real. Definimos: $$\\overline{B}(x_0; r) = \\{ x \\in X \\mid d(x,x_0) \\leq r \\}$$ como:",
    options: [
      "Como la Bola abierta con centro en $\\;x_0\\;$ y radio $\\;r\\;$",
      "Como la Bola cerrada con centro en $\\;x_0\\;$ y radio $\\;r\\;$",
      "Como Esfera con centro en $\\;x_0\\;$ y radio $\\;r\\;$",
      "El conjunto vacío $\\; \\emptyset \\;$"
    ],
    correctAnswer: 1,
    feedback2: "¡Muy bien! esa es la definición de Bola cerrada",
    feedback: "¡error! observa bien las desigualdades"
  },
  {
    question: "Sea $x_0 \\in X$ y $r>0$ un real. Definimos: $$S(x_0; r) = \\{ x \\in X \\mid d(x,x_0) = r \\}$$ como:",
    options: [
      "Como la Bola abierta con centro en $\\; x_0 \\;$ y radio $\\; r \\;$",
      "Como la Bola cerrada con centro en $\\; x_0 \\;$ y radio $\\; r \\;$",
      "Como Esfera con centro en $\\; x_0 \\;$ y radio $\\; r \\;$",
      "El conjunto vacío $\\; \\emptyset \\;$"
    ],
    correctAnswer: 2,
    feedback2: "¡Muy bien! esa es la definición de Esfera",
    feedback: "¡error! observa bien la igualdad"
  },
  {
    question: "Sea $A \\subset X$ y $x \\in X$. Se dice que para todo $\\epsilon > 0$, $$B(x; \\epsilon) \\cap A \\neq \\emptyset$$ entonces:",
    options: [
      "Es un punto interior de $\\; A \\;$",
      "Es un punto frontera o de acumulación de $\\; A \\;$",
      "Es un punto frontera o la frontera de $\\; A \\;$",
      "Es la cerradura de $\\; A \\;$"
    ],
    correctAnswer: 0,
    feedback2: "¡Muy bien! es la definición de punto de acumulación",
    feedback: "¡Error! revisa la condición que involucra $\\epsilon$"
  },
  {
    question: "Sea $A \\subset X$. Definimos $$\\partial A := \\{ x \\in X \\mid x \\text{ es un punto frontera de } A \\}.$$ ¿A qué corresponde?",
    options: [
      "Es un punto frontera o de acumulación de $\\; A \\;$",
      "Es la cerradura de $\\; A \\;$",
      "La frontera de $\\; A \\;$",
      "Es un punto interior de $\\; A \\;$"
    ],
    correctAnswer: 1,
    feedback2: "¡Muy bien! es la definición de la frontera de $A$",
    feedback: "¡Error! piensa en el conjunto de todos los puntos frontera"
  },
  {
    question: "Completa la frase: “Las bolas abiertas son ------------------------- y las bolas cerradas son -------------------”",
    options: [
      "Bolas semi abiertas y semi cerradas",
      "Intervalos",
      "Conjuntos abiertos y conjuntos cerrados",
      "Bases de vecindades"
    ],
    correctAnswer: 1,
    feedback2: "¡Muy bien! recuerda que toda bola abierta es un conjunto abierto y, análogamente, toda bola cerrada es un conjunto cerrado",
    feedback: "¡Error! revisa cómo se definen los conjuntos abiertos y los conjuntos cerrados"
  },
  {
    question: "Completa la frase: “Todos los espacios métricos son ------------, la ------------ define la noción de ------------, pero no todos los espacios topológicos son métricos. En general, un espacio topológico $(X,\\tau)$ es metrizable si existe una métrica $d$ en $X$ que induce la topología $\\tau$.“",
    options: [
      "normados, norma, vector",
      "topológicos, métrica, bola",
      "métricos, topología, intervalo",
      "con producto interno, norma, vectores"
    ],
    correctAnswer: 1,
    feedback2: "¡Muy bien! un espacio métrico siempre induce una topología; la métrica genera las bolas abiertas",
    feedback: "¡Error! no olvides que la métrica induce la topología"
  },
  {
    question: "El siguiente teorema: “Para todo $n \\in \\mathbb{N}$ y $A \\subset \\mathbb{R}^{n}$ con la topología euclidiana, $A$ es compacto si y sólo si $A$ es cerrado y acotado” corresponde a:",
    options: [
      "Teorema espacio métrico segundo numerable",
      "Teorema de Heine-Borel",
      "Teorema de continuidad topológica",
      "Teorema de continuidad en espacios métricos"
    ],
    correctAnswer: 1,
    feedback2: "¡Muy bien! el Teorema de Heine-Borel describe la caracterización de la compacidad en $\\mathbb{R}^n$",
    feedback: "¡Error! este resultado es básico en análisis real multivariable"
  }
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

