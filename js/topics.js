import { topics } from "../data/topics.js?v=5";
import { notes } from "../data/notes.js?v=5";
import { tests } from "../data/tests.js?v=5";
import { showSection } from "./router.js?v=5";
import { renderNotes } from "./notes.js?v=5";

const container = document.getElementById("topics-container");
const searchInput = document.getElementById("topic-search");
const searchButton = document.getElementById("topic-search-button");
const filterButtons = Array.from(document.querySelectorAll(".filter-pill"));

export function loadTopics(query = "") {
  container.innerHTML = "";
  const searchTerm = query.trim().toLowerCase();
  const items = Array.isArray(topics) ? topics : [];

  if (items.length === 0) {
    container.innerHTML = "<p>Failed to load topics.</p>";
    return;
  }

  const filtered = items.filter(topic => {
    if (!searchTerm) return true;
    return [topic.title, topic.description, topic.id].some(value =>
      value.toLowerCase().includes(searchTerm)
    );
  });

  if (filtered.length === 0) {
    renderSearchFallback(searchTerm);
    return;
  }

  filtered.forEach(topic => {
    const card = document.createElement("div");
    card.classList.add("topic-card");

    const noteCount = notes[topic.id]?.length || 0;
    // Count tests for all subtopics of this topic
    let testCount = 0;
    Object.keys(tests).forEach(key => {
      if (key === topic.id || key.startsWith(topic.id + '-')) {
        testCount += tests[key]?.length || 0;
      }
    });

    card.innerHTML = `
      <h3>${topic.title}</h3>
      <p>${topic.description}</p>
      <div class="topic-meta">${noteCount} notes · ${testCount} tests</div>
    `;

    card.addEventListener("click", () => openTopic(topic.id));
    container.appendChild(card);
  });
}

export function initTopicSearch() {
  if (!searchInput) return;

  const update = value => {
    if (searchInput) searchInput.value = value;
    filterButtons.forEach(btn => btn.classList.remove("active"));
    loadTopics(value || searchInput.value);
  };

  searchInput.addEventListener("input", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    if (filterButtons[0]) filterButtons[0].classList.add("active");
    loadTopics(searchInput.value);
  });

  searchInput.addEventListener("keyup", event => {
    if (event.key === "Enter") {
      loadTopics(searchInput.value);
    }
  });

  if (searchButton) {
    searchButton.addEventListener("click", () => loadTopics(searchInput.value));
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      const filterValue = button.dataset.filter || "";
      update(filterValue);
    });
  });
}

function renderSearchFallback(searchTerm) {
  const query = encodeURIComponent(searchTerm);
  container.innerHTML = `
    <div class="search-fallback card">
      <h3>No topics found on site</h3>
      <p>Try finding the information externally if it hasn't been added to SbjBoost yet.</p>
      <div class="external-search-links">
        <a href="https://www.google.com/search?q=${query}" target="_blank" rel="noopener">Search on Google</a>
        <a href="https://www.youtube.com/results?search_query=${query}" target="_blank" rel="noopener">Search on YouTube</a>
      </div>
    </div>
  `;
}

function openTopic(topicId) {
  renderNotes(topicId);
  showSection("notes");
}