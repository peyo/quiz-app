// On homepage, when a user clicks on next button, display intro.

function startProgram() {
  $("#load-intro").on("click", (event) => {
    loadIntro();
  });
}

// On intro page, display explanations of different intelligence test types AND when user clicks on 
// 'start quiz' button, display questions.

function loadIntro() {
  const introHtml = $(`
    <fieldset>
      <div class="title-content">
        Howard Gardner, the originator of the theory of multiple intelligences, identified seven different types of intelligences. The seven can be summarized as:<br>
          <ul>
              <li><div class="intro-highlights">Verbal/linguistic</div>, e.g. lexical skills, formal speech, verbal debate, creative writing.</li>
              <li><div class="intro-highlights">Body/kinesthetic (movement)</div>, e.g. body language, physical gestures, creative dance, physical exercise, drama.</li>
              <li><div class="intro-highlights">Musical/rhythmic</div>, e.g. music performance, singing, musical composition, rhythmic patterns.</li>
              <li><div class="intro-highlights">Logic/mathematic</div>, e.g. numerical aptitude, problem-solving, deciphering codes, abstract symbols, and formulae.</li>
              <li><div class="intro-highlights">Visual/spatial</div>, e.g. patterns and designs, painting, drawing, active imagination, sculpture, color schemes.</li>
              <li><div class="intro-highlights">Interpersonal (relationships with others)</div>, e.g. person-to-person communication, empathy practices, group projects, collaboration skills, receiving and giving feedback.</li>
              <li><div class="intro-highlights">Intrapersonal (self-understanding and insight)</div>, e.g. thinking strategies, emotional processing, knowing yourself, higher-order reasoning, focusing/concentration.</li><br>
          — Philip Carter, <i>The Complete Book of Intelligence Tests</i><br>
          </ul>
          Creativity and memory are not included in the above seven, but sometimes have been referred to as the eighth and ninth intelligences. The quiz will be a short exploration of verbal, numerical, logical, and creative intelligences.<br><br>Have fun!
      </div>
      <div class="around-the-button">
        <button type="button" id="start-question">Start quiz ></button>
      </div>
    </fieldset>
  `);
  $("main").html(introHtml);
  startQuiz();
}

// On intro page, when a user clicks on start button, display questions.

function startQuiz() {
  $("#start-question").on("click", (event) => {
    displayQuestion();
  });
}

// Display question type, explanation, and question.

function displayQuestion() {
  let question = STORE.questions[STORE.currentQuestion];
  displayQuestionNumberAndScore();
  const questionHtml = $(`
    <div>
      <fieldset>
        <form id="js-questions" class="question-form">
          <div class="question-type">${question.questionType}</div>
          <div class="question-explanation">${question.questionExplanation}</div>
          <div class="question-line">${question.question.text}</div>
          <div class="question-image">${question.question.image}</div>
          <div class="js-choices"></div>
          <div class="around-the-button">
            <button type="submit" class="submit-button">Submit ></button>
            <button type = "button" class="next-question-button">Next ></button>
          </div>
        </form>
        <div class="correct-explanation"></div>
      </fieldset>
    </div>
  `);
$("main").html(questionHtml);
showChoices();
$(".next-question-button").hide();
}

// Display answer choices.

function showChoices()
{
  let question = STORE.questions[STORE.currentQuestion];
  for(let i=0; i<question.choices.length; i++)
  {
    $(".js-choices").append(`
      <input type="radio" name="choices" id="choice${i}" value="${question.choices[i].answerLetter} ${question.choices[i].answerChoice} ${question.choices[i].answerImage}">
      <label for="choice${i}">${question.choices[i].answerLetter} ${question.choices[i].answerChoice} ${question.choices[i].answerImage}</label><br>
    `);
    $(".correct-explanation").append(`
      <span id="js-explanation${i}"></span>
    `);
  }
}

// Display question number and number of correct answers.

function displayQuestionNumberAndScore() {
  const questionAndScoreHtml = $(`
    <div class="top-of-page">
      <h1>Sample Intelligence Test</h1>
      <div class="question-number">Question ${STORE.currentQuestion + 1} of ${STORE.questions.length}</div>
      <div class="score">Correct ${STORE.score}</div>
      <div class="incorrect">Incorrect ${STORE.incorrect}</div><br>
    </div>`);
  $("header").html(questionAndScoreHtml);
}

// Check if the chosen choice is correct/incorrect and display if correct/incorrect and explanation.

function checkSelectedChoice() {
  $("body").on("submit","#js-questions", function(event) {
    
    event.preventDefault();
    let currentQ = STORE.questions[STORE.currentQuestion];
    let selectedChoice = $("input[name=choices]:checked").val();
    
    if (!selectedChoice) {
      alert("Choose an answer.");
      return;
    }

    let id_num = currentQ.choices.findIndex(i => i === selectedChoice);
    let id = "#js-explanation" + ++id_num;
    $("span").removeClass("correct-explanation");
    if (selectedChoice === currentQ.answer.answerLetter + " " + currentQ.answer.answerChoice + " " + currentQ.answer.answerImage) {
      STORE.score++; 
      $(`${id}`).append(`<b><i>Right!</b></i> :)<br><br><span class="answer-explanation-bg">${currentQ.answer.answerImage} ${currentQ.answerExplanation}</span>`);
      $(`${id}`).addClass("correct-explanation");
    }

    else {
      STORE.incorrect++;
      $(`${id}`).append(`<b><i>Wrong!</b></i> :/<br><br><span class="answer-bg">The answer is <b>${currentQ.answer.answerLetter} ${currentQ.answer.answerChoice}.</b></span><br><span class="answer-explanation-bg">${currentQ.answer.answerImage} ${currentQ.answerExplanation}</span>`);
      $(`${id}`).addClass("correct-explanation");
    }

    STORE.currentQuestion++;
    $(".score").text(`Correct ${STORE.score}`);
    $(".incorrect").text(`Incorrect ${STORE.incorrect}`);
    $(".submit-button").hide();
    $("input[type=radio]").attr('disabled', true);
    $(".next-question-button").show();
  });
}

// Display link to more test examples, display that the test is complete and score.

function displayResults() {
  let resultHtml = $(`
    <div class="results">

        <fieldset>
          <div class="title-content">For additional intelligence types, <i>The Complete Book of Intelligence Tests</i> can be found <a href="http://elibrary.bsu.az/books_rax/N_357.pdf">here</a>.</div>
          <div class="final">Your result is <span id="final-score"></span>%.
            <script>
            $(percentage);
            function percentage() {
              let x = Math.trunc(${STORE.score}/7*100);
              if (x >= 1) {
                return document.getElementById("final-score").innerHTML = x;
              }

              else {
                return document.getElementById("final-score").innerHTML = 0;
              }
            }
            </script>
          </div>
          <div class="around-the-button">
            <button type="button" class="restart-button">Restart quiz ></button>
          </div>
        </fieldset>

    </div>
  `);
  STORE.currentQuestion = 0;
  STORE.score = 0;
  STORE.incorrect = 0;
  $("main").html(resultHtml);
}

// Check if end of questions list is reached.

function checkQuestionList() {
  $("body").on("click",".next-question-button", (event) => {
    STORE.currentQuestion === STORE.questions.length?displayResults(): displayQuestion();
  });
}

// Restart quiz and reset question number and correct/incorrect variables.

function restartQuiz() {
  $("body").on("click",".restart-button", (event) => {
    loadIntro();
  });
}

function initiateApp() {
  startProgram();
  checkSelectedChoice();
  checkQuestionList();
  restartQuiz();
}

$(initiateApp);