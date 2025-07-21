Chart.register({
  id: 'centerTextPlugin',
  beforeDraw: function(chart) {
    const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
    if (chart.config.options.elements.center) {
      const text = chart.config.options.elements.center.text,
            fontStyle = chart.config.options.elements.center.fontStyle || 'Arial',
            color = chart.config.options.elements.center.color || '#FFF',
            fontSize = chart.config.options.elements.center.fontSize || 16;

      ctx.restore();
      ctx.font = fontSize + "px " + fontStyle;
      ctx.fillStyle = color;
      ctx.textBaseline = "middle";

      const textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  }
});

function createDonutChart(canvasId, value, color, centerText) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [value, 100 - value],
        backgroundColor: [color, 'rgba(255,255,255,0.08)'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '75%',
      plugins: { legend: { display: false } },
      elements: {
        center: {
          text: centerText,
          color: '#fff',
          fontStyle: 'Arial',
          fontSize: 14
        }
      },
      responsive: false
    }
  });
}

window.onload = function () {
  createDonutChart('electricityChart', 40, '#86efac', '40%');
  createDonutChart('temperatureChart', 23, '#fda4af', '23℃');
  createDonutChart('humidityChart', 55, '#c4b5fd', '55%');

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
