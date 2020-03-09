
window.onload = function() {
  montarFigura();
};

function montarFigura() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "line",

    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Laptops",
          backgroundColor: "rgba(255, 99, 132,0)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45]
        },
        {
          label: "Headsets",
          backgroundColor: "rgba(255, 99, 132,0)",
          borderColor: "#4c02e1",
          data: [10, 20, 50, 20, 10, 35, 40]
        },
        {
          label: "Monitors",
          backgroundColor: "rgba(255, 99, 132,0)",
          borderColor: "#FF6961",
          data: [5, 25, 30, 10, 12, 20, 30]
        },
        {
          label: "Phones",
          backgroundColor: "rgba(255, 99, 132,0)",
          borderColor: "#60cc63",
          data: [15, 30, 33, 23, 15, 40, 49]
        }
      ]
    },

    options: {}
  });

  data = {
    datasets: [
      {
        backgroundColor: ["#8e2de2", "#FF6961", "#4C02E1"],
        borderColor: "#fafafa",
        data: [10, 20, 30]
      }
    ],

    labels: ["Eletronics", "Furniture", "Toys"]
  };

  var ctx2 = document.getElementById("myChart2").getContext("2d");

  var myPieChart = new Chart(ctx2, {
    type: "doughnut",
    data: data,
    options: {}
  });
}
