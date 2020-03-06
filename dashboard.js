/* globals Chart:false, feather:false */

// (function() {
//   // 'use strict'

//   // feather.replace()

//   // Graphs
//   var ctx = document.getElementById("myChart");
//   // eslint-disable-next-line no-unused-vars
//   var myChart = new Chart(ctx, {
//     type: "line",
//     data: {
//       labels: [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday"
//       ],
//       datasets: [
//         {
//           data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
//           lineTension: 0,
//           backgroundColor: "transparent",
//           borderColor: "#007bff",
//           borderWidth: 4,
//           pointBackgroundColor: "#007bff"
//         }
//       ]
//     },
//     options: {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               beginAtZero: false
//             }
//           }
//         ]
//       },
//       legend: {
//         display: false
//       }
//     }
//   });
// })();

window.onload = function() {
  montarFigura();
};

function montarFigura() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45]
        }
      ]
    },

    // Configuration options go here
    options: {}
  });
}
