const quizData = [
  {
    question: 'This F1 legend helped develop the Honda NSX',
    options: ['Ayrton Senna', 'Alain Prost', 'Michael Schumacher', 'Nelson Piquet'],
    answer: 'Ayrton Senna',
  },
  {
    question: 'Which of the brands does not belong to Volkswagen?',
    options: ['Bugatti', 'Bentley', 'Audi', 'Porsche'],
    answer: 'Porsche',
  },
  {
    question: 'Which car brand made a famous advertisement with chickens?',
    options: ['BMW', 'Mercedes', 'Opel', 'Ford'],
    answer: 'Mercedes',
  },
  {
    question: 'Which car was mentioned in song Hypnotize by Notorious B.I.G?',
    options: ['Mercedes G', 'Lexus LX', 'Ford F', 'Porsche 911'],
    answer: 'Lexus LX',
  },
  {
    question: 'Which brand does not have a representative office in Kazakhstan?',
    options: [
      'Audi',
      'Cadillac',
      'Volvo',
      'Zeekr',
    ],
    answer: 'Volvo',
  },
  {
    question: 'Pick american brand',
    options: ['Subaru', 'Acura', 'Infiniti', 'Nissan'],
    answer: 'Infiniti',
  },
  {
    question: 'Clarcson, May, Hammond, which show they are from?',
    options: [
      'Tune-up',
      'Top Gear',
      'Car Trash',
      'Derby Time!',
    ],
    answer: 'Top Gear',
  },
  {
    question: 'Who created Volkswagen?',
    options: ['F. Porsche', 'Hitler', 'Schweinsteiger', 'C.Benz'],
    answer: 'Hitler',
  },
  {
    question: 'Which of these is not a car brand?',
    options: [
      'Fork',
      'Opel',
      'Rover',
      'Hummer',
    ],
    answer: 'Fork',
  },
  {
    question: 'What did Soichiro Honda buy after selling the bearing company?',
    options: ['Honda', 'F1 Team', 'Alcohol tank', 'House'],
    answer: 'Alcohol tank',
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();
