const teamsData = [
  { code: 'NM', name: 'No Mercy', captain: 'Ritesh Chauhan', logo: '../../assets/logos/nm.png' },
  { code: 'MV', name: 'Mevrick', captain: 'Harsh Mishra', logo: '../../assets/logos/mv.png' },
  { code: 'VC', name: 'Velocity', captain: 'Ankan Giri', logo: '../../assets/logos/vc.png' },
  { code: 'BZ', name: 'Ballerz', captain: 'Shailesh Singh', logo: '../../assets/logos/bz.png' },
  { code: 'AH', name: 'Apex Howler', captain: 'Raghav Sah', logo: '../../assets/logos/ah.png' }
];

let playersData = null;

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Teams page loaded');
  displayTeams();
  loadPlayersData();
});

function loadPlayersData() {
  // Fetch from src/data/players.json - relative to the HTML file location (src/pages/)
  fetch('../data/players.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.teams && Array.isArray(data.teams)) {
        playersData = data.teams;
        console.log('✅ Players data loaded successfully:', playersData.length, 'teams');
      } else {
        console.error('❌ Invalid data structure:', data);
      }
    })
    .catch(error => {
      console.error('❌ Error loading players data:', error);
      console.error('Tried to fetch from: ../data/players.json');
    });
}

const teamLinks = {
  'NM': 'teams/nm-team.html',
  'MV': 'teams/mv-team.html',
  'VC': 'teams/vc-team.html',
  'BZ': 'teams/bz-team.html',
  'AH': 'teams/ah-team.html'
};

function displayTeams() {
  const teamsGrid = document.getElementById('teamsGrid');
  
  teamsGrid.innerHTML = teamsData.map(team => `
    <a href="${teamLinks[team.code]}" class="team-card">
      <img src="${team.logo}" alt="${team.code}" class="team-logo" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2750%27 cy=%2750%27 r=%2750%27 fill=%22%23667eea%22/%3E%3Ctext x=%2750%27 y=%2750%27 font-size=%2750%27 text-anchor=%22middle%27 dy=%22.3em%27 fill=%22white%22%3E${team.code}%3C/text%3E%3C/svg%3E'">
      <div class="team-name">${team.code}</div>
      <div class="team-full-name">${team.name}</div>
      <div class="team-captain">Captain: ${team.captain}</div>
    </a>
  `).join('');
}

function showTeam(teamCode) {
  const playersSection = document.getElementById('playersSection');
  const selectedTeam = document.getElementById('selectedTeam');
  const playersGrid = document.getElementById('playersGrid');
  
  const teamData = teamsData.find(t => t.code === teamCode);
  const teamPlayers = playersData ? playersData.find(t => t.teamId === teamCode) : null;
  
  console.log('🔍 Clicked team:', teamCode);
  console.log('📊 Players data available:', playersData ? 'Yes' : 'No');
  console.log('👥 Team players found:', teamPlayers ? 'Yes' : 'No');
  if (teamPlayers) {
    console.log('⚽ Players count:', teamPlayers.players ? teamPlayers.players.length : 0);
  }
  
  selectedTeam.innerHTML = `<span>${teamCode} - ${teamData.name}</span><br><small style="font-size: 0.8rem; color: #666;">Captain: ${teamData.captain}</small>`;
  
  if (teamPlayers && teamPlayers.players && teamPlayers.players.length > 0) {
    const sortedPlayers = teamPlayers.players.sort((a, b) => b.isCapture - a.isCapture);
    
    playersGrid.innerHTML = sortedPlayers.map(player => `
      <div class="player-card ${player.isCapture ? 'captain' : ''}">
        <div class="player-image">
          <img src="${player.image}" alt="${player.name}" onerror="this.src='https://via.placeholder.com/200?text=${player.name}'">
          ${player.isCapture ? '<div class="captain-badge">C</div>' : ''}
        </div>
        <div class="player-info">
          <h3>${player.name}</h3>
          <p class="position">${player.position}</p>
          <p class="number">No. ${player.number}</p>
        </div>
      </div>
    `).join('');
  } else {
    playersGrid.innerHTML = `<p style="text-align: center; padding: 2rem; color: #666; grid-column: 1/-1;">⏳ Players data is still loading... Please wait a moment and try again.</p>`;
  }
  
  playersSection.style.display = 'block';
  playersSection.scrollIntoView({ behavior: 'smooth' });
}
