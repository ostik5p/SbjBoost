import { tests } from "../data/tests.js?v=5";
import { addTestResult } from "./score.js?v=5";
import { showSection } from "./router.js?v=5";
import { renderProgress } from "../ui/progress.js?v=5";

// 📦 Контейнер
const container = document.getElementById("tests-container");

// 📊 Стейт тесту
let currentQuestion = 0;
let score = 0;
let currentTests = [];
let currentTestId = "";

// 🚀 Launch tests
export function renderTests(topicOrSubtopicId) {
  currentTestId = topicOrSubtopicId;
  const chosenId = topicOrSubtopicId || "";
  let selectedTests = [];

  if (chosenId.includes("-") && tests[chosenId]) {
    selectedTests = tests[chosenId];
  } else {
    const baseTopic = chosenId.includes("-") ? chosenId.split("-")[0] : chosenId;
    Object.keys(tests).forEach(key => {
      if (key === baseTopic || key.startsWith(baseTopic + "-")) {
        selectedTests.push(...(tests[key] || []));
      }
    });
  }

  currentTests = selectedTests;
  currentQuestion = 0;
  score = 0;

  if (currentTests.length === 0) {
    container.innerHTML = "";
    const card = document.createElement("div");
    card.classList.add("card", "center");

    const title = document.createElement("h2");
    title.textContent = "No tests available";

    const message = document.createElement("p");
    message.textContent = "No questions found for this topic.";

    const button = document.createElement("button");
    button.textContent = "Back to topics";
    button.addEventListener("click", () => showSection("home"));

    card.appendChild(title);
    card.appendChild(message);
    card.appendChild(button);
    container.appendChild(card);
    return;
  }

  showQuestion();
}

// ❓ Показати питання
function showQuestion() {
  container.innerHTML = "";

  if (currentQuestion >= currentTests.length) {
    finishTest();
    return;
  }

  const q = currentTests[currentQuestion];

  const card = document.createElement("div");
  card.classList.add("test-card");

  card.innerHTML = `
    <h3>Question ${currentQuestion + 1}</h3>
    <p>${q.question}</p>
  `;

  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("test-options");

  q.options.forEach(option => {
    const btn = document.createElement("div");
    btn.classList.add("test-option");
    btn.textContent = option;

    btn.addEventListener("click", () => {
      checkAnswer(btn, option, q.answer);
    });

    optionsDiv.appendChild(btn);
  });

  card.appendChild(optionsDiv);
  container.appendChild(card);
}

// ✅ Перевірка відповіді
function checkAnswer(element, selected, correct) {
  const options = document.querySelectorAll(".test-option");

  options.forEach(opt => {
    opt.style.pointerEvents = "none";
  });

  if (selected === correct) {
    element.classList.add("correct");
    score++;
  } else {
    element.classList.add("wrong");

    options.forEach(opt => {
      if (opt.textContent === correct) {
        opt.classList.add("correct");
      }
    });
  }

  setTimeout(() => {
    currentQuestion++;
    showQuestion();
  }, 800);
}

// 🏁 Завершення тесту
function finishTest() {
  container.innerHTML = `
    <div class="card center">
      <h2>Test completed!</h2>
      <p>Your result: ${score} / ${currentTests.length}</p>
      <p>Earned: ${score * 10} points</p>
    </div>
  `;

  addTestResult(currentTestId, score, currentTests.length);
  renderProgress();

  const btn = document.createElement("button");
  btn.textContent = "Back to topics";
  btn.addEventListener("click", () => {
    showSection("home");
  });

  container.appendChild(btn);
}
