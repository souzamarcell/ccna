document.addEventListener('DOMContentLoaded', () => {
  let selectedBank = null;
  let questions = [];
  let currentQuestion = 0;
  let score = 0;
  let wrong = 0;
  let totalQuestions = 0;

  const bankCards = document.querySelectorAll('.selectBank');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');

  const startScreen = document.getElementById('start-screen');
  const quizContainer = document.getElementById('quiz-container');
  const resultEl = document.getElementById('result');
  const statusPanel = document.getElementById('statusPanel');

  const scoreText = document.getElementById('scoreText');
  const questionNumberEl = document.getElementById('questionNumber');
  const correctCountEl = document.getElementById('correctCount');
  const wrongCountEl = document.getElementById('wrongCount');
  const accuracyEl = document.getElementById('accuracy');

  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  const clueText = document.getElementById('clueText');
  const questionCountSelect = document.getElementById('questionCount');

  startBtn.disabled = true;

  // =========================
  // CONTAGEM DE QUESTÕES POR BANCO
  // =========================
  updateBankCount('questions01', 'loadQuestions01');
  updateBankCount('questions02', 'loadQuestions02');
  updateBankCount('questions03', 'loadQuestions03');
  updateBankCount('questions04', 'loadQuestions04');

  function updateBankCount(bankName, functionName) {
    const countEl = document.getElementById(`count-${bankName}`);
    if (typeof window[functionName] === 'function') {
      const total = window[functionName]().length;
      if (countEl) countEl.textContent = total;
    }
  }

  // =========================
  // SELEÇÃO DE BANCO
  // =========================
  bankCards.forEach((card) => {
    card.addEventListener('click', () => {
      bankCards.forEach((c) =>
        c.classList.remove('bg-green-600', 'bg-blue-700')
      );

      card.classList.add('bg-green-600');

      selectedBank = card.getAttribute('data-bank');

      const functionName =
        'load' + selectedBank.charAt(0).toUpperCase() + selectedBank.slice(1);

      if (typeof window[functionName] === 'function') {
        questions = window[functionName]();
        populateQuestionCountOptions();
        startBtn.disabled = false;
      } else {
        console.error('Função não encontrada:', functionName);
      }
    });
  });

  // =========================
  // PREENCHER SELECT DE QUANTIDADE
  // =========================
  function populateQuestionCountOptions() {
    questionCountSelect.innerHTML = '';

    if (!questions || questions.length === 0) return;

    for (let i = 10; i <= questions.length; i += 10) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `${i} questões`;
      questionCountSelect.appendChild(option);
    }

    if (questions.length % 10 !== 0) {
      const option = document.createElement('option');
      option.value = questions.length;
      option.textContent = `${questions.length} questões`;
      questionCountSelect.appendChild(option);
    }

    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'Todas';
    questionCountSelect.appendChild(allOption);
  }

  // =========================
  // INICIAR QUIZ
  // =========================
  startBtn.addEventListener('click', () => {
    if (!selectedBank || questions.length === 0) {
      alert('Escolha um banco de perguntas!');
      return;
    }

    const qCount = questionCountSelect.value;

    if (qCount !== 'all') {
      const n = parseInt(qCount);
      questions = shuffleArray(questions).slice(0, n);
    } else {
      questions = shuffleArray(questions);
    }
    totalQuestions = questions.length; // <-- aqui definimos o total

    startScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    statusPanel.classList.remove('hidden');

    currentQuestion = 0;
    score = 0;
    wrong = 0;

    resetTimer(); // reseta o cronômetro
    startTimer(); // inicia o cronômetro

    loadQuestion();
  });

  // =========================
  // CARREGAR QUESTÃO
  // =========================
  function loadQuestion() {
    answersEl.innerHTML = '';
    clueText.classList.add('hidden');
    clueText.innerHTML = '';
    nextBtn.classList.add('hidden');

    const q = questions[currentQuestion];
    const shuffledOptions = shuffleArray([...q.options]);

    questionEl.textContent = q.question;

    shuffledOptions.forEach((opt) => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.className =
        'bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 text-sm text-left';

      btn.onclick = () => selectAnswer(opt, q.answer);

      answersEl.appendChild(btn);
    });

    updateStatus();
  }

  // =========================
  // SELECIONAR RESPOSTA
  // =========================
  function selectAnswer(selected, correct) {
    const isCorrect = selected === correct;

    if (isCorrect) score++;
    else wrong++;

    Array.from(answersEl.children).forEach((btn) => {
      btn.disabled = true;

      if (btn.textContent === correct) btn.classList.add('bg-green-200');
      else if (btn.textContent === selected) btn.classList.add('bg-red-200');
    });

    const current = questions[currentQuestion];

    clueText.innerHTML = `
      <p class="font-semibold mb-2">
        ${isCorrect ? '✓ Correto!' : '✕ Errado!'}
      </p>
      <p>Resposta correta: ${correct}</p>
      <p class="mt-2">Explicação: ${current.clue}</p>
    `;

    clueText.classList.remove('hidden');
    nextBtn.classList.remove('hidden');

    updateStatus();
  }

  // =========================
  // PRÓXIMA QUESTÃO
  // =========================
  nextBtn.addEventListener('click', () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      quizContainer.classList.add('hidden');
      resultEl.classList.remove('hidden');

      scoreText.textContent = `Você acertou ${score} de ${questions.length} questões.`;
    }
  });

  // =========================
  // REINICIAR
  // =========================
  restartBtn.addEventListener('click', () => {
    resultEl.classList.add('hidden');
    startScreen.classList.remove('hidden');
    statusPanel.classList.add('hidden');

    currentQuestion = 0;
    score = 0;
    wrong = 0;
    answersEl.innerHTML = '';
    clueText.innerHTML = '';
  });

  // =========================
  // ATUALIZAR STATUS
  // =========================
  function updateStatus() {
    questionNumberEl.textContent = currentQuestion + 1;
    correctCountEl.textContent = score;
    wrongCountEl.textContent = wrong;

    // Atualiza total dinâmico
    const questionTotalEl = document.getElementById('questionTotal');
    if (questionTotalEl) questionTotalEl.textContent = totalQuestions;

    const totalAnswered = score + wrong;
    const percentage =
      totalAnswered === 0 ? 0 : Math.round((score / totalAnswered) * 100);

    accuracyEl.textContent = percentage + '%';
  }

  // =========================
  // EMBARALHAR ARRAY
  // =========================
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
});

// =========================
// CRONÔMETRO
// =========================
let timerInterval;
const timerEl = document.getElementById('timer');
let secondsElapsed = 0;

function startTimer() {
  timerEl.textContent = formatTime(secondsElapsed);
  timerInterval = setInterval(() => {
    secondsElapsed++;
    timerEl.textContent = formatTime(secondsElapsed);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  secondsElapsed = 0;
  timerEl.textContent = formatTime(secondsElapsed);
}

function formatTime(sec) {
  const h = String(Math.floor(sec / 3600)).padStart(2, '0');
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}
