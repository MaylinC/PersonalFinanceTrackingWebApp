<template>
  <div style="height:330px;width: 330px;display: flex;flex-direction:column; margin-left: 49px;">
    <h2 class="headPType"> YOUR BALANCE </h2> 
    <vue3-chart-js
        :id="doughnutChart.id"
        ref="chartRef"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
        :options="doughnutChart.options"
    ></vue3-chart-js>

    <button class="buttonM2" @click="updateChart"> Update Chart </button>

    <!-- Here {{ totalRequestEx }} {{ totalRequestIn }} -->

  </div>
</template>

<script>
import { ref } from 'vue'
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {

  props: ["totalRequestEx", "totalRequestIn"],

  name: 'App',
  components: {
    Vue3ChartJs,
  },
  setup (props) {
    
    const chartRef = ref(null)

    const doughnutChart = {
      id: 'doughnut',
      type: 'doughnut',
      data: {
        labels: ['Expences', 'Income'],
        datasets: [
          {
            backgroundColor: [
              '#9491be',
              '#d2aa87',
            ],
            data: [1, 1]
          }
        ]
      },
      options: {
        plugins: {}
      }
    }

    const updateChart = () => {
      doughnutChart.options.plugins.title = {
        text: 'Updated Chart',
        display: true
      }
      doughnutChart.data.labels = ['Expences', 'Income']
      doughnutChart.data.datasets = [
        {
          backgroundColor: [
            '#9491be',
            '#d2aa87',
          ],
          data: [props.totalRequestEx, props.totalRequestIn]
        }
      ]

      chartRef.value.update(250)
    }

    return {
      doughnutChart,
      updateChart,
      chartRef
    }
  },
}
</script>

<style scoped>

.headPType{

  margin-bottom: 10px;
  margin-top: 20px;

}

.buttonM2 {
  background-color: rgb(154, 117, 117);
  color: rgb(255, 255, 255);
  padding: 10px 30px;
  margin-top: 15px;
  margin-left: 90px;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
  border-radius: 20px;
  font-size: 16px;
}

.buttonM2:hover {

    background-color: rgb(169, 90, 90);

}


</style>