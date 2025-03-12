import { fetchBarChartData } from './data/barChartData.js';
import { fetchPieChartData } from './data/pieChartData.js';
import { fetchTreeMapData } from './data/treeMapData.js';
import { fetchPopPyramidData } from './data/popPyramidData.js';
import { fetchBoxPlotData } from './data/boxPlotData.js';
import { fetchPlotChartData } from './data/plotChartData.js';
import { fetchTableData } from './data/tableData.js';

// Theme Management
document.addEventListener('DOMContentLoaded', function() {
  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  const icon = themeToggle.querySelector('i');
  
  themeToggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
      document.body.removeAttribute('data-theme');
      icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
    } else {
      document.body.setAttribute('data-theme', 'dark');
      icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    }
  });

  // Color Theme Selection
  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', (e) => {
      const theme = e.target.dataset.theme;
      document.body.setAttribute('data-theme', theme);
      
      // Update active state
      document.querySelectorAll('.color-swatch').forEach(s => {
        s.classList.remove('active');
      });
      e.target.classList.add('active');

      // Update chart colors based on theme
      updateChartColors(theme);
    });
  });

  // Function to get theme colors
  function getThemeColors(theme) {
    const themeColors = {
      blue: ['#4a90e2', '#67b7dc', '#84cef2'],
      green: ['#2ecc71', '#27ae60', '#53d88b'],
      orange: ['#f39c12', '#d35400', '#f1c40f'],
      purple: ['#9b59b6', '#8e44ad', '#b07cc6'],
      red: ['#e74c3c', '#c0392b', '#ff6b6b']
    };
    return themeColors[theme] || themeColors.blue;
  }

  // Function to update chart colors
  function updateChartColors(theme) {
    const colors = getThemeColors(theme);
    
    // Update Bar Chart
    barChart.updateOptions({
      colors: [colors[0]],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: [colors[2]],
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100]
        }
      }
    });

    // Update Pie Chart
    pieChart.updateOptions({
      colors: colors,
      legend: {
        position: 'bottom'
      }
    });

    // Update Treemap
    treeMap.updateOptions({
      colors: colors
    });

    // Update Population Pyramid
    popPyramid.updateOptions({
      colors: [colors[0], colors[2]]
    });

    // Update Boxplot
    boxPlot.updateOptions({
      colors: colors,
      plotOptions: {
        boxPlot: {
          colors: {
            upper: colors[0],
            lower: colors[2]
          }
        }
      }
    });

    // Update Plot Chart
    plotChart.updateOptions({
      colors: [colors[0]]
    });
  }

  async function initializeCharts() {
    try {
      // Initialize DataTable with API data
      const tableData = await fetchTableData();
      const dataTable = new DataTable('#dataTable', {
        dom: 'Bfrtip',
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
        data: tableData
      });

      // Initialize Bar Chart with API data
      const barData = await fetchBarChartData();
      const barChart = new ApexCharts(document.querySelector("#barChart"), {
        series: [{
          data: barData.data
        }],
        chart: {
          type: 'bar',
          height: 450
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: ['#84cef2'],
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: barData.categories,
        }
      });
      barChart.render();

      // Initialize Pie Chart with API data
      const pieData = await fetchPieChartData();
      const pieChart = new ApexCharts(document.querySelector("#pieChart"), {
        series: pieData.series,
        chart: {
          type: 'pie',
          height: 350
        },
        labels: pieData.labels,
        legend: {
          position: 'bottom'
        }
      });
      pieChart.render();

      // Initialize Treemap with API data
      const treeMapData = await fetchTreeMapData();
      const treeMap = new ApexCharts(document.querySelector("#treeMap"), {
        series: [{
          data: treeMapData.data
        }],
        chart: {
          height: 350,
          type: 'treemap'
        }
      });
      treeMap.render();

      // Initialize Population Pyramid with API data
      const popData = await fetchPopPyramidData();
      const popPyramid = new ApexCharts(document.querySelector("#popPyramid"), {
        series: [{
          name: 'Males',
          data: popData.males
        }, {
          name: 'Females',
          data: popData.females
        }],
        chart: {
          type: 'bar',
          height: 350,
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%',
          },
        },
        yaxis: {
          title: {
            text: 'Age Groups'
          },
          categories: popData.categories
        }
      });
      popPyramid.render();

      // Initialize Boxplot with API data
      const boxPlotData = await fetchBoxPlotData();
      const boxPlot = new ApexCharts(document.querySelector("#boxPlot"), {
        series: [{
          type: 'boxPlot',
          data: boxPlotData.data
        }],
        chart: {
          type: 'boxPlot',
          height: 350
        },
        title: {
          text: 'Basic BoxPlot Chart',
          align: 'left'
        },
        plotOptions: {
          boxPlot: {
            colors: {
              upper: '#e9ecef',
              lower: '#f8f9fa'
            }
          }
        }
      });
      boxPlot.render();

      // Initialize Plot Chart with API data
      const plotData = await fetchPlotChartData();
      const plotChart = new ApexCharts(document.querySelector("#plotChart"), {
        series: [{
          name: "Points",
          data: plotData.data
        }],
        chart: {
          height: 350,
          type: 'scatter',
          zoom: {
            enabled: true,
            type: 'xy'
          }
        },
        xaxis: {
          tickAmount: 10,
        },
        yaxis: {
          tickAmount: 7
        }
      });
      plotChart.render();

      // Make charts available for theme updates
      window.barChart = barChart;
      window.pieChart = pieChart;
      window.treeMap = treeMap;
      window.popPyramid = popPyramid;
      window.boxPlot = boxPlot;
      window.plotChart = plotChart;

      // Set initial theme colors
      updateChartColors('blue');
    } catch (error) {
      console.error('Error initializing charts:', error);
    }
  }

  initializeCharts();
});

// Window resize handling for responsive charts
window.addEventListener('resize', function() {
  // Add your chart update logic here if needed
});