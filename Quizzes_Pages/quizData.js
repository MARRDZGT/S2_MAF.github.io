// quizData.js
var eq1 = '$$(x_{\\alpha})_{\\alpha\\in\\ I}$$';
var eq2 = '$$x_{\\alpha} \\in\\ X$$';
var eq3 = '$$\\alpha\\ \\in\\ I$$';
var eq4 = '$$T:X \\to\\ Y$$';
var eq5 = '$$\\forall\\ x_{1}, x_{2} \\in\\ D(T)$$';
var eq6 = '$$x_{1} \\neq\\ x_{2} \\implies\\ Tx_{1} \\neq\\ Tx_{2}$$';
var eq7 = '$$\\tau\\ = \\{ U_i \\mid\\ i \\in\\ I \\}$$';

var quizQuestions = [
    {
      question: "La expresión {x | x ∈ A o x ∈ B} corresponde al conjunto:",
      //question:  eq2,
        options: ["Al conjunto Unión A ∪ B", "Al conjunto Intersección A ∩ B", "Al conjunto Diferencia de A \\ B", "Al conjunto vacío ∅"],
        correctAnswer: 0,
        feedback2: "Es el conjunto unión.", 
        feedback: "El conector lógico de la disyunción o nos habla de la unión de conjuntos."
    },
    {
      question: "La expresión {x | x ∈ A y x ∈ B} corresponde al conjunto:",
      options: ["Al conjunto Unión A ∪ B", "Al conjunto Intersección A ∩ B", "Al conjunto Diferencia de A \\ B", "Al conjunto vacío ∅"],
      correctAnswer: 1,
      feedback2: "Es el conjunto intersección.",
      feedback: "El conector lógico de la conjunción y nos habla de la intersección de conjuntos."
    },
    {
      question: "La expresión {x | x ∈ A y x ∉ B} corresponde al conjunto:",
      options: ["Al conjunto Unión A ∪ B", "Al conjunto Intersección A ∩ B", "Al conjunto Diferencia de A \\ B", "Al conjunto vacío ∅"],
      correctAnswer: 2,
      feedback2: "Es el conjunto diferencia o resta de conjuntos.",
      feedback: "Si se tiene una conjunción con el conector y pero un elemento no está en uno de los conjuntos ¿qué operación entre conjuntos hace que esto ocurra?"
    },
    {
      question: "La expresión A - (B U C) = (A - B) U (A - C), es equivalente a la de una ley para operaciones con el complemento de un conjunto ¿de qué ley o leyes se trata?",
      options: [
          "Ley Distributiva",
          "Ley Asociativa",
          "Leyes de Morgan",
          "Ley conmutativa"
      ],
      correctAnswer: 2,
      feedback2: "Esta es una expresión equivalente para diferencias de conjuntos de las Leyes de Morgan.",
      feedback: "En clase mencionamos que existe una expresión equivalente a la unión e intersección de conjuntos complemento si se trabaja con diferencias de conjuntos, de hecho son dos leyes, las leyes de..."
    },
    {
      // question: "Definimos una familia de elementos de un conjunto X como todos los elementos tales que: (X_α)_(α ∈ I) con x_α ∈ X la imagen de α ∈ I. En donde I mapea elementos a X. Esto lo vuelve diferente a simplemente tomar un subconjunto de X, dado que",
      question: "Definimos una familia de elementos de un conjunto X como todos los elementos tales que: "+eq1+" con "+eq2+" la imagen de "+eq3+" En donde I mapea elementos a X. Esto lo vuelve diferente a simplemente tomar un subconjunto de X, dado que",
      options: [
          "En las familias no está bien definida la unión e intersección de conjuntos",
          "Podemos realizar operaciones de unión e intersección de familias",
          "Bajo el mapeo de I con X, se preservan estructuras algebraicas.",
          "Pensar en subconjuntos y familias es equivalente."
      ],
      correctAnswer: 2,
      feedback2: "La importancia de usar familias es que se preserven las estructuras de cada subconjunto.",
      feedback: "El conjunto numerable I es el centro de esta definición ¿para qué definimos estos mapeos entre conjuntos?"
    },
  {
    question: "Al definir mapeos o funciones, se considera al conjunto A como el dominio del mapeo, que bajo la aplicación se denota T: D(T) -> Y, así como al rango R(T) como el conjunto de todas las imágenes. ¿Cómo se llama el conjunto de todas las x en D(T) tales que Tx = y0?",
    options: [
        "Imagen directa de una función o mapeo",
        "Imagen inversa de una función o mapeo",
        "Dominio de una función o mapeo",
        "Rango de una función o mapeo"
    ],
    correctAnswer: 1,
    feedback2: "Se trata de la definición de la imagen inversa.",
    feedback: "Observa bien los subconjuntos definidos como el Dominio, Rango e imagen cuando hacemos un mapeo o función ¿hacia donde apunta el mapeo?"
},
{
    question: "Se dice que un mapeo "+eq4+" es  ______  si al mapear D(T) sobre Y, queda R(T) = Y. ¿Cómo se denomina este tipo de mapeo?",
    options: [
        "Función o mapeo biyectiva",
        "Función o mapeo uno-a-uno",
        "Función o mapeo inyectiva",
        "Función o mapeo sobreyectiva"
    ],
    correctAnswer: 3,
    feedback2: "Aquí no podían fallar, nomamn.",
    feedback: "¡Tu sabes esta! en la definición está oculta la respuesta."
},
{
  question: "Se dice que un mapeo "+eq4+" es  ______  si "+eq5+" se cumple "+eq6+"",
  options: [
      "Función o mapeo biyectiva",
      "Función o mapeo uno-a-uno",
      "Función o mapeo suprayectiva",
      "Función o mapeo sobreyectiva"
  ],
  correctAnswer: 1,
  feedback2: "Aquí no podían fallar, nomamn.",
  feedback: "¡Tu sabes esta! en la definición está oculta la respuesta."
},
{
  question: "Sea X un conjunto y "+eq7+" una colección de subconjuntos de X tal que contiene al vacío y X, es cerrada bajo la unión arbitraria de sus elementos y cerrada bajo la intersección finita de sus elementos. Entonces (X, τ) es un ... ",
  options: [
      "Espacio Métrico",
      "Espacio Topológico",
      "Espacio Normado",
      "Espacio de Medida"
  ],
  correctAnswer: 1,
  feedback2: "Es el inicio de la definición de un espacio topológico.",
  feedback: "Si observas al mapeo τ ¿no era este mapeo lo que dotaba de una topología al conjunto X?"
},
{
  question: "Sea X cualquier conjunto y d: X x X -> ℝ una función tal que es no negativa, satisface la desigualdad del triángulo, cero si y sólo si los dos argumentos son iguales y simétrica. Entonces (X, d) corresponde a la definición de un:",
  options: [
      "Espacio Métrico",
      "Espacio Topológico",
      "Espacio Normado",
      "Espacio de Medida"
  ],
  correctAnswer: 0,
  feedback2: "Es el inicio de la definición de un espacio métrico.",
  feedback: "Si observas a la función d ¿a esta no le llamámos la métrica?"
}

  ];
 

  function randomizeOptions(question) {
    let options = [...question.options];
    let correctOption = options[question.correctAnswer];
    let randomizedOptions = [];
    
    while (options.length) {
      let randomIndex = Math.floor(Math.random() * options.length);
      randomizedOptions.push(options[randomIndex]);
      options.splice(randomIndex, 1);
    }
  
    // Find the new index of the correct option after shuffling
    let newCorrectIndex = randomizedOptions.indexOf(correctOption);
  
    return {
      ...question,
      options: randomizedOptions,
      correctAnswer: newCorrectIndex
    };
  }
  

  function addQuestionToDOM(question, qIndex) {
    let questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.setAttribute('data-question', qIndex);

    let questionTitle = document.createElement('h2');
    questionTitle.textContent = question.question;
    questionDiv.appendChild(questionTitle);

    question.options.forEach((option, oIndex) => {
        //... tu código anterior para agregar opciones ...
    });

    container.appendChild(questionDiv);

    // Procesamos el contenido LaTeX de la pregunta recién agregada
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, questionDiv]);
}


  
  for (let i = 0; i < quizQuestions.length; i++) {
    quizQuestions[i] = randomizeOptions(quizQuestions[i]);
  }
   
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
      feedback.textContent = (oIndex === question.correctAnswer) ? "Correct!" : "Wrong!";
      optionDiv.appendChild(feedback);
      
      questionDiv.appendChild(optionDiv);
      //MathJax.Hub.Queue(["Typeset", MathJax.Hub, questionDiv]);
      //MathJax.typesetPromise();
      
    });
  
    container.appendChild(questionDiv);
    //MathJax.typesetPromise();
    // Llamamos a MathJax para que procese el contenido
    MathJax.typesetPromise();

  });
  
  let points = 0;

  document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function(e) {
        //... existing code ...

        let selectedQuestion = quizQuestions[e.target.closest('.question').getAttribute('data-question')];
        let selectedOption = parseInt(e.target.value);

        if (selectedOption === selectedQuestion.correctAnswer) {
            points++; // Increment the points
        }

        //... remaining code ...
    });
});

