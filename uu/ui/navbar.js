import { showSection } from "../js/router.js?v=5";
import { getScore } from "../js/score.js?v=5";
import { hasSelectedTopic } from "../js/notes.js?v=5";

// 📦 Елементи
const xpText = document.getElementById("nav-xp");
const leagueText = document.getElementById("nav-league");
const navItems = Array.from(document.querySelectorAll(".nav-item"));

// 🚀 Ініціалізація меню
export function initNavbar() {
  navItems.forEach(button => {
    button.addEventListener("click", () => {
      navItems.forEach(item => item.classList.remove("active"));
      button.classList.add("active");

      if (button.id === "nav-topics") {
        showSection("home");
      }

      if (button.id === "nav-notes") {
        if (hasSelectedTopic()) {
          showSection("notes");
        } else {
          showSection("home");
        }
      }

      if (button.id === "nav-leagues") {
        showSection("league");
      }
    });
  });

  updateNavbar();
}

// 🔄 Оновлення XP і ліги
export function updateNavbar() {
  const data = getScore();

  xpText.textContent = `${data.points} XP`;

  if (data.league) {
    leagueText.textContent = data.league.name;
    leagueText.className = data.league.class;
  } else {
    leagueText.textContent = "Bronze";
  }
}