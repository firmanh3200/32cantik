// Simulated API endpoint for table data
async function fetchTableData() {
  // Simulate API call
  // In real implementation, replace with: return await fetch('api/table')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        ["Tiger Nixon", "System Architect", "Edinburgh", "61", "2011/04/25", "$320,800"],
        ["Garrett Winters", "Accountant", "Tokyo", "63", "2011/07/25", "$170,750"],
        ["Ashton Cox", "Junior Technical Author", "San Francisco", "66", "2009/01/12", "$86,000"],
        ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22", "2012/03/29", "$433,060"],
        ["Airi Satou", "Accountant", "Tokyo", "33", "2008/11/28", "$162,700"]
      ]);
    }, 300);
  });
}

export { fetchTableData };