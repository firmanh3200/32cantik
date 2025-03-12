// Simulated API endpoint for boxplot data
async function fetchBoxPlotData() {
  // Simulate API call
  // In real implementation, replace with: return await fetch('api/boxplot')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          { x: 'Jan', y: [54, 66, 69, 75, 88] },
          { x: 'Feb', y: [43, 65, 69, 76, 81] },
          { x: 'Mar', y: [31, 39, 45, 51, 59] },
          { x: 'Apr', y: [39, 46, 55, 65, 71] }
        ]
      });
    }, 300);
  });
}

export { fetchBoxPlotData };