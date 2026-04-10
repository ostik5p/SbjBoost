// 🔀 Router — керує сторінками

const sections = {
  home: document.getElementById("home-section"),
  notes: document.getElementById("notes-section"),
  tests: document.getElementById("tests-section"),
  bot: document.getElementById("bot-section"),
  league: document.getElementById("league-section")
};

// ❌ Сховати всі секції
function hideAll() {
  Object.values(sections).forEach(section => {
    section.classList.add("hidden");
  });
}

// ✅ Показати одну секцію
export function showSection(name) {
  hideAll();

  if (name === "topics") {
    name = "home";
  }

  if (sections[name]) {
    sections[name].classList.remove("hidden");
  }
}

// 🚀 Ініціалізація
export function initRouter() {
  // Стартова сторінка
  showSection("home");
}