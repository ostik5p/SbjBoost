// 🔗 Imports (логіка)
import { initRouter } from "../js/router.js?v=5";
import { loadTopics, initTopicSearch } from "../js/topics.js?v=5";
import { initScore, setScoreUpdateHandler } from "../js/score.js?v=5";
import { loadProgress } from "../js/storage.js?v=5";

// 🔗 UI
import { initNavbar, updateNavbar } from "../ui/navbar.js";
import { renderProgress, renderLeague } from "../ui/progress.js";

// 🚀 App start
document.addEventListener("DOMContentLoaded", () => {
  console.log("SbjBoost файл app.js завантажено 🚀");

  try {
    setScoreUpdateHandler(() => {
      updateNavbar();
      renderProgress();
      renderLeague();
    });

    // Ініціалізуємо дані та UI
    initScore();
    initNavbar();
    renderProgress();
    renderLeague();
    loadProgress();

    // Теми
    loadTopics();
    initTopicSearch();

    // Роутинг (переключення секцій)
    initRouter();
  } catch (error) {
    console.error("Помилка при ініціалізації SbjBoost:", error);
    const errorBlock = document.createElement("div");
    errorBlock.style.padding = "20px";
    errorBlock.style.background = "rgba(220,38,38,0.16)";
    errorBlock.style.color = "#fee2e2";
    errorBlock.style.margin = "20px";
    errorBlock.style.borderRadius = "16px";
    errorBlock.textContent = "Помилка під час завантаження програми. Перевірте консоль браузера.";
    document.body.prepend(errorBlock);
  }
});