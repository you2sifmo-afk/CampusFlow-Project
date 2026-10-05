// Navigation Tab Switcher
function switchTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.nav-btn');

  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(`tab-${tabId}`).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Campus Spaces Initial Data
const spaces = [
  { name: "Central Library Quiet Wing", capacity: "82% Available", status: "status-available" },
  { name: "Innovation Lab Study Hub", capacity: "45% Available", status: "status-busy" },
  { name: "Student Commons Zone A", capacity: "95% Full", status: "status-full" },
  { name: "Academic Block 3 Terrace", capacity: "60% Available", status: "status-available" }
];

function renderSpaces() {
  const container = document.getElementById('spaces-list');
  container.innerHTML = spaces.map(s => `
    <div class="space-item">
      <div>
        <strong>${s.name}</strong>
      </div>
      <span class="space-status ${s.status}">${s.capacity}</span>
    </div>
  `).join('');
}

// Peer Help Requests
let requests = [
  { subject: "Data Structures", topic: "Binary Search Tree rotations" },
  { subject: "Database Systems", topic: "Normalization 3NF vs BCNF" }
];

function renderRequests() {
  const container = document.getElementById('requests-list');
  container.innerHTML = requests.map(r => `
    <div class="req-item">
      <strong>${r.subject}</strong>: ${r.topic}
    </div>
  `).join('');
}

function addRequest(e) {
  e.preventDefault();
  const subjectInput = document.getElementById('subject-input');
  const topicInput = document.getElementById('topic-input');

  requests.unshift({
    subject: subjectInput.value,
    topic: topicInput.value
  });

  subjectInput.value = '';
  topicInput.value = '';
  renderRequests();
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderSpaces();
  renderRequests();
});