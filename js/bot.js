import { getScore } from "./score.js";

// 📦 Контейнер
const container = document.getElementById("bot-container");

// 🎮 Запуск бою з ботом
export function startBotBattle() {
  container.innerHTML = "";

  const { points } = getScore();

  // 🧠 Складність бота залежить від XP
  let botChance = 0.5;

  if (points > 200) botChance = 0.6;
  if (points > 500) botChance = 0.7;
  if (points > 1000) botChance = 0.8;

  // 🎲 Симуляція результату
  const playerScore = randomScore();
  const botScore = randomScore(botChance);

  renderResult(playerScore, botScore);
}

// 🎲 Генерація балів
function randomScore(accuracy = 0.7) {
  let score = 0;

  for (let i = 0; i < 10; i++) {
    if (Math.random() < accuracy) {
      score++;
    }
  }

  return score;
}

// 🏁 Показ результату
function renderResult(player, bot) {
  const result = document.createElement("div");
  result.classList.add("bot-card");

  let text = "";

  if (player > bot) {
    text = "🔥 You WIN!";
  } else if (player < bot) {
    text = "😈 Bot wins!";
  } else {
    text = "🤝 Draw!";
  }

  result.innerHTML = `
    <h3>Battle Result</h3>
    <p>You: ${player}</p>
    <p>Bot: ${bot}</p>
    <h2>${text}</h2>
  `;

  container.appendChild(result);
}