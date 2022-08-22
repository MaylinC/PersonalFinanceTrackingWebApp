<template>
  <h2 class="header"> Income Receive Type </h2>
  <div style="max-width: 300px">
    <vue3-chart-js :id="pieChart.id"
        ref="chartRef"
        :type="pieChart.type"
        :data="pieChart.data"
        :options="pieChart.options"
    ></vue3-chart-js>

    <button class="buttonM2" @click="updateChart"> Update Chart </button>
  
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { ref } from 'vue'; 

export default {

  props: ["cashIn", "debitIn", "creditIn", "paypalIn","checksIn","othersIn"], 

  name: "App",
  components: {
    Vue3ChartJs,
  },

  setup(props) {

    const chartRef = ref(null)

    const pieChart = {
      id: "pie", 
      type: "pie",
      data: {
        labels: ["Cash", "Debit", "Credit", "Paypal", "Checks", "Others"],
        datasets: [
          {
            backgroundColor:  ["#faf0f5", "#d4af37", "#d2aa87","#c0c0c0", "#5ac38d","#dddec3"],
            data: [1,1,1,1,1,1],
          },
        ],
      },
      options: {
        plugins: {}
      }
    };

     const updateChart = () => {
      pieChart.options.plugins.title = {
        text: 'Updated Chart',
        display: true
      }
      pieChart.data.labels = ["Cash", "Debit", "Credit", "Paypal", "Checks", "Others"],
      pieChart.data.datasets = [
        {
          backgroundColor: ["#faf0f5", "#d4af37", "#d2aa87","#c0c0c0", "#5ac38d","#dddec3"],
          data: [props.cashIn, props.debitIn,props.creditIn,props.paypalIn, props.checksIn, props.othersIn],  
        }
      ]

      chartRef.value.update(250)
    }

    return {
      pieChart,
      updateChart,
      chartRef
    };
  },
};
</script>

<style scoped>
.buttonM2 {
  background-color: rgb(154, 117, 117);
  color: black;
  padding: 10px 30px;
  margin-top: 15px;
  margin-left: 1px;
  border: none;
  cursor: pointer;
  width: 55%;
  opacity: 0.9;
  border-radius: 20px;
  font-size: 16px;
  margin-bottom: 20px;   
}

.buttonM2:hover {

    background-color: rgb(169, 90, 90);

}

.header{

  margin-left: -750px; 
  margin-bottom: 20px     

}
</style>
