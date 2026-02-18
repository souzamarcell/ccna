document.addEventListener('DOMContentLoaded', () => {
  let selectedBank = null;
  let questions = [];
  let currentQuestion = 0;
  let score = 0;
  let wrong = 0;
  let selectedBankFunction = null;

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
        selectedBankFunction = window[functionName];

        if (typeof selectedBankFunction === 'function') {
          questions = selectedBankFunction();
          populateQuestionCountOptions();
          startBtn.disabled = false; // habilita iniciar
        } else {
          console.error(`Função ${functionName} não encontrada no banco`);
        }
      };
      document.body.appendChild(script);
    });
  });

  // Função para preencher o select de forma dinâmica
  function populateQuestionCountOptions() {
    const select = document.getElementById('questionCount');
    select.innerHTML = ''; // limpa opções antigas

    if (!questions || questions.length === 0) return;

    // Adicionar opções de 10 em 10
    for (let i = 10; i <= questions.length; i += 10) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `${i} questões`;
      select.appendChild(option);
    }

    // Se o total não for múltiplo de 10, adiciona a última opção
    if (questions.length % 10 !== 0 && questions.length % 10 !== 0) {
      const option = document.createElement('option');
      option.value = questions.length;
      option.textContent = `${questions.length} questões`;
      select.appendChild(option);
    }

    // Sempre adicionar a opção "Todas"
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
        'w-full text-left px-4 py-2 border rounded hover:bg-gray-100';
      btn.onclick = () => selectAnswer(opt, q.answer);
      answersEl.appendChild(btn);
    });

    questionEl.textContent = q.question;
    updateStatus();
    nextBtn.classList.add('hidden');
  }

  function selectAnswer(selected, correct) {
    if (selected === correct) score++;
    else wrong++;

    updateStatus();

    Array.from(answersEl.children).forEach((btn) => {
      btn.disabled = true;
      if (btn.textContent === correct) btn.classList.add('bg-green-200');
      else if (btn.textContent === selected) btn.classList.add('bg-red-200');
    });

    const current = questions[currentQuestion];
    clueText.innerHTML = `
      <p class="text-green-700 font-semibold mb-2">Resposta correta: ${correct}</p>
      <p>Explicação: ${current.clue}</p>
    `;
    clueText.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
  }

  function updateStatus() {
    questionNumberEl.textContent = currentQuestion + 1;
    correctCountEl.textContent = score;
    wrongCountEl.textContent = wrong;
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
