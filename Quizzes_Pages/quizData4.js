// quizData_sem2.js

var quizQuestions = [
  {
    question: "Una sucesión $(x_n)$ en un espacio métrico $(X,d)$ es _______, o es ________ a $x \\in X$ si $$\\lim_{ n \\to \\infty} d(x_n, x) = 0$$ donde al punto $x$ se le llama el límite de la sucesión $(x_n)$.",
    options: [
      "Converge, divergente",
      "Converge, convergente",
      "Divergente, convergente",
      "Diverge, divergente"
    ],
    correctAnswer: 2,
    feedback2: "¡Muy bien! esa es la definición de convergencia",
    feedback: "¡Error! cuidado con los juegos de palabras."
  },
  {
    question: "La sucesión $1/n$ es un buen ejemplo de una sucesión divergente  (si, hasta el cansancio)  en $X = \\mathbb{Z} \\setminus \\{0\\}$. Sin embargo, existe el límite: su límite es $0$. ¿Qué condición necesita para ser convergente?",
    options: [
      "Es falso, la sucesión si converge en $\\,X \\, $  y por lo tanto, su límite está en $\\,X \\,$",
      "Se necesita que el punto límite esté en $\\,X\\,$",
      "La sucesión simplemente diverge",
      "Debe existir una subsucesión debe ser convergente en $\\,X\\,$"
    ],
    correctAnswer: 1,
    feedback2: "¡Muy bien! si el límite está en el espacio, la sucesión es convergente",
    feedback: "¡Error! necesitamos que su límite esté en el espacio métrico."
  },
  {
    question: "Sabemos que cualquier norma $||.|| : X \\to [0,\\infty)$ que se pueda definir sobre un espacio vectorial $X$ satisface que \\[ \\forall x \\in X  \\quad ||x|| \\geq 0 \\quad \\text{y} \\quad ||x|| = 0 \\Leftrightarrow x = 0\\] ¿Cómo se le conoce a esta propiedad de las normas?",
    options: [
      "La norma de un subespacio",
      "La norma es semi-definida positiva",
      "Homogeneidad del valor absoluto",
      "Desigualdad del triángulo"
    ],
    correctAnswer: 1,
    feedback2: "¡Muy bien! la norma por definición debe ser positiva",
    feedback: "¡Error! recuerda las tres propiedades de un espacio normado."
  },
    {
    question: "Sabemos que cualquier norma $||.|| : X \\to [0,\\infty)$ que se pueda definir sobre un espacio vectorial $X$ sobre un campo $\\mathbb{K}$ satisface que \\[||\\lambda x|| = |\\lambda| ||x|| \\quad \\forall \\lambda \\in \\mathbb{K} \\text{ y } x \\in X  \\] ¿Cómo se le conoce a esta propiedad de las normas?",
    options: [
      "Simetría de la norma",
      "La norma es semi-definida positiva",
      "Contracción de las normas",
      "Homogeneidad del valor absoluto"
    ],
    correctAnswer: 3,
    feedback2: "¡Muy bien! la norma por definición debe ser positiva",
    feedback: "¡Error! recuerda las tres propiedades de un espacio normado."
  },
      {
    question: "Sabemos que cualquier norma $||.|| : X \\to [0,\\infty)$ que se pueda definir sobre un espacio vectorial $X$ sobre un campo $\\mathbb{K}$ satisface que \\[ \\forall x,y \\in X  \\, ||x+y|| \\leq ||x|| + ||y||  \\] ¿Cómo se le conoce a esta propiedad de las normas?",
    options: [
      "Simetría de la norma",
      "Desigualdad de Minkowski",
      "Desigualdad del triángulo",
      "Desigualdad de Cauchy-Bunyakovsky-Schwarz"
    ],
    correctAnswer: 2,
    feedback2: "¡Muy bien! la norma por definición debe ser positiva",
    feedback: "¡Error! recuerda las tres propiedades de un espacio normado."
  },
  {
    question: "Sea $(X, ||\\cdot||)$ un espacio normado. La norma da la noción de '_______' a cada vector del espacio vectorial e induce una métrica $d$ sobre $X$, dada por \\[d_{||\\cdot||}(x,y) = ||x-y||\\]",
    options: [
      "Longitud",
      "Distancia",
      "Espacio",
      "Continuidad"
    ],
    correctAnswer: 0,
    feedback2: "¡Muy bien! la norma da la noción de longitud, así como la métrica da la noción de distancia",
    feedback: "¡Error! si la métrica da noción de distancia ¿qué nos dice la norma?"
  },
  {
    question: "¿Cuáles son las condiciones para que un espacio normado $(X, ||\\cdot||)$ sea también un espacio de Banach?",
    options: [
      "Que el espacio tenga producto interno y que sea completo (toda sucesión de Cauchy converge en el espacio).",
      "Que el espacio sea métrico y topológico",
      "Que el espacio sea vectorial y defina una métrica",
      "Que toda sucesión de Cauchy sea convergente en el espacio."
    ],
    correctAnswer: 3,
    feedback2: "¡Muy bien! Es de Banach.",
    feedback: "¡Error! Piensa en la completez de los espacios normados."
  },
  {
    question: "La suma y el producto de normas en los espacios $\\, l^p \\,$ pueden escribirse como una generalización de la desigualdad del triángulo y la desigualdad de desigualdad de Cauchy-Schwarz. Para el producto: \\[\\sum_{j=1}^{n} |x_j y_j| \\leq  \\left(\\sum_{k=1}^{n}|x_k|^p\\right)^{\\frac{1}{p}} \\left(\\sum_{m=1}^{n}|y_m|^q\\right) ^{\\frac{1}{q}}\\]\n\ncon $p > 1$ y $\\frac{1}{p} + \\frac{1}{q} = 1$.\n\nPara la suma:\n\n\\[ \\left(\\sum_{j=1}^{n} |x_j + y_ j|^p \\right)^{\\frac{1}{p}} \\leq \\left(\\sum_{k=1}^{n}|x_k|^p\\right)^{\\frac{1}{p}} + \\left(\\sum_{m=1}^{n}|y_m|^p\\right)^{\\frac{1}{p}}\\]\n\ndonde $p \\geq 1$. Estas desigualdades son conocidas como:",
    options: [
      "Desigualdad del triángulo generalizada",
      "Desigualdades $\\, l^p \\,$",
      "Desigualdad de Hölder y Minkowsky",
      "Desigualdad de Cauchy y Minkowsky"
    ],
    correctAnswer: 2,
    feedback2: "¡Muy bien! Son las desigualdades de Hölder y Minkowsky",
    feedback: "¡Error! La prueba está en la tarea."
  },
  {
    question: "Completa: Del teorema: 'Cada subespacio de dimensión ___________ de un espacio normado $X$ es completo. En particular, cada espacio normado de dimensión _________ es completo.'",
    options: [
      "Finita y finita",
      "Infinita e infinita",
      "Infinita y finita",
      "Finita e infinita"
    ],
    correctAnswer: 0,
    feedback2: "¡Muy bien! Un espacio normado de dimensión finita es completo",
    feedback: "¡Error! Lee con cuidado."
  },
  {
    question: "Sea una sucesión infinita de términos $a_1, a_2, ... $. Se define su suma parcial como \\[S_i = \\sum _{n=1}^{i} a_n\\] Si la suma parcial converge a cierto límite finito cuando $i \\to \\infty$, la serie infinita se dice que es:",
    options: [
      "Convergente y debe cumplir el criterio de la derivada",
      "Convergente y esta condición es suficiente",
      "Divergente y necesita cumplir el criterio de Cauchy",
      "Convergente y debe cumplir el criterio de Cauchy"
    ],
    correctAnswer: 3,
    feedback2: "¡Muy bien! La serie tiende a cierto límite pero debe de cumplir el criterio de convergencia de Cauchy (condición necesaria y suficiente)",
    feedback: "¡Error! la suma infinita debe ser de Cauchy y tener límite en el espacio."
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

