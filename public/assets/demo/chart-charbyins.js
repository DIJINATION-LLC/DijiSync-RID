// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Medicare", "Medicare Advantage", "Cigna", "Molina", "Medicaid", "Blue Cross", "Kaiser", "Aetna", "Humana", "Assurant Health", "Well Care", "Priority Health", "Mutual of Omaha", "Celtic Healthcare", "Other"],
    datasets: [{
      data: [41.3, 8.4, 3.4, 1.7, 18.2, 4.4, 0.8, 1.3, 2.4, 1.3, 2.2, 0.9, 1.7, 2.3, 9.7],
      backgroundColor: ['#c8500a','#e6dd65', '#007bff', '#dc3545', '#ffc107', '#28a745', '#58b95e', '#be4682', '#2bc905', '#5fb2e7', '#7d48de', '#4ee849', '#ba0958', '#f915b4', '#0b3755'],
    }],
  },
});
