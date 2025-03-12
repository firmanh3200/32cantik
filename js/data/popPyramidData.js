// Simulated API endpoint for population pyramid data
async function fetchPopPyramidData() {
  // Simulate API call
  // In real implementation, replace with: return await fetch('api/population')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        males: [-4.4, -3.5, -3.1, -2.8, -2.1, -1.6],
        females: [4.2, 3.8, 3.4, 3.0, 2.3, 1.8],
        categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64']
      });
    }, 300);
  });
}

export { fetchPopPyramidData };