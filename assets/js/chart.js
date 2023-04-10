var xValues = ['Pink', 'Green', 'Red', 'Blue', 'Yellow', 'Orange'];
var yValues = [55, 49, 44, 24, 15, 10];
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
      data: yValues
    }]
  },
});