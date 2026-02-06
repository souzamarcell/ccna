document.addEventListener("DOMContentLoaded", () => {
  let currentQuestion = 0;
  let score = 0;

  const startScreen = document.getElementById("start-screen");
  const startBtn = document.getElementById("startBtn");

  const quizContainer = document.getElementById("quiz-container");
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("nextBtn");

  const resultEl = document.getElementById("result");
  const scoreText = document.getElementById("scoreText");
  const restartBtn = document.getElementById("restartBtn");

  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", nextQuestion);
  restartBtn.addEventListener("click", restartQuiz);

  function startQuiz() {
    startScreen.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    currentQuestion = 0;
    score = 0;
    loadQuestion();
  }

  function loadQuestion() {
    resetState();
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.className = "w-full text-left px-4 py-2 border rounded hover:bg-gray-100";
      btn.onclick = () => selectAnswer(option, q.answer);
      answersEl.appendChild(btn);
    });
  }

  function resetState() {
    answersEl.innerHTML = "";
    nextBtn.classList.add("hidden");
  }

  function selectAnswer(selected, correct) {
    if (selected === correct) {
      score++;
    }

    Array.from(answersEl.children).forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.classList.add("bg-green-200");
      } else if (btn.textContent === selected) {
        btn.classList.add("bg-red-200");
      }
    });

    nextBtn.classList.remove("hidden");
  }

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    quizContainer.classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreText.textContent = `Você acertou ${score} de ${questions.length} questões.`;
  }

  function restartQuiz() {
    resultEl.classList.add("hidden");
    startScreen.classList.remove("hidden");
  }
});
