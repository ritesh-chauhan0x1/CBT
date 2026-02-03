const teamsData = [
  { code: 'NM', name: 'No Mercy', logo: '../../assets/logos/nm.png' },
  { code: 'MV', name: 'Mevrick', logo: '../../assets/logos/mv.png' },
  { code: 'VC', name: 'Velocity', logo: '../../assets/logos/vc.png' },
  { code: 'BZ', name: 'Ballerz', logo: '../../assets/logos/bz.png' },
  { code: 'AH', name: 'Apex Howler', logo: '../../assets/logos/ah.png' }
];

document.addEventListener('DOMContentLoaded', () => {
  displayPointsTable();
});

function displayPointsTable() {
  const tbody = document.getElementById('pointsTableBody');
  
  tbody.innerHTML = teamsData.map((team, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <img src="${team.logo}" alt="${team.code}" class="team-logo-small" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2750%27 cy=%2750%27 r=%2750%27 fill=%22%23667eea%22/%3E%3Ctext x=%2750%27 y=%2750%27 font-size=%2750%27 text-anchor=%22middle%27 dy=%22.3em%27 fill=%22white%22%3E${team.code}%3C/text%3E%3C/svg%3E'">
          <div>
            <strong>${team.name}</strong><br>
            <small>${team.code}</small>
          </div>
        </div>
      </td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
  `).join('');
}
