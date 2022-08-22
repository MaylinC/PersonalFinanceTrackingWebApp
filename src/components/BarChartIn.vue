<template>
  <h2 class="head"> Monthly Transaction Income </h2>
  <div style="max-width: 850px; margin-left: 30px">
    <vue3-chart-js :id="barChart.id"
        ref="chartRef"
        :type="barChart.type"
        :data="barChart.data"
        :options="barChart.options" ></vue3-chart-js>

   <button class="buttonM2" @click="updateChart"> Update Chart </button>

    </div>
</template>

<script>

import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { ref } from 'vue'; 

export default {

 props: ["janIn", "febIn", "marIn", "aprIn", "mayIn","juneIn","julyIn","augIn","sepIn","octIn","novIn","decIn"],

  name: "App",
  components: {
    Vue3ChartJs,
  },
  setup(props) {

      const chartRef = ref(null)

    const barChart = {
        id: 'bar',
      type: "bar",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            min: 0,
            max: 100,
            ticks: {
              callback: function (value) {
                return `${value}%`;
              },
            },
          },
        },
      },
      data: {
        labels: ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: "Transaction Income",
            backgroundColor: ["#1abc9c", "#f1c40f", "#2980b9","#dd33dd", "#fff5fa","#c0c0c0","#d2aa87","#089415","#25bbf7","#9491be","#ffd700","#0b5a5f"],
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          },
        //   {
        //     label: "My Second Dataset",
        //     backgroundColor: ["#2ecc71", "#e67e22", "#9b59b6", "#bdc3c7"],
        //     data: [-40, -20, -10, -10],
        //   },
        ],
      },
    };

    const updateChart = () => {

        barChart.options.plugins.title = {
        text: 'Updated Chart',
        display: true
      }

        barChart.data.labels = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"],

        barChart.data.datasets = [
        {
          backgroundColor: ["#1abc9c", "#f1c40f", "#2980b9","#dd33dd", "#fff5fa","#c0c0c0","#d2aa87","#089415","#25bbf7","#9491be","#ffd700","#0b5a5f"],
          data: [props.janIn*10, props.febIn*10, props.marIn*10, props.aprIn*10, props.mayIn*10,props.juneIn*10, props.julyIn*10,
                 props.augIn*10, props.sepIn*10, props.octIn*10, props.novIn*10, props.decIn*10]
        }
      ]

      chartRef.value.update(250)
    
    };

    return {
        barChart,
        chartRef,
        updateChart
    };
  },
};
</script>

<style scoped>

.head{ 

    margin-top: 30px;
    margin-left: -500px;
    margin-bottom: 20px;

}

.buttonM2 {
  background-color: rgb(154, 117, 117);
  color: rgb(255, 255, 255);
  padding: 10px 30px;
  margin-top: 15px;
  margin-left: 90px;
  border: none;
  cursor: pointer;
  width: 20%;
  opacity: 0.9;
  border-radius: 20px;
  font-size: 16px;
  margin-bottom: 5%;
}

.buttonM2:hover {

    background-color: rgb(169, 90, 90);

}

</style>
