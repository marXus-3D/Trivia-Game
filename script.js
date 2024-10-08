let questions = [
  {
    question: "Who stole the apple.",
    answers: ["A. George", "B. Jamal", "C. William", "D. Jimmy"],
    correctAnswer: "Jamal",
    cashAmount: 10000,
  },
  {
    question: "What's 9 + 10.",
    answers: ["A. 19", "B. 21", "C. 11", "D. 1"],
    correctAnswer: "21",
    cashAmount: 10000,
  },
  {
    question: "What is the capital of Ethiopia?",
    answers: ["A. Nairobi", "B. Cairo", "C. Addis Ababa", "D. Johannesburg"],
    correctAnswer: "Addis Ababa",
    cashAmount: 100,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["A. Mars", "B. Venus", "C. Jupiter", "D. Saturn"],
    correctAnswer: "Mars",
    cashAmount: 100,
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
    cashAmount: 100,
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
    cashAmount: 100,
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
    cashAmount: 100,
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ["A. Ag", "B. Au", "C. Fe", "D. Cu"],
    correctAnswer: "Au",
    cashAmount: 100,
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
    cashAmount: 100,
  },
  {
    question: "What is the largest country in the world by land area?",
    answers: ["A. China", "B. Russia", "C. Canada", "D. United States"],
    correctAnswer: "Russia",
    cashAmount: 100,
  },
  {
    question: "What is the capital of Australia?",
    answers: ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Brisbane"],
    correctAnswer: "Canberra",
    cashAmount: 1000,
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
    cashAmount: 1000,
  },
  {
    question: "Which classic novel features the character Sherlock Holmes?",
    answers: [
      "A. Pride and Prejudice",
      "B. The Lord of the Rings",
      "C. TAHF",
      "D. THB",
    ],
    correctAnswer: "The Hound of Baskervilles",
    cashAmount: 10000,
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
    cashAmount: 10000,
  },
  {
    question: "What is the largest organ in the human body?",
    answers: ["A. Heart", "B. Liver", "C. Skin", "D. Brain"],
    correctAnswer: "Skin",
    cashAmount: 100,
  },
  {
    question: "What is the longest river in the world?",
    answers: ["A. Nile", "B. Amazon", "C. Mississippi", "D. Yangtze"],
    correctAnswer: "Nile",
    cashAmount: 100,
  },
  {
    question: "Which sport is played on a court with a net?",
    answers: ["A. Soccer", "B. Basketball", "C. Baseball", "D. Tennis"],
    correctAnswer: "Tennis",
    cashAmount: 10000,
  },
  {
    question:
      "What is the name of the popular board game that involves buying and selling properties?",
    answers: ["A. Monopoly", "B. Scrabble", "C. Clue", "D. Risk"],
    correctAnswer: "Monopoly",
    cashAmount: 100,
  },
  {
    question:
      "Markos kaladege min yibalal?",
    answers: ["A. Ayadgim", "B. kebede", "C. Biadeglign", "D. Bayadglign"],
    correctAnswer: "Biadeglign",
    cashAmount: 100,
  },
];
questions = shuffleArray(questions);

// #region
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
  },
  {
    question:
      "What is the smallest integer that can be expressed as the sum of three cubes in two different ways?",
    answers: ["A. 1729", "B. 4104", "C. 1065", "D. 2318"],
    correctAnswer: "729",
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
  },
  {
    question: "In what year did the Berlin Wall fall?",
    answers: ["A. 1989", "B. 1991", "C. 1993", "D. 1995"],
    correctAnswer: "1989",
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
  },
];

const tooManyWrongQuestionsJokes = [
  {
    joke: "I’ve seen people struggle before, but you’re really giving it a new definition. Should we start a new category called ‘Creative Guessing’?",
    loc: "assets/audio/tooManyIncorrect01.mp3",
  },
  {
    joke: "I have to say, your guessing skills are truly… unique. You’re redefining what it means to take a chance!",
    loc: "assets/audio/tooManyIncorrect02.mp3",
  },
  {
    joke: "I’ve seen people get answers wrong before, but you’re turning it into an art form. I might need to start taking notes!",
    loc: "assets/audio/tooManyIncorrect03.mp3",
  },
  {
    joke: "I see you’ve discovered the ‘how not to win a game show’ strategy. You’re really setting a new standard here.",
    loc: "assets/audio/tooManyIncorrect04.mp3",
  },
];
const tooManyCorrectQuestionsJokes = [
  {
    joke: "You’re making me look bad with all these correct answers. I’m going to need a new job if you keep this up!",
    loc: "assets/audio/tooManyCorrect01.mp3",
  },
  {
    joke: "You’re acing every question. Do you have a PhD in trivia or are you just showing off?",
    loc: "assets/audio/tooManyCorrect02.mp3",
  },
  {
    joke: "Are you sure you’re not getting help from a team of trivia nerds? Because you’re making this look way too easy!",
    loc: "assets/audio/tooManyCorrect03.mp3",
  },
];
const littleTimeLeftJokes = [
  {
    joke: "We’re down to the wire—like a cat on a high shelf, it’s getting exciting up here!",
    loc: "assets/audio/timerRunout01.mp3",
  },
  {
    joke: "We're almost out of time—better hurry, or you might just be writing a novel on that answer!",
    loc: "assets/audio/timerRunout02.mp3",
  },
  {
    joke: "The clock’s ticking down! Hurry up before your answer turns into a dinosaur fossil!",
    loc: "assets/audio/timerRunout03.mp3",
  },
  {
    joke: "Time’s almost up! And if you don’t get this right, well, let’s just say the replay will be entertaining!",
    loc: "assets/audio/timerRunout04.mp3",
  },
  {
    joke: "We’re almost out of time, and if you don’t hurry, we might need to call in a rescue team!",
    loc: "assets/audio/timerRunout05.mp3",
  },
];

const winningJokes = [
  {
    joke: "Congratulations! You’ve won the game and officially earned bragging rights for the next century!",
    loc: "assets/audio/winJoke01.mp3",
  },
  {
    joke: "You did it! You’ve won a lot of money and possibly made everyone else question their life choices!",
    loc: "assets/audio/winJoke02.mp3",
  },
  {
    joke: "You have earned the million dollars and more importantly, made everyone watching feel stupid",
    loc: "assets/audio/winJoke03.mp3",
  },
  {
    joke: "You did it! And with that I have to run out of here because I don't have the cash",
    loc: "assets/audio/winJoke04.mp3",
  },
];

const losingJokes = [
  {
    joke: "Looks like you didn’t win—don’t worry, you’re still the best at losing with style!",
    loc: "assets/audio/loseJoke02.mp3",
  },
  {
    joke: "You didn’t win, but don’t worry, you’ve still achieved the ‘almost’ status with flying colors!",
    loc: "assets/audio/loseJoke01.mp3",
  },
  {
    joke: "You might have lost a million but you will also get broken dreams to go.",
    loc: "assets/audio/loseJoke04.mp3",
  },
  {
    joke: "You didn't win but atleast we all know now that you aren't special.",
    loc: "assets/audio/loseJoke03.mp3",
  },
];
//#end region

// doubleOrNothhingQuestions = shuffleArray(doubleOrNothhingQuestions);

var currentIndex = 0,
  userAnswers = 0,
  currentCash = 100;

const question = document.createElement("div");
question.classList += "question-container";
const clock = $(".clock");
let clk;
var seconds = 30;
const message = $(".message");
const game = document.querySelector(".game");
const chatSection = $(".chat-view");
const money = $(".money");
game.appendChild(question);

//getting all audio sources each are different source
const audioSource = document.getElementById("audSource");
const sfxSource = document.getElementById("sfxSource");
const musicSource = document.getElementById("musicSource");

//streaks
let winStreak = false,
  loseStreak = false;

//total ai questions
let aiQuestions = 3;

//tracking timerJoke
let timerJokeBool = false,
  legacyAudio = $("#audioToggle").is(":checked"),
  legacyArt = $("#artToggle").is(":checked");

//called when the webpage loads
window.onload = () => {
  $(".moneyDisp").slideUp();
  $(".start-menu").animate({ bottom: "50px" }, 1500, "swing");
  $(".lifeline, .clock").hide();
  playMessage({
    joke: "Welcome to IZZY Trivia. Press Play to start.",
    loc: "assets/audio/opening.mp3",
  });
  toggleArt();
};

//adding pixel before the file extension for the legacy audio
function addPixelToFilePath(filePath) {
  const extensionIndex = filePath.lastIndexOf(".mp3");

  if (extensionIndex !== -1) {
    return (
      filePath.substring(0, extensionIndex) +
      "pixel" +
      filePath.substring(extensionIndex)
    );
  }

  return filePath;
}

//play joke and messages
function playMessage(msg) {
  $(".messageBox").show();
  setTimeout(() => {
    $(".messageBox").fadeOut();
  }, 3000);
  message.text(msg.joke);
  audioSource.pause();

  if (legacyAudio) audioSource.src = msg.loc;
  else audioSource.src = addPixelToFilePath(msg.loc);

  audioSource.playbackRate = 1.5;
  audioSource.volume = 0.5;

  audioSource.play();
}
//play sound effects
function playSfx(loc) {
  sfxSource.pause();

  sfxSource.src = loc;
  sfxSource.volume = 0.4;

  // audioSource.playbackRate = 1.5;

  sfxSource.play();
}
function playMusic(loc) {
  musicSource.pause();

  musicSource.src = loc;
  musicSource.volume = 0.1;

  musicSource.play();
}

//exit button event listener for ai chat
$(".exit").click(function (e) {
  e.preventDefault();
  $(".chat-pop").hide();
});
//event listener for start menu play button
$(".play").click(function (e) {
  e.preventDefault();
  playSfx("assets/audio/answer select.mp3");
  //using a callback function to wait for the animation to finish
  $(".start-menu").slideUp("fast", "swing", () => {
    $(this).parent().hide();
    clk = setInterval(clockCount, 1000);
    addQuestion();
    $(".lifeline, .clock").show();
    $(".moneyDisp").slideDown();
  });
  playMessage({ joke: "Okay let' start with the first question.", loc:"assets/audio/lettuce.mp3" });
  // $(this).hide();
});

//lifeline event listener
$(".lifeline button").click(function (e) {
  e.preventDefault();
  playSfx("assets/audio/life line select.mp3");
  $(this).css("background-image", 'url("assets/lifeDisable.png")');
  $(this).prop("disabled", true);

  if ($(this).hasClass("aiBtn")) {
    $(".chat-pop").show(200);
  }
  if ($(this).hasClass("rmv")) {
    const otherButtons = document.querySelectorAll(
      `.ansBtn[val]:not([val="${questions[currentIndex].correctAnswer}"])`
    );
    const idx1 = Math.floor(Math.random() * 3);
    let idx2;
    //recursivley check for a different index
    do {
      idx2 = Math.floor(Math.random() * 3);
    } while (idx2 === idx1);
    otherButtons[idx1].style.opacity = "0";
    otherButtons[idx2].style.opacity = "0";
  }
});

//event listiner for the legacy toggles
$("#audioToggle").on("change", () => {
  if ($("#audioToggle").is(":checked")) {
    legacyAudio = true;
  } else {
    legacyAudio = false;
  }
});
$("#artToggle").on("change", () => {
  toggleArt();
});

function toggleArt() {
  if ($("#artToggle").is(":checked")) {
    $(".gameSection").css({
      "background-image": "url(assets/background.png)",
    });
    $(".clock").css({
      'left':' 36.2%',
      'top': '13.5%',
    });
    $(".moneyDisp").css({
      'background-image': "url('assets/moneyBack.png')",
      'color': 'gold',
    });
    $(".messageBox").css({
      'left': '54%',
      'top': '16%',
    });
    legacyArt = true;
  } else {
    $(".gameSection").css({
      "background-image": "url(assets/background-new.png)",
    });
    $(".clock").css({
      'left':' 20%',
      'top': '10%',
    });
    $(".moneyDisp, .moneyDisp h3").css({
      'background-image': 'none',
      'color': 'white',
    });
    $(".messageBox").css({
      'left': '45%',
      'top': '20%',
    });
    legacyArt = false;
  }
}

///checks for answer and for win/lose streaks
function checkAnswer(answer) {
  if (answer === questions[currentIndex].correctAnswer) {
    playSfx("assets/audio/answer correct.mp3");
    ++userAnswers;
    editMoney(questions[currentIndex].cashAmount);

    if (
      !winStreak &&
      userAnswers >= (currentIndex*0.6) &&
      currentIndex > questions.length / 2
    ) {
      winStreak = true;
      playMessage(
        tooManyCorrectQuestionsJokes[
          Math.floor(Math.random() * tooManyCorrectQuestionsJokes.length)
        ]
      );
    }
  } else {
    playSfx("assets/audio/lose.mp3");
    editMoney(-1 * (questions[currentIndex].cashAmount / 2));

    if (
      !loseStreak &&
      userAnswers <= currentIndex / 2 &&
      currentIndex > questions.length / 2
    ) {
      loseStreak = true;
      playMessage(
        tooManyWrongQuestionsJokes[
          Math.floor(Math.random() * tooManyWrongQuestionsJokes.length)
        ]
      );
    }
  }
  newQuestion();
}

//checks if the questions are done if not new question
function newQuestion() {
  $(".chat-pop").hide();
  if (++currentIndex == questions.length) {
    // alert(
    //   `Congratulations you finished You answered ${userAnswers} out of ${questions.length} questions`
    // );
    checkWin();
  } else {
    addQuestion();
  }
}

//checks if the player won the game or not
function checkWin() {
  clearInterval(clk);
  $(".moneyDisp").slideUp();
  if (userAnswers > questions.length * 0.65) {
    playSfx("assets/audio/win.mp3");
    $(".question-container").hide();
    $(".win-screen h2").addClass("win");
    $(".win-screen h2").text(`You Win ${currentCash + 10000}`);
    $(".win-screen p").text(
      `You Answered ${userAnswers} out of ${questions.length} questions.`
    );
    $(".win-screen").show();

    playMessage(winningJokes[Math.floor(Math.random() * winningJokes.length)]);

    // message.text(
    //   winningJokes[Math.floor(Math.random() * winningJokes.length)].joke
    // );
  } else {
    playSfx("assets/audio/lose legacy.mp3");
    $(".question-container").hide();
    $(".win-screen h2").text("You Lose");
    $(".win-screen p").text(
      `You Answered ${userAnswers} out of ${questions.length} questions.`
    );
    $(".win-screen").show();
    playMessage(losingJokes[Math.floor(Math.random() * losingJokes.length)]);
  }
}

//adds the question to the HTML
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

  playMusic("assets/audio/QUESTION TRACK 60 SEC.mp3");

  //event listener for each answer
  $(".ansBtn").click(function (e) {
    e.preventDefault();
    checkAnswer($(this).text().slice(3));
  });

  seconds = 30;
  timerJokeBool = false;
}

//shuffling the questios to get different one each time
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//function to check, count the clock
function clockCount() {
  //check to play the timer joke
  if (
    !timerJokeBool &&
    seconds < Math.floor(Math.random() * (14 - 6 + 1)) + 6
  ) {
    timerJoke();
    timerJokeBool = true;
  }

  //timer runout
  if (seconds < 1) {
    playSfx("assets/audio/wrong answer.mp3");
    editMoney(-100);
    newQuestion();
  } else if (seconds < 11) {
    //adding 0 to 9 and below
    clock.text(`0${--seconds}`);
  } else clock.text(--seconds);
}

function timerJoke() {
  playMessage(
    littleTimeLeftJokes[Math.floor(Math.random() * littleTimeLeftJokes.length)]
  );
}

//event listener to check for chats with the ai
$("#chat-form").on("submit", (e) => {
  e.preventDefault();
  if (aiQuestions-- > 0) {
    chatSection.append(
      `
        <div class="chat-user">
            <p>
              ${$(".chat-box").val()}
            </p>
          </div>
        `
    );

    callGemniApi($(".chat-box").val());
  } else {
    chatSection.append(
      `
      <div class="chat-user">
          <p>
            You're out of questions!
          </p>
        </div>
      `
    );
    setTimeout(2000, () => {
      $(".chat-pop").hide();
    });
  }
});

//calling and adding the gemeni api
function callGemniApi(prompt) {
  fetch(
    "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": `AIzaSyCaCvcbS2zKq7MvWmkVfdZbK4qiVv1Pik0`,
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text:
                  "I'm going to ask you a question for a game show and i want you to answer me in html format as a p tag " +
                  prompt,
              },
            ],
          },
        ],
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      chatSection.append(
        `
        <div class="chat-ai">
          ${data.candidates[0].content.parts[0].text}
        </div>
        `
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

//editing the user's money
function editMoney(amount) {
  currentCash += amount;
  if (currentCash < 0) currentCash = 0;
  money.text(currentCash);
}
