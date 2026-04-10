// 💾 Ключ у localStorage
const STORAGE_KEY = "sbjboost_progress";

function setState(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getState() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveProgress(points, history = [], streak = 0) {
  setState({
    points,
    history,
    streak
  });
}

export function getProgress() {
  return getState();
}

export function loadProgress() {
  const data = getProgress();

  if (!data) return;

  console.log("Loaded progress:", data.points, "streak:", data.streak);
}