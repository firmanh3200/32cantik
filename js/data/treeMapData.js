// Simulated API endpoint for treemap data
async function fetchTreeMapData() {
  // Simulate API call
  // In real implementation, replace with: return await fetch('api/treemap')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          { x: 'INTC', y: 1.2 },
          { x: 'MSFT', y: 0.8 },
          { x: 'AAPL', y: 1.5 },
          { x: 'GOOG', y: 2.1 },
          { x: 'AMZN', y: 1.9 }
        ]
      });
    }, 300);
  });
}

export { fetchTreeMapData };