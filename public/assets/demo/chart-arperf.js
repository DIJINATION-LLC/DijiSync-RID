Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
var ctx = document.getElementById("myBarChart").getContext("2d");

var data = {
  labels: ["0-30 days", "31-60 days", "61-90 days", "91+ days"],
  datasets: [{
    label: "Better",
    backgroundColor: "#0056b3",
    data: [62, 16, 8, 14]
  }, {
    label: "Average",
    backgroundColor: "#dc3545",
    data: [52, 15, 7, 23]
  }, ]
};

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
        }
      }]
    }
  }
});
