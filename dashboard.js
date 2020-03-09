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
          label: "Product One",
          backgroundColor: "rgba(255, 99, 132,0)",
          // backgroundColor: "rgba(255, 99, 132,5)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45]
        },
        {
          label: "Product Two",
          backgroundColor: "rgba(255, 99, 132,0)",
          // backgroundColor: "#800080",
          borderColor: "#4c02e1",
          data: [10, 20, 50, 20, 10, 35, 40]
        }
      ]
    },

    // Configuration options go here
    options: {}
  });

  data = {
    datasets: [
      {
        backgroundColor: ["#8e2de2", "#FF6961", "#4C02E1", "#ffbdfd"],
        borderColor: "#fafafa",
        data: [10, 20, 30, 5]
      }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["One", "Two", "Three", "Four"]
  };

  var ctx2 = document.getElementById("myChart2").getContext("2d");
  // For a pie chart
  var myPieChart = new Chart(ctx2, {
    type: "doughnut",
    data: data,
    options: {}
  });
}
