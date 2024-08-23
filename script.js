let questions = [
  {
    question: "Who stole the apple.",
    answers: ["A. George", "B. Jamal", "C. William", "D. Tyrone"],
    correctAnswer: "Jamal",
  },
  {
    question: "What is the capital of Ethiopia?",
    answers: ["A. Nairobi", "B. Cairo", "C. Addis Ababa", "D. Johannesburg"],
    correctAnswer: "Addis Ababa",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["A. Mars", "B. Venus", "C. Jupiter", "D. Saturn"],
    correctAnswer: "Mars",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      "A. Leonardo da Vinci",
      "B. Michelangelo",
      "C. Raphael",
      "D. Rembrandt",
    ],
    correctAnswer: "Leonardo da Vinci",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "What is the largest ocean in the world?",
    answers: [
      "A. Atlantic Ocean",
      "B. Pacific Ocean",
      "C. Indian Ocean",
      "D. Arctic Ocean",
    ],
    correctAnswer: "Pacific Ocean",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "Who wrote the famous play Romeo and Juliet?",
    answers: [
      "A. William Shakespeare",
      "B. Jane Austen",
      "C. Charles Dickens",
      "D. Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ["A. Ag", "B. Au", "C. Fe", "D. Cu"],
    correctAnswer: "Au",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "Who was the first person to walk on the moon?",
    answers: [
      "A. Buzz Aldrin",
      "B. Neil Armstrong",
      "C. John Glenn",
      "D. Yuri Gagarin",
    ],
    correctAnswer: "Neil Armstrong",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "What is the largest country in the world by land area?",
    answers: ["A. China", "B. Russia", "C. Canada", "D. United States"],
    correctAnswer: "Russia",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "What is the capital of Australia?",
    answers: ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Brisbane"],
    correctAnswer: "Canberra",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "Who painted the Starry Night?",
    answers: [
      "A. Vincent van Gogh",
      "B. Pablo Picasso",
      "C. Claude Monet",
      "D. Leonardo da Vinci",
    ],
    correctAnswer: "Vincent van Gogh",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "Which classic novel features the character Sherlock Holmes?",
    answers: [
      "A. Pride and Prejudice",
      "B. The Lord of the Rings",
      "C. The Adventures of Huckleberry Finn",
      "D. The Hound of Baskervilles",
    ],
    correctAnswer: "The Hound of Baskervilles",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: 'What is the name of the main character in the novel "1984"?',
    answers: [
      "A. Winston Smith",
      "B. John Snow",
      "C. Jane Eyre",
      "D. Holden Caulfield",
    ],
    correctAnswer: "Winston Smith",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "What is the largest organ in the human body?",
    answers: ["A. Heart", "B. Liver", "C. Skin", "D. Brain"],
    correctAnswer: "Skin",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "What is the longest river in the world?",
    answers: ["A. Nile", "B. Amazon", "C. Mississippi", "D. Yangtze"],
    correctAnswer: "Nile",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "Which country is the largest by land area?",
    answers: ["A. China", "B. Russia", "C. Canada", "D. United States"],
    correctAnswer: "Russia",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "Which sport is played on a court with a net?",
    answers: ["A. Soccer", "B. Basketball", "C. Baseball", "D. Tennis"],
    correctAnswer: "Tennis",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question:
      "What is the name of the popular board game that involves buying and selling properties?",
    answers: ["A. Monopoly", "B. Scrabble", "C. Clue", "D. Risk"],
    correctAnswer: "Monopoly",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
];
questions = shuffleArray(questions);
let doubleOrNothhingQuestions = [
  {
    question: "What is the name of the largest known prime number?",
    answers: [
      "A. Mersenne Prime",
      "B. Fermat Prime",
      "C. Twin Prime",
      "D. M8257582",
    ],
    correctAnswer: "M8257582",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "What is the largest known perfect number?",
    answers: [
      "A. 2^82589933 - 1",
      "B. 2^77232917 - 1",
      "C. 2^43112609 - 1",
      "D. 2^1257787 - 1",
    ],
    correctAnswer: "2^82589933 - 1",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question:
      "What is the smallest integer that can be expressed as the sum of three cubes in two different ways?",
    answers: ["A. 1729", "B. 4104", "C. 1065", "D. 2318"],
    correctAnswer: "729",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "Who was the first woman to win the Nobel Prize in Physics?",
    answers: [
      "A. Marie Curie",
      "B. Rosalind Franklin",
      "C. Ada Lovelace",
      "D. Sally Ride",
    ],
    correctAnswer: "Marie Curie",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "Which U.S. president was assassinated on November 22, 1963?",
    answers: [
      "A. John F. Kennedy",
      "B. Abraham Lincoln",
      "C. Franklin D. Roosevelt",
      "D. Lyndon B. Johnson",
    ],
    correctAnswer: "John F. Kennedy",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: "In what year did the Berlin Wall fall?",
    answers: ["A. 1989", "B. 1991", "C. 1993", "D. 1995"],
    correctAnswer: "1989",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
  {
    question: 'Who wrote the novel "To Kill a Mockingbird"?',
    answers: [
      "A. Harper Lee",
      "B. Ernest Hemingway",
      "C. J.K. Rowling",
      "D. Mark Twain",
    ],
    correctAnswer: "Harper Lee",
    lifelines: ["50/50", "Ask the Audience", "Phone a Friend"],
  },
];

const tooManyWrongQuestionsJokes = [
  {
    joke: "",
  }
];
const littleTimeLeftJokes = [
  {
    joke: "We’re down to the wire—like a cat on a high shelf, it’s getting exciting up here!",
  },
  {
    joke: "We're almost out of time—better hurry, or you might just be writing a novel on that answer!",
  },
  {
    joke: "The clock’s ticking down! Hurry up before your answer turns into a dinosaur fossil!",
  },
  {
    joke: "Time’s almost up! And if you don’t get this right, well, let’s just say the replay will be entertaining!",
  },
  {
    joke: "We’re almost out of time, and if you don’t hurry, we might need to call in a rescue team!",
  },
];

const winningJokes = [
  {
    joke: "Congratulations! You’ve won the game and officially earned bragging rights for the next century!",
  },
  {
    joke: "You did it! You’ve won a lot of money and possibly made everyone else question their life choices!",
  },
];

const losingJokes = [
  {
    joke: "Looks like you didn’t win—don’t worry, you’re still the best at losing with style!",
  },
  {
    joke: "You didn’t win, but don’t worry, you’ve still achieved the ‘almost’ status with flying colors!",
  },
];

$('.lifeline button').click(function (e) { 
  e.preventDefault();
  $(this).css('background-image', 'url("assets/lifeDisable.png")');
  $(this).prop('disabled', true);

  if($(this).hasClass('aiBtn')){
    $(".chat-pop").show(200);
  }
  if($(this).hasClass('rmv')){
    const otherButtons = $(`.ansBtn[val]:not([val="${questions[currentIndex].correctAnswer}"])`);
    console.log(otherButtons[2]);
    otherButtons.hide();
  }
});

doubleOrNothhingQuestions = shuffleArray(doubleOrNothhingQuestions);
var currentIndex = 0,
  userAnswers = 0,
  currentCash = 100;
const question = document.createElement("div");
question.classList += "question-container";
const clock = $(".clock");
var seconds = 30;
const message = $(".message");
const game = document.querySelector(".game");
game.appendChild(question);

let timerJokeBool = false;

window.onload = () => {
  // $(".start-menu").slideUp("fast", "swing");
  // $(".start-menu").slideDown("fast", "swing");
  $(".start-menu").animate({bottom: "50px"}, 1500, "swing");
  $('.lifeline, .clock').hide();
  // alert('loaded');
};

$('.exit').click(function (e) { 
  e.preventDefault();
  $('.chat-pop').hide();
});

$(".play").click(function (e) {
  e.preventDefault();
  $(".start-menu").slideUp("fast", "swing", () => {
    $(this).parent().hide();
    setInterval(clockCount, 1000);
    addQuestion();
    $('.lifeline, .clock').show();
    message.text("Okay let' start with the first question.");
  });
  // $(this).hide();
});

function checkAnswer(answer) {
  if (answer === questions[currentIndex].correctAnswer) {
    alert("Correct Answer");
    ++userAnswers;
    currentCash *= 5;
  } else {
    alert("Incorrect Answer");
    currentCash -= currentCash / 5;
  }
  newQuestion();
}

function newQuestion() {
  $(".money").text("$" + currentCash);
  if (++currentIndex == questions.length) {
    alert(
      `Congratulations you finished You answered ${userAnswers} out of ${questions.length} questions`
    );
    checkWin();
  } else {
    // alert('New Question');
    addQuestion();
  }
}

function checkWin() {
  seconds = 0;
  if (userAnswers > questions.length * 0.65) {
    $(".question-container").hide();
    $(".win-screen p").text(
      `You Answered ${userAnswers} out of ${questions.length} questions.`
    );
    $(".win-screen").show();

    message.text(
      winningJokes[Math.floor(Math.random() * winningJokes.length)].joke
    );
  } else {
    $(".question-container").hide();
    $(".win-screen h2").text("You Lose");
    $(".win-screen p").text(
      `You Answered ${userAnswers} out of ${questions.length} questions.`
    );
    $(".win-screen").show();
    message.text(
      losingJokes[Math.floor(Math.random() * losingJokes.length)].joke
    );
  }
}

function addQuestion() {
  let ans = "";
  questions[currentIndex].answers.forEach((item) => {
    ans += `<button class="ansBtn" val="${item.slice(3)}">${item}</button>`;
  });
  question.innerHTML = `
    <div class=question>
            <p>${questions[currentIndex].question}</p>
        </div>
        <div class=answers>
            ${ans}
        </div>
    `;

  $(".ansBtn").click(function (e) {
    e.preventDefault();
    checkAnswer($(this).text().slice(3));
  });

  seconds = 30;
  timerJokeBool = false;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function clockCount() {
  if (
    !timerJokeBool &&
    seconds < Math.floor(Math.random() * (14 - 6 + 1)) + 6
  ) {
    timerJoke();
    timerJokeBool = true;
  }

  if (seconds < 1) {
    currentCash -= currentCash / 5;
    newQuestion();
  } else if (seconds < 11) {
    clock.text(`0${--seconds}`);
  } else clock.text(--seconds);
}

function timerJoke() {
  message.text(
    littleTimeLeftJokes[Math.floor(Math.random() * littleTimeLeftJokes.length)]
      .joke
  );
}
