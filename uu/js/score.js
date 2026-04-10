import { leagues } from "../data/leagues.js?v=5";
import { saveProgress, getProgress } from "./storage.js?v=5";

// 📊 Стейт
let points = 0;
let currentLeague = null;
let streak = 0;
let history = [];
let updateHandler = null;

// 🚀 Ініціалізація
export function initScore() {
  const saved = getProgress();

  if (saved) {
    points = saved.points || 0;
    streak = saved.streak || 0;
    history = Array.isArray(saved.history) ? saved.history : [];
  }

  updateLeague();
  if (updateHandler) updateHandler();
}

// ➕ Додати бали
export function addPoints(amount, shouldSave = true) {
  points += amount;
  updateLeague();

  if (shouldSave) {
    saveProgress(points, history, streak);
  }

  if (updateHandler) updateHandler();
  console.log("XP:", points);
}

export function addTestResult(testId, scoreValue, total) {
  const earnedPoints = scoreValue * 10;
  const passed = total > 0 ? scoreValue / total >= 0.7 : false;

  if (passed) {
    streak += 1;
  } else {
    streak = 0;
  }

  const entry = {
    id: `${testId}-${Date.now()}`,
    topicId: testId,
    score: scoreValue,
    total,
    passed,
    earnedPoints,
    date: new Date().toISOString()
  };

  history.unshift(entry);
  if (history.length > 20) {
    history = history.slice(0, 20);
  }

  addPoints(earnedPoints, false);
  saveProgress(points, history, streak);
  if (updateHandler) updateHandler();
}

export function setScoreUpdateHandler(fn) {
  updateHandler = fn;
}

// 🔍 Визначення ліги
function updateLeague() {
  for (let i = leagues.length - 1; i >= 0; i--) {
    if (points >= leagues[i].minPoints) {
      currentLeague = leagues[i];
      break;
    }
  }
}

// 📊 Отримати дані
export function getScore() {
  return {
    points,
    league: currentLeague,
    streak,
    history: history.slice(0, 5)
  };
}
