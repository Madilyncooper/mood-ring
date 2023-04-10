var backButtonEl = document.querySelector('.back-button');
var colorHistory = JSON.parse(localStorage.getItem('Color')) || [];

const elementCounts = {};

colorHistory.forEach(element => {
  elementCounts[element] = (elementCounts[element] || 0) + 1;
  var xValues = ['Pink', 'Green', 'Red', 'Blue', 'Yellow', 'Orange'];
  var yValues = [elementCounts.Pink*10,elementCounts.Green*10, elementCounts.Red*10, elementCounts.Blue*10, 
    elementCounts.Yellow*10, elementCounts.Orange*10];
  var barColors = [
    '#e1064b',
    '#1ead02',
    'rgb(217, 0, 0)',
    '#023cf8',
    'rgb(221, 225, 0)',
    '#ffa500',
  ];
  
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues,
      }]
    },
  });
});

