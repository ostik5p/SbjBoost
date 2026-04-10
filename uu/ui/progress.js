import { getScore } from "../js/score.js?v=5";
import { leagues } from "../data/leagues.js?v=5";

const container = document.getElementById("progress-container");
const leagueContainer = document.getElementById("league-container");

export function renderProgress() {
  if (!container) return;

  const { points, league, streak, history } = getScore();
  const currentLeague = league || leagues[0];
  const currentIndex = leagues.findIndex(item => item.name === currentLeague.name);
  const nextLeague = leagues[currentIndex + 1];

  const fromPoints = currentLeague.minPoints;
  const toPoints = nextLeague ? nextLeague.minPoints : currentLeague.minPoints;
  const progressValue = nextLeague
    ? Math.min(100, Math.max(0, ((points - fromPoints) / (toPoints - fromPoints)) * 100))
    : 100;
  const remainingPoints = nextLeague ? Math.max(0, toPoints - points) : 0;

  const leagueItems = leagues.map(item => {
    const isActive = item.name === currentLeague.name;
    return `
      <div class="league-step ${isActive ? "active" : ""}">
        <div class="league-icon">${item.name.charAt(0)}</div>
        <div class="league-label">${item.name}</div>
      </div>
    `;
  }).join("");

  const recentTests = history || [];

  const recentList = recentTests.length
    ? recentTests.map(item => {
        const label = item.topicId.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase());
        const status = item.passed ? "Passed" : "Retry";
        const date = new Date(item.date).toLocaleString();

        return `
          <div class="recent-test-item">
            <div>
              <strong>${label}</strong>
              <span>${status}</span>
            </div>
            <div>${item.score}/${item.total} • ${item.earnedPoints} pts</div>
            <div class="recent-test-date">${date}</div>
          </div>
        `;
      }).join("")
    : `<p class="empty-history">No test history yet. Complete a quiz to save your first result.</p>`;

  container.innerHTML = `
    <div class="progress-card card">
      <div class="league-track">
        ${leagueItems}
      </div>
      <div class="progress-card-body">
        <div class="progress-header">
          <div>
            <div class="progress-title">League</div>
            <h2>${currentLeague.name}</h2>
          </div>
          <div class="progress-summary">${points} pts</div>
        </div>

        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressValue}%;"></div>
        </div>
        <div class="progress-footer">
          <span>${currentLeague.name} — ${points} pts</span>
          <span>${nextLeague ? `${remainingPoints} pts to ${nextLeague.name}` : "Maximum league"}</span>
        </div>
      </div>
    </div>

    <div class="stats-row">
      <div class="stat-card"><span class="stat-value">${points}</span><span class="stat-name">Points</span></div>
      <div class="stat-card"><span class="stat-value">${streak}</span><span class="stat-name">Winning Streak</span></div>
      <div class="stat-card"><span class="stat-value">${recentTests.length}</span><span class="stat-name">Completed Tests</span></div>
      <div class="stat-card"><span class="stat-value">${nextLeague ? remainingPoints : 0}</span><span class="stat-name">To Next League</span></div>
    </div>

    <div class="history-card card">
      <div class="history-card-header">
        <h3>Recent test history</h3>
        <span>${recentTests.length} saved</span>
      </div>
      <div class="recent-results">
        ${recentList}
      </div>
    </div>
  `;
}

export function renderLeague() {
  if (!leagueContainer) return;

  const { points, league } = getScore();
  const currentLeague = league || leagues[0];

  const leagueItems = leagues.map(level => {
    const isActive = level.name === currentLeague.name;
    return `
      <div class="league-card ${isActive ? "active" : ""}">
        <div class="league-title">${level.name}</div>
        <div class="league-points">${level.minPoints} pts</div>
      </div>
    `;
  }).join("");

  leagueContainer.innerHTML = `
    <div class="card">
      <div class="league-summary">
        <div>
          <h2>Your league: ${currentLeague.name}</h2>
          <p>${points} points total</p>
        </div>
        <div class="league-badge ${currentLeague.class}">${currentLeague.name}</div>
      </div>
      <div class="league-list">
        ${leagueItems}
      </div>
    </div>
  `;
}
