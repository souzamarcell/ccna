document.addEventListener('DOMContentLoaded', () => {
  let selectedBank = null;
  let questions = [];
  let currentQuestion = 0;
  let score = 0;
  let wrong = 0;
  let selectedBankFunction = null;

  const bank1 = 'questions01'; // ou dinamicamente
  const total = window['loadQuestions01']
    ? window['loadQuestions01']().length
    : 0;
  const countEl = document.getElementById(`count-${bank1}`);
  if (countEl) countEl.textContent = total;

  const bank2 = 'questions02'; // ou dinamicamente
  const total2 = window['loadQuestions02']
    ? window['loadQuestions02']().length
    : 0;
  const countE2 = document.getElementById(`count-${bank2}`);
  if (countE2) countE2.textContent = total2;

  const bankCards = document.querySelectorAll('[data-bank]');
  const accuracyEl = document.getElementById('accuracy');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const startScreen = document.getElementById('start-screen');
  const quizContainer = document.getElementById('quiz-container');
  const resultEl = document.getElementById('result');
  const scoreText = document.getElementById('scoreText');
  const statusPanel = document.getElementById('statusPanel');
  const questionNumberEl = document.getElementById('questionNumber');
  const correctCountEl = document.getElementById('correctCount');
  const wrongCountEl = document.getElementById('wrongCount');
  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  const clueText = document.getElementById('clueText');

  startBtn.disabled = true; // desabilita por padrão

  // 🔹 Seleção do banco de perguntas
  document.querySelectorAll('.selectBank').forEach((card) => {
    card.addEventListener('click', () => {
      // Remove highlight dos outros cards
      document
        .querySelectorAll('.selectBank')
        .forEach((c) => c.classList.remove('bg-blue-700'));
      card.classList.add('bg-blue-700');

      // Salva o banco selecionado
      selectedBank = card.getAttribute('data-bank');

      // Remover script antigo
      const oldScript = document.getElementById('dynamicQuestions');
      if (oldScript) oldScript.remove();

      // Adicionar script novo
      const script = document.createElement('script');
      script.src = `./${selectedBank}.js`;
      script.id = 'dynamicQuestions';
      script.onload = () => {
        const functionName =
          'load' + selectedBank.charAt(0).toUpperCase() + selectedBank.slice(1);

        if (typeof window[functionName] === 'function') {
          questions = window[functionName]();
          populateQuestionCountOptions();

          startBtn.disabled = false;
          startBtn.classList.remove('opacity-50', 'cursor-not-allowed');

          console.log('Banco carregado:', questions.length);
        } else {
          console.error(`Função ${functionName} não encontrada.`);
        }
      };

      document.body.appendChild(script);
    });
  });

  bankCards.forEach((card) => {
    card.addEventListener('click', () => {
      bankCards.forEach((c) => c.classList.remove('bg-green-600'));
      card.classList.add('bg-green-600');

      selectedBank = card.getAttribute('data-bank');

      const functionName =
        'load' + selectedBank.charAt(0).toUpperCase() + selectedBank.slice(1);

      if (typeof window[functionName] === 'function') {
        questions = window[functionName]();
        populateQuestionCountOptions();
        startBtn.disabled = false;
      } else {
        console.error('Banco não encontrado:', functionName);
      }
    });
  });

  // Função para preencher o select
  function populateQuestionCountOptions() {
    const select = document.getElementById('questionCount');
    select.innerHTML = '';

    if (!questions || questions.length === 0) return;

    for (let i = 10; i <= questions.length; i += 10) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `${i} questões`;
      select.appendChild(option);
    }

    if (questions.length % 10 !== 0) {
      const option = document.createElement('option');
      option.value = questions.length;
      option.textContent = `${questions.length} questões`;
      select.appendChild(option);
    }

    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'Todas';
    select.appendChild(allOption);
  }

  startBtn.addEventListener('click', () => {
    if (!selectedBank) {
      alert('Escolha um banco de perguntas!');
      return;
    }

    if (!questions || questions.length === 0) {
      alert('O banco de perguntas ainda não foi carregado!');
      return;
    }

    // Escolher quantidade
    const qCount = document.getElementById('questionCount').value;
    if (qCount !== 'all') {
      const n = parseInt(qCount);
      questions = shuffleArray(questions).slice(0, n);
    } else {
      questions = shuffleArray(questions);
    }

    startScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    statusPanel.classList.remove('hidden');

    currentQuestion = 0;
    score = 0;
    wrong = 0;
    loadQuestion();
  });

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

  function loadQuestion() {
    answersEl.innerHTML = '';
    clueText.classList.add('hidden');
    clueText.innerHTML = '';

    const q = questions[currentQuestion];
    const shuffledOptions = shuffleArray([...q.options]);

    shuffledOptions.forEach((opt) => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.className =
        'bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 text-sm leading-snug text-left';

      btn.onclick = () => selectAnswer(opt, q.answer);
      answersEl.appendChild(btn);
    });

    questionEl.textContent = q.question;
    updateStatus();
    nextBtn.classList.add('hidden');
  }

  function selectAnswer(selected, correct) {
    const isCorrect = selected === correct;

    if (isCorrect) score++;
    else wrong++;

    updateStatus();

    Array.from(answersEl.children).forEach((btn) => {
      btn.disabled = true;
      if (btn.textContent === correct) btn.classList.add('bg-green-200');
      else if (btn.textContent === selected) btn.classList.add('bg-red-200');
    });

    const current = questions[currentQuestion];

    clueText.innerHTML = `
      <p class="flex items-center gap-2 font-semibold mb-2">
        ${
          isCorrect
            ? `<span class="w-5 h-5 flex items-center justify-center bg-green-600 text-white rounded-full text-xs">✓</span>`
            : `<span class="w-5 h-5 flex items-center justify-center bg-red-600 text-white rounded-full text-xs">✕</span>`
        }
        Resposta correta: ${correct}
      </p>
      <p>Explicação: ${current.clue}</p>
    `;

    clueText.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
  }

  function updateStatus() {
    questionNumberEl.textContent = currentQuestion + 1;
    correctCountEl.textContent = score;
    wrongCountEl.textContent = wrong;

    const totalAnswered = score + wrong;
    const percentage =
      totalAnswered === 0 ? 0 : Math.round((score / totalAnswered) * 100);

    accuracyEl.textContent = percentage + '%';
  }

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
});
