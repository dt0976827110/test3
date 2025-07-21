window.onload = function () {
  const historyCtx = document.getElementById('historyChart').getContext('2d');
  new Chart(historyCtx, {
    type: 'line',
    data: {
      labels: ['0','1','2','3','4','5','6','7','8','9'],
      datasets: [
        {
          label: 'TEMP(°C)',
          data: [20,30,25,35,28,26,30,40,38,32],
          borderColor: '#f87171',
          tension: 0.4
        },
        {
          label: 'HUMI(%)',
          data: [60,70,65,50,72,68,66,75,70,80],
          borderColor: '#60a5fa',
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
};
