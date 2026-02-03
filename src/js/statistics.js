// Sample player statistics data
const statisticsData = {
  'highest-points': [
    { rank: 1, player: 'Ritesh Chauhan', team: 'NM', teamRank: 1, value: 0 },
    { rank: 2, player: 'Harsh Mohapatra', team: 'MV', teamRank: 2, value: 0 },
    { rank: 3, player: 'Ankan Giri', team: 'VC', teamRank: 3, value: 0 },
    { rank: 4, player: 'Sailesh Singh', team: 'BZ', teamRank: 4, value: 0 },
    { rank: 5, player: 'Raghav Sah', team: 'AH', teamRank: 5, value: 0 }
  ],
  '3-point-made': [
    { rank: 1, player: 'Harsh Mohapatra', team: 'MV', teamRank: 2, value: 0 },
    { rank: 2, player: 'Ankan Giri', team: 'VC', teamRank: 3, value: 0 },
    { rank: 3, player: 'Ritesh Chauhan', team: 'NM', teamRank: 1, value: 0 },
    { rank: 4, player: 'Raghav Sah', team: 'AH', teamRank: 5, value: 0 },
    { rank: 5, player: 'Sailesh Singh', team: 'BZ', teamRank: 4, value: 0 }
  ],
  'free-throws': [
    { rank: 1, player: 'Ritesh Chauhan', team: 'NM', teamRank: 1, value: 0 },
    { rank: 2, player: 'Sailesh Singh', team: 'BZ', teamRank: 4, value: 0 },
    { rank: 3, player: 'Ankan Giri', team: 'VC', teamRank: 3, value: 0 },
    { rank: 4, player: 'Harsh Mohapatra', team: 'MV', teamRank: 2, value: 0 },
    { rank: 5, player: 'Raghav Sah', team: 'AH', teamRank: 5, value: 0 }
  ],
  'total-fouls': [
    { rank: 1, player: 'Sailesh Singh', team: 'BZ', teamRank: 4, value: 0 },
    { rank: 2, player: 'Raghav Sah', team: 'AH', teamRank: 5, value: 0 },
    { rank: 3, player: 'Ankan Giri', team: 'VC', teamRank: 3, value: 0 },
    { rank: 4, player: 'Harsh Mohapatra', team: 'MV', teamRank: 2, value: 0 },
    { rank: 5, player: 'Ritesh Chauhan', team: 'NM', teamRank: 1, value: 0 }
  ]
};

// Map stat type to header labels
const statHeaders = {
  'highest-points': 'Points',
  '3-point-made': '3-Pointers',
  'free-throws': 'Free Throws',
  'total-fouls': 'Fouls'
};

let currentStat = 'highest-points';

document.addEventListener('DOMContentLoaded', () => {
  showStats('highest-points');
});

function showStats(statType) {
  currentStat = statType;
  
  // Update active button
  document.querySelectorAll('.stat-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Update header
  document.getElementById('statHeader').textContent = statHeaders[statType];
  
  // Display data
  const tbody = document.getElementById('statsTableBody');
  const data = statisticsData[statType];
  
  tbody.innerHTML = data.map(stat => `
    <tr>
      <td><strong>${stat.rank}</strong></td>
      <td>${stat.player}</td>
      <td>${stat.team}</td>
      <td>${stat.teamRank}</td>
      <td><strong>${stat.value}</strong></td>
    </tr>
  `).join('');
}
