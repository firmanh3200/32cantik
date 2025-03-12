// Simulated API endpoint for bar chart data
async function fetchBarChartData() {
  // Simulate API call
  // In real implementation, replace with: return await fetch('api/bar-chart')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        data: [400, 430, 448, 470, 540, 580, 690]
      });
    }, 300);
  });
}

export { fetchBarChartData };