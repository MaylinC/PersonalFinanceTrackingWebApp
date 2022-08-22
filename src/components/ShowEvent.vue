<template>
  
  <div class="both">
    
    <div class="detailEvent">

    <div class="HeadCon">

      <div class="parent"> 
      
      <div class="IconDiv">  
        <a class="dollar" @click="ConvertDollar(totalRequest)">
        <i class="fas fa-dollar-sign" ></i>
        </a>
        <!-- <p class="inCal"> Click on an ICON to use a Calculator </p> -->
      </div>
       
      <div class="IconDiv">     
        <a class="thai" @click="ConvertThai()">
        <i class="fab fa-btc"></i>
        </a>
        <!-- <p class="inCal"> Click on an ICON to use a Calculator </p> -->
      </div>

      <div class="IconDiv">     
        <a class="euro" @click="ConvertEuro(totalRequest)">
         <i class="fas fa-euro-sign"></i>
        </a>
        <!-- <p class="inCal"> Click on an ICON to use a Calculator </p> -->
      </div>
      </div>


        <h4 class="head1">Total Amount Planned To Spend </h4>
        <h4 class="subhead" v-if="converBaht"> {{ totalRequest }} ฿ </h4>
        <h4 class="subhead" v-if="converDoll">{{ dollar }} $ </h4>
        <h4 class="subhead" v-if="converEuro">{{ Euro }} € </h4>
      
      </div>
      <br /><br />
      <h4 class="headA">{{ userName }}'s ToDo Expenses List </h4> 
      <br /><br />
  
      
      <!-- <button class="buttonM1 button6" @click="DeleteAll()"> Reset All </button>  -->
  
      <br /><br />
      <br /><br />
      <br /><br />
      <table id="customers">
        <thead>
          <tr>
            <!-- <th> Done </th> -->
            <th>Category</th>
            <th>Expence</th>
            <th>Payment Type</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in results" :key="result.id">
            <!-- <td ><input type="checkbox" @click="assignMarkFinish(result.id)"> {{ result.isFinish }}</td> -->
            <td>{{ result.category }}</td>
            <td>{{ result.expence }}</td>
            <td>{{ result.type }}</td>
            <td v-if="converBaht">{{ result.amount }} ฿ </td>
            <td v-if="converDoll">{{ parseFloat(result.amount/33.86).toFixed(2) }} $ </td>
            <td v-if="converEuro">{{ parseFloat(result.amount/38.31).toFixed(2) }} € </td>
            <td>
              {{ result.date }} {{ result.outputMonth }} {{ result.year }}
            </td>
            <td>
              <button class="buttonM1 button3" @click="DeleteItem(result.id) ">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>

    <div class="containerDou">
      <h2 class="head2">Category's Pie Chart</h2>
      <div
        style="
          height: 300px;
          width: 300px;
          display: flex;
          flex-direction: column;
        "
      >
        <vue3-chart-js
          :id="doughnutChart1.id"
          ref="chartRef1"
          :type="doughnutChart1.type"
          :data="doughnutChart1.data"
          :options="doughnutChart1.options"
        ></vue3-chart-js>
        <br /><br />
        <h>
          You can update charts once only, Please CHECK properly before you
          click update or you can revisite this page again.
        </h>
        <br /><br />

        <button class="buttonM2 button4" @click="updateChartCat">
          Update Chart
        </button>

      </div>

      <div
        style="
          height: 300px;
          width: 300px;
          display: flex;
          flex-direction: column;
          margin-top: -24%;
          margin-left: 30%;
        "
      >
      <h2 class="headPType"> PaymentType's Pie Chart</h2> 
        <br /><br />
        <vue3-chart-js
          :id="doughnutChart2.id"
          ref="chartRef2"
          :type="doughnutChart2.type"
          :data="doughnutChart2.data"
          :options="doughnutChart2.options"
        ></vue3-chart-js>
        <br /><br />
        <h>
          You can update charts once only, Please CHECK properly before you
          click update or you can revisite this page again.
        </h>
        <br /><br />

        <button class="buttonM2 button4" @click="updateChartType">
          Update Chart
        </button>

         <p class="stat">
          Category's Stat:
          <br><br>
          Utilities {{ util }}, Shopping {{ shop }}, General {{ gen }}, Travel {{ tra }}, Others {{ oth }}
          <!-- data {{ DataNoCategory }} -->
        </p>

        <p class="stat2">
          PaymentType's Stat:
          <br><br>
          Cash {{ cash }}, Debit {{ debit }}, Credit {{ credit }}, Paypal {{ pal }}, Checks {{ checks }}, Others {{ oth2 }}
          <!-- data {{ DataNoCategory }} -->
        </p>

      </div>
    </div>
  </div>
 
</template>

<script>
import AxiosService from "../services/AxiosService.js";
import { app } from "../main.js";
import axios from "axios";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { ref } from "vue";
// import EventPlanneer from "./EventPlanner.vue";

export default {
  components: {
    Vue3ChartJs
  },

  setup() {

    const chartRef1 = ref(null);

    const chartRef2 = ref(null);

    const doughnutChart1 = {
      id: "doughnut",
      type: "doughnut",
      data: {
        labels: ["Utilities", "Shopping", "General", "Travel", "Others"],
        datasets: [
          {
            backgroundColor: [
              "#41B883",
              "#d4af37",
              "#00D8FF",
              "#DD1B16",
              "#333333",
            ],
            data: [1, 1, 1, 1, 1],
          },
        ],
      },
      options: {
        plugins: {},
      },
    };

    const doughnutChart2 = {
      id: "doughnut",
      type: "doughnut",
      data: {
        labels: ["Cash", "Debit", "Credit", "Paypal", "Checks", "Others"],
        datasets: [
          {
            backgroundColor: [
              "#ffdd91",
              "#ea9999",
              "#839643",
              "#6f7096",
              "#c7370f",
              "#8b0d2a",

            ],
            data: [1, 1, 1, 1, 1, 1],
          },
        ],
      },
      options: {
        plugins: {},
      },
    };

    return {
      doughnutChart1,
      doughnutChart2,
      chartRef2,
      chartRef1,
    };
  },

  data() {
    return {
      userName: app.config.globalProperties.$displayName,
      results: [],
      arrCategory: [],
      DataNoCategory: [],
      DataNoType: [],
      util: "",
      shop: "",
      gen: "",
      tra: "",
      oth: "",
      cash: "",
      debit: "",
      credit: "",
      pal: "",
      checks: "",
      oth2: "",
      dollar: 0,
      Euro: 0, 
      thai: 0, 
      converBaht: true,  
      converDoll: false, 
      converEuro: false, 
      markIsFinish: false, 
      monthNames: ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"],
      actMonth: "", 
      actDay: "", 
      actYear: 0, 
    };
  },

  mounted() {
    this.getResult();
  },

  updated() {
    this.$nextTick(this.getResult());
  },

  computed: {
    totalRequest() {
      return this.results.reduce(
        (acc, item) => acc + parseFloat(item.amount),0
      );
    },
  },

  methods: {

    ConvertDollar(amount) {

        if (this.converBaht === true) {

            this.dollar = parseFloat(amount/33.86).toFixed(2); 
            this.converDoll = true; 
            this.converBaht = false; 
            this.converEuro = false;
        }
    },

    ConvertThai() {
        
        this.converBaht = true; 
        this.converDoll = false; 
        this.converEuro = false; 
    },

    ConvertEuro(amount) {

      if (this.converBaht === true) {

            this.Euro = parseFloat(amount/38.31).toFixed(2);
            this.converDoll = false; 
            this.converBaht = false; 
            this.converEuro = true; 
        }
    }, 

    getResult() {
      AxiosService.getPreRegis()
        .then((response) => {
          const data = response.data;
          const localArray = [];
          for (const frbId in data) {
            const anObj = {};
            anObj.id = frbId; // MokuGnqwgr5PnDXJ2asdfsa
            anObj.amount = data[frbId].amount;
            anObj.category = data[frbId].category;
            anObj.expence = data[frbId].expence;
            anObj.date = data[frbId].date;
            anObj.outputMonth = data[frbId].outputMonth;
            anObj.type = data[frbId].type;
            anObj.year = data[frbId].year;
            anObj.isFinish = data[frbId].isFinish;
            anObj.statusForm = data[frbId].statusForm;
            anObj.uName = data[frbId].uName;


            // alert(anObj.uName);
            // alert(this.userName);

            if (anObj.uName === this.userName && anObj.statusForm === "planner") {
              localArray.push(anObj);
            }
          }
          this.results = localArray;
          this.getStat();
        
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getStat() {
      // console.log( "im here 1", this.DataNoCategory);

      this.util = this.results.filter(
        (rec) => rec.category === "Utilities"
      ).length;

      this.shop = this.results.filter(
        (rec) => rec.category === "Shopping"
      ).length;

      this.gen = this.results.filter(
        (rec) => rec.category === "General"
      ).length;

      this.tra = this.results.filter((rec) => rec.category === "Travel").length;

      this.oth = this.results.filter((rec) => rec.category === "Others").length;

      this.cash = this.results.filter((rec) => rec.type === "Cash").length;

      this.debit = this.results.filter((rec) => rec.type === "Debit").length;

      this.credit = this.results.filter((rec) => rec.type === "Credit").length;

      this.pal = this.results.filter((rec) => rec.type === "Paypal").length;

      this.checks = this.results.filter((rec) => rec.type === "Checks").length;

      this.oth2 = this.results.filter((rec) => rec.type === "Others").length;

      // console.log("im here 2", this.DataNoCategory);
    },

    updateArr(util, shop, gen, tra, oth) {
      
      this.DataNoCategory.splice(0, 5);

      this.DataNoCategory.splice(0, 0, util);
      this.DataNoCategory.splice(1, 0, shop);
      this.DataNoCategory.splice(2, 0, gen);
      this.DataNoCategory.splice(3, 0, tra);
      this.DataNoCategory.splice(4, 0, oth);

      // console.log(this.DataNoCategory);
    },

    updateArrType(cash, debit, credit, pal, che, oth) {
      this.DataNoType.splice(0, 6);

      this.DataNoType.splice(0, 0, cash);
      this.DataNoType.splice(1, 0, debit);
      this.DataNoType.splice(2, 0, credit);
      this.DataNoType.splice(3, 0, pal);
      this.DataNoType.splice(4, 0, che);
      this.DataNoType.splice(5, 0, oth);

      // console.log(this.DataNoType);
    },

    updateChartCat() {

      this.updateArr(this.util, this.shop, this.gen, this.tra, this.oth);

      console.log(this.DataNoCategory);

      this.doughnutChart1.data.labels = [
        "Utilities",
        "Shopping",
        "General",
        "Travel",
        "Others",
      ];
      this.doughnutChart1.data.datasets = [
        {
          backgroundColor: [
            "#333333",
            "#E46651",
            "#00D8FF",
            "#DD1B16",
            "#41B883",
          ],
          data: this.DataNoCategory,
        },
      ];
      this.chartRef1.update(500);
    },

    updateChartType() {
      console.log(this.DataNoType);

      this.updateArrType(
        this.cash,
        this.debit,
        this.credit,
        this.pal,
        this.checks,
        this.oth2
      );

      this.doughnutChart2.data.labels = [
        "Cash",
        "Debit",
        "Credit",
        "Paypal",
        "Checks",
        "Others",
      ];
      this.doughnutChart2.data.datasets = [
        {
          backgroundColor: [
            "#333333",
            "#E46651",
            "#00D8FF",
            "#DD1B16",
            "#41B883",
          ],
          data: this.DataNoType,
        },
      ];
      this.chartRef2.update(500);
    },

    DeleteItem(doc) {
      AxiosService.getPreRegis()
        .then((response) => {
          const data = response.data;

          for (const frbId in data) {
            const anObj = {};
            anObj.id = frbId; // MokuGnqwgr5PnDXJ2asdfsa

            // console.log(" input ", doc);
            // console.log("get it out ", anObj.id);

            if (anObj.id === doc) {
              axios.delete(
                `https://iccs340project-85df8-default-rtdb.asia-southeast1.firebasedatabase.app/preregis/${doc}.json?auth=` +
                  app.config.globalProperties.$idToken,
                // { data: { params: doc } }
              );
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    DeleteAll() {
      AxiosService.getPreRegis()
        .then((response) => {
          const data = response.data;

          for (const frbId in data) {
            const anObj = {};
            anObj.id = frbId; // MokuGnqwgr5PnDXJ2asdfsa
            anObj.uName = data[frbId].uName;
            anObj.statusForm = data[frbId].statusForm;

            console.log(" input ", anObj.statusForm);
            console.log("get it out ", anObj.id);

            if (anObj.uName === this.userName && anObj.statusForm === "planner") {
              axios.delete(
                `https://iccs340project-85df8-default-rtdb.asia-southeast1.firebasedatabase.app/${frbId}.json?auth=` +
                  app.config.globalProperties.$idToken,
              );
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },



  },
};
</script>

<style scoped>


.IconDiv {

    display: inline-block;
    width: 10%;
    height: 30%;
    font-size: 30px;
    margin-left: -10px;
  
}

.parent {

  margin-left: 11px;
  margin-bottom: 10px;
  margin-top: 15px

}


.IconDiv:hover {

  color: rgb(43, 159, 53);
  
}

.HeadCon {
  border: 5px solid rgb(199, 178, 178);
  background-color: rgb(177, 147, 129);
  padding: 20px 20px;
  top: 10%;
  margin-top: -10px;
  margin-left: 270px;
  border-radius: 0px;
  width: 65%;
  height: 100px;
  color: white;
}

.HeadCon:hover {
  background-color: #c4b4af;
  color: white;
}

.head1 {
  color: black;
  font-family: "Trebuchet MS", sans-serif;
  /* font-family: 'Helvetica Neue', sans-serif;  */
  font-size: 25px;
  display: inline;
  
}

.headA {
  color: black;
  font-family: "Trebuchet MS", sans-serif;
  /* font-family: 'Helvetica Neue', sans-serif;  */
  font-size: 25px;
  display: inline;
  margin-left: 300px;
}

.subhead {
  color: rgb(252, 253, 254);
  font-family: "Trebuchet MS", sans-serif;
  font-size: 25px;
  display: inline;
}

.subhead:hover {
  color: #ad5034;
}

.detailEvent {
  padding: 160px;
  /* position: fixed; */
  top: 20%;
  left: 5%;
  margin-top: -32%;
  margin-left: 20%;
  border-radius: 0px;
}

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  padding: 10px;
  /* position: fixed; */
  top: 3%;
  left: 5%;
  margin-top: -110px;
  margin-left: 15%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #51655e;
  color: rgb(255, 255, 255);
}

.buttonM1 {
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 3px 2px;
  transition-duration: 0.2s;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5%;
}

.buttonM2 {
  border: none;
  color: white;
  width: 50%;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 3px 2px;
  margin-left: 25%;
  transition-duration: 0.2s;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5%;
}

.button3 {
  background-color: rgb(186, 48, 48);
  color: black;
  /* border: 2px solid rgb(211, 42, 42); */
}

.button6 {
  margin-left: 300px;
  background-color: rgb(171, 138, 138);
}

.button6:hover {

  background-color: rgb(122, 126, 142);
  color: rgb(244, 236, 236);
}


.button4 {
  background-color: rgb(122, 126, 142);
  color: black;
  margin-top: -10px;
  /* border: 2px solid rgb(211, 42, 42); */
}

.button3:hover {
  background-color: #f44336;
  color: white;
}

.button4:hover {
  background-color: #b5abaa;
  color: white;
}

.containerDou {
  height: 73vh;
  width: 99%;
  background-color: #d3c3c3;
  background-position: center;
  background-size: cover;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  /* position: relative; */
  position: absolute;
  margin-top: 20px;
  margin-bottom: 30px;

}

.stat {
  border: 5px solid rgb(255, 247, 247);
  background-color: rgb(184, 150, 99);
  padding: 20px;
  left: -30%;
  margin-top: -500px;
  margin-left: 500px;
  border-radius: 0px;
  width: 90%;
  height: 50%;
  color: rgb(255, 253, 250);
  font-size: 20px;
}

.stat2 {
  border: 5px solid rgb(255, 247, 247);
  background-color: rgb(174, 144, 98);
  padding: 20px;
  left: -30%;
  margin-top: 100px;
  margin-left: 500px;
  border-radius: 0px;
  width: 90%;
  height: 50%;
  color: rgb(255, 250, 250);
  font-size: 20px;
}


.head2 {
  margin-left: -930px;
  margin-bottom: 47px;
  margin-top: 25px;

}

.both {
  margin-top: 25px;
  padding: 10px;
}

.headPType {

  margin-top: -74px;
  margin-left: -30px;

}

</style>
