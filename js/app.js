const questions = [{
  'question': 'Who was the third President of the United States?',
  'choice1': '  George Washington',
  'choice2': '  Thomas Jefferson',
  'choice3': '  James Monroe',
  'choice4': '  John Adams',
  'answer': '2'
}, {
  'question': 'What is 100 x (42 - 10) / 10?',
  'choice1': '  419',
  'choice2': '  4,100',
  'choice3': '  Pizza',
  'choice4': '  320',
  'answer': '4'
}, {
  'question': 'What is the capital of Peru?',
  'choice1': '  Lima',
  'choice2': '  La Paz',
  'choice3': '  Santiago',
  'choice4': '  Guayaquil',
  'answer': '1'
}, {
  'question': 'What is the longest bone in the human body?',
  'choice1': '  Tibia',
  'choice2': '  Fibula',
  'choice3': '  Femur',
  'choice4': '  Humerus',
  'answer': '3'
}, {
  'question': 'Entomology is the branch of science that studies what?',
  'choice1': '  Animals',
  'choice2': '  Fish',
  'choice3': '  Plants',
  'choice4': '  Insects',
  'answer': '4'
}, {
  'question': 'Who was the first American to travel into space?',
  'choice1': '  Alan Shephard',
  'choice2': '  Neil Armstrong',
  'choice3': '  Buzz Aldrin',
  'choice4': '  John Glenn',
  'answer': '1'
}, {
  'question': 'Who was the first woman to win a Nobel Prize?',
  'choice1': '  Rosalind Franklin',
  'choice2': '  Dorothy Hodgkin',
  'choice3': '  Marie Curie',
  'choice4': '  Mary Somerville',
  'answer': '3'
}, {
  'question': 'What did the crocodile swallow in Peter Pan?',
  'choice1': '  Pillow',
  'choice2': '  Alarm clock',
  'choice3': '  Tinker Bell',
  'choice4': '  Lamp',
  'answer': '2'
}, {
  'question': 'What is the only mammal that cannot jump?',
  'choice1': '  Camel',
  'choice2': '  Bison',
  'choice3': '  Elephant',
  'choice4': '  Rhino',
  'answer': '3'
}, {
  'question': 'What language has the most words?',
  'choice1': '  French',
  'choice2': '  Italian',
  'choice3': '  Russian',
  'choice4': '  English',
  'answer': '4'
},

];
let currentQuestion = 0;
let score = 0;
const container = document.getElementById('quizContainer');
const questionElement = document.getElementById('question');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');
const totalQuestions = questions.length;
const nextButton = document.getElementById('nextQuestion');
const resultContainer = document.getElementById('result');
const nextQuestionButton = $('.nextQuestionButton');


function loadQuestions() {
  $('#start').click(event => {
    event.preventDefault();
    startQuiz();
  })
}
$(loadQuestions);


function loadQuestion(questionIndex) {
  const q = questions[questionIndex];
  $(questionElement).text((questionIndex + 1) + '. ' + q.question);
  $(choice1).text(q.choice1);
  $(choice2).text(q.choice2);
  $(choice3).text(q.choice3);
  $(choice4).text(q.choice4);

}
function loadNextQuestion() {
  $('input[type=radio]:checked').prop('checked', false);
  currentQuestion++;
  if (currentQuestion == totalQuestions - 1) {
    nextQuestionButton.text('Finish');
  }
  if (currentQuestion == totalQuestions) {
    $('.container').hide();
    $('.container-result').show();
    function scoreResult() {
      $('.container-result').show();
      $('.score-result').text('You got ' + score + ' out of 10 right!');
    }
    $(scoreResult);
    return;

  }
  loadQuestion(currentQuestion);
  updateScore();
  $('.solution').hide();
}
$('.next-qtn').click(event => {
  event.preventDefault();
  $(checkAnswer);
})
function updateScore() {
  $('.score').text('Score: ' + score + '/10');
}

function restartQuiz() {
  $('.restart').click(event => {
    event.preventDefault();
    startQuiz();
  })
}
$(restartQuiz);

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  $('.startPage').hide();
  $('.container').show();
  $('.container-result').hide();
  $('.solution').hide();
  nextQuestionButton.text('Next Question');
  loadQuestion(currentQuestion);
  updateScore();
}


function checkAnswer() {
  const selectedChoice = $('input[type=radio]:checked');
  if (!selectedChoice.val()) {
    alert('Please select an answer!');
    return;
  }
  const answer = selectedChoice.val();
  if (questions[currentQuestion].answer == answer) {
    $('.message').html('That is correct!')
    score += 1;
  } else {
    $('.message').html('Sorry, that is incorrect! The answer was' + questions[currentQuestion][`choice${questions[currentQuestion].answer}`])
  }
  $('.solution').show();
  $('.next-qtn').hide();
}

$('.nextQuestionButton').click(event => {
  event.preventDefault();
  loadNextQuestion();
  $('.next-qtn').show();
})