const electricityCtx = document.getElementById('electricityChart').getContext('2d');
new Chart(electricityCtx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [40, 60],
      backgroundColor: ['#6ee7b7', '#374151'],
      borderWidth: 0
    }]
  },
  options: { cutout: '70%', plugins: { legend: { display: false } } }
});

const temperatureCtx = document.getElementById('temperatureChart').getContext('2d');
new Chart(temperatureCtx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [23, 77],
      backgroundColor: ['#fca5a5', '#374151'],
      borderWidth: 0
    }]
  },
  options: { cutout: '70%', plugins: { legend: { display: false } } }
});

const humidityCtx = document.getElementById('humidityChart').getContext('2d');
new Chart(humidityCtx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [55, 45],
      backgroundColor: ['#a5b4fc', '#374151'],
      borderWidth: 0
    }]
  },
  options: { cutout: '70%', plugins: { legend: { display: false } } }
});

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
    scales: {
      y: { beginAtZero: true }
    }
  }
});
