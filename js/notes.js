import { notes } from "../data/notes.js?v=5";
import { topics } from "../data/topics.js?v=5";
import { showSection } from "./router.js?v=5";
import { renderTests } from "./tests.js?v=5";

// 📦 Контейнер
const container = document.getElementById("notes-container");
const notesHeading = document.querySelector("#notes-section h2");

let selectedTopicId = null;

export function hasSelectedTopic() {
  return selectedTopicId !== null;
}

// 📖 Display sub-topics for notes
export function renderNotes(topicId) {
  selectedTopicId = topicId;
  const topicMeta = topics.find(topic => topic.id === topicId);
  notesHeading.textContent = topicMeta ? `${topicMeta.title} — Select Topic` : "Select Topic";
  container.innerHTML = "";

  const topicNotes = notes[topicId];

  if (!topicNotes) {
    container.innerHTML = "<p>No notes available yet.</p>";
    return;
  }

  topicNotes.forEach(note => {
    const card = document.createElement("div");
    card.classList.add("subtopic-card");

    card.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <div class="subtopic-actions">
        <button class="read-notes-btn" data-note-id="${note.id}">Read Notes</button>
        <button class="take-test-btn" data-note-id="${note.id}">Take Test</button>
      </div>
    `;

    // Add event listeners for the buttons
    const readBtn = card.querySelector(".read-notes-btn");
    const testBtn = card.querySelector(".take-test-btn");

    readBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showNoteContent(note);
    });

    testBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      startTestForSubtopic(note.id);
    });

    container.appendChild(card);
  });

  const controls = document.createElement("div");
  controls.classList.add("note-controls");

  const backBtn = document.createElement("button");
  backBtn.textContent = "Back to topics";
  backBtn.classList.add("secondary-button");
  backBtn.addEventListener("click", () => {
    showSection("home");
  });

  controls.appendChild(backBtn);
  container.appendChild(controls);
}

// Show detailed note content
function showNoteContent(note) {
  container.innerHTML = "";

  const card = document.createElement("div");
  card.classList.add("note-detail-card", "card");

  const heading = document.createElement("h2");
  heading.textContent = note.title;

  const text = document.createElement("p");
  text.textContent = note.content;

  const actions = document.createElement("div");
  actions.classList.add("note-actions");

  const backBtn = document.createElement("button");
  backBtn.classList.add("secondary-button");
  backBtn.textContent = "Back";
  backBtn.addEventListener("click", () => {
    renderNotes(selectedTopicId);
  });

  const testBtn = document.createElement("button");
  testBtn.classList.add("primary-button");
  testBtn.textContent = "Take Test";
  testBtn.addEventListener("click", () => {
    startTestForSubtopic(note.id);
  });

  actions.appendChild(backBtn);
  actions.appendChild(testBtn);

  card.appendChild(heading);
  card.appendChild(text);
  card.appendChild(actions);
  container.appendChild(card);
}

// Start test for specific subtopic
function startTestForSubtopic(subtopicId) {
  renderTests(subtopicId);
  showSection("tests");
}

// 🚀 Launch test (legacy function for backward compatibility)
function startTest(topicId) {
  renderTests(topicId);
  showSection("tests");
}
