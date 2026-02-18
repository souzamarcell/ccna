document.addEventListener('DOMContentLoaded', () => {
  let currentQuestion = 0;
  let score = 0;
  let wrong = 0;
  let shuffledQuestions = [];

  const statusPanel = document.getElementById('statusPanel');
  const questionNumberEl = document.getElementById('questionNumber');
  const correctCountEl = document.getElementById('correctCount');
  const wrongCountEl = document.getElementById('wrongCount');

  const startScreen = document.getElementById('start-screen');
  const startBtn = document.getElementById('startBtn');
  const quizContainer = document.getElementById('quiz-container');
  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  const nextBtn = document.getElementById('nextBtn');
  const resultEl = document.getElementById('result');
  const scoreText = document.getElementById('scoreText');
  const restartBtn = document.getElementById('restartBtn');
  const clueText = document.getElementById('clueText');

  // Função de embaralhar
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', nextQuestion);
  restartBtn.addEventListener('click', restartQuiz);

  function startQuiz() {
    const selectedValue = document.getElementById('questionCount').value;

    // Embaralha e seleciona quantidade
    let tempQuestions = [...questions];
    shuffleArray(tempQuestions);

    if (selectedValue === 'all') {
      shuffledQuestions = tempQuestions;
    } else {
      const amount = parseInt(selectedValue);
      shuffledQuestions = tempQuestions.slice(0, amount);
    }

    currentQuestion = 0;
    score = 0;
    wrong = 0;

    startScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    statusPanel.classList.remove('hidden');

    loadQuestion();
  }

  function loadQuestion() {
    resetState();
    const q = shuffledQuestions[currentQuestion];
    questionEl.textContent = q.question;

    const shuffledOptions = [...q.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.className = 'w-full text-left px-4 py-2 border rounded hover:bg-gray-100';
      btn.onclick = () => selectAnswer(option, q.answer);
      answersEl.appendChild(btn);
    });

    updateStatus();
  }

  function resetState() {
    answersEl.innerHTML = '';
    nextBtn.classList.add('hidden');
    clueText.classList.add('hidden');
    clueText.innerHTML = '';
  }

  function selectAnswer(selected, correct) {
    if (selected === correct) {
      score++;
    } else {
      wrong++;
    }

    updateStatus();

    Array.from(answersEl.children).forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.classList.add('bg-green-200');
      } else if (btn.textContent === selected) {
        btn.classList.add('bg-red-200');
      }
    });

    const current = shuffledQuestions[currentQuestion];

    clueText.innerHTML = `
      <p class="text-green-700 font-semibold mb-2">
        Resposta correta: ${correct}
      </p>
      <p>
        Explicação: ${current.clue}
      </p>
    `;
    clueText.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
  }

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < shuffledQuestions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    quizContainer.classList.add('hidden');
    resultEl.classList.remove('hidden');
    scoreText.textContent = `Você acertou ${score} de ${shuffledQuestions.length} questões.`;
  }

  function restartQuiz() {
    resultEl.classList.add('hidden');
    startScreen.classList.remove('hidden');
    statusPanel.classList.add('hidden');
  }

  function updateStatus() {
    questionNumberEl.textContent = currentQuestion + 1;
    correctCountEl.textContent = score;
    wrongCountEl.textContent = wrong;
  }
});
