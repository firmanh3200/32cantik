// Simulated API endpoint for plot chart data
async function fetchPlotChartData() {
  // Simulate API call
  // In real implementation, replace with: return await fetch('api/plot')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          [16.4, 5.4],
          [21.7, 2.4],
          [25.4, 3.5],
          [19.0, 2.5],
          [10.9, 1.4]
        ]
      });
    }, 300);
  });
}

export { fetchPlotChartData };