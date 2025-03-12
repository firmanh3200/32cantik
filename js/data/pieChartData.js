// Simulated API endpoint for pie chart data
async function fetchPieChartData() {
  // Simulate API call
  // In real implementation, replace with: return await fetch('api/pie-chart')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        series: [44, 55, 13, 43, 22],
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
      });
    }, 300);
  });
}

export { fetchPieChartData };