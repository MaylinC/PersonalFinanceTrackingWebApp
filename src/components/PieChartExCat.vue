<template>
  <h2 class="header"> Expense Category </h2>
  <div style="max-width: 325px">
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

  props: ["util", "rent", "ent", "shop","tra","tax","ins","edc","oth"],

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
        labels: ["Utilities", "Rent", "Entertainment", "Shopping","Travel","Taxes","Insurance","Education","Others"], 
        datasets: [
          {
            backgroundColor:  ["#dae0b8", "#fdb589", "#faf0f5","#5ac38d", "#9491be","#07b7c2", "#9491be","#ffd700","#0b5a5f"],
            data: [1,1,1,1,1,1,1,1,1],
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
      pieChart.data.labels = ["Utilities", "Rent", "Entertainment", "Shopping","Travel","Taxes","Insurance","Education","Others"], 
      pieChart.data.datasets = [
        {
          backgroundColor: ["#dae0b8", "#fdb589", "#faf0f5","#5ac38d", "#9491be","#07b7c2", "#9491be","#ffd700","#0b5a5f"],
          data: [props.util, props.rent,props.ent,props.shop, props.tra, props.tax, props.ins, props.edc, props.oth],  
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
  width: 50%;
  opacity: 0.9;
  border-radius: 20px;
  font-size: 16px;
  margin-bottom: 20px;   
}

.buttonM2:hover {

    background-color: rgb(169, 90, 90);

}

.header{

  margin-left: -400px; 
  margin-bottom: 20px     

}
</style>
