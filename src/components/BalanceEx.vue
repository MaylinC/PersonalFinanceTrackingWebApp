<template>

<div class="ContaineOut"> 
    
    <div class="parent"> 

    <h4 class="currency" style="font-size: 20px"> CHOOSE YOUR CURRENCY </h4> 
      <hr style="border: 3px solid rgb(90, 94, 97); margin-bottom: 10px; margin-top: 10px"> 
      <div class="IconDiv">  
        <a class="dollar" @click="ConvertDollar(totalRequestEx)">
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
        <a class="euro" @click="ConvertEuro(totalRequestEx)">
         <i class="fas fa-euro-sign"></i>
        </a>
        <!-- <p class="inCal"> Click on an ICON to use a Calculator </p> -->
      </div>
    </div>

    <div class="incomeForm"> 
        <h4 class="headEx"> Total Expenses </h4> 
        <a style="font-size: 20px;" @click=" toggleShowDescFlag">
        <i class="fas fa-chevron-down">
        </i> </a>
        <div v-if="showExpenses">
        <div class="container1">
                <div class="init">
                    <h4 class="subhead" v-if="converBaht"> {{ totalRequestEx }} ฿ </h4>
                    <h4 class="subhead" v-if="converDoll">{{ dollarEx }} $ </h4>
                    <h4 class="subhead" v-if="converEuro">{{ EuroEx }} € </h4>
                </div>
        </div> 
        </div>
    </div>
    <button class="close" @click="sendingItem"> Update </button> 
</div> 

<!-- <doughnut-chart :totalRequestEx="totalRequestEx"></doughnut-chart> -->
  
</template>

<script>

import AxiosService from "../services/AxiosService.js";
import { app } from "../main.js";
// import DoughnutChart from "./DoughnutChart.vue"; 
// import Dashboard from './Dashboard.vue';

export default {
    
    // components: { DoughnutChart },

    emits: ["sending-data"], 

    data() {
        return {
            userName: app.config.globalProperties.$displayName,
            resultsExpense: [], 
            DataNumMonth: [],
            converBaht: true,  
            converDoll: false, 
            converEuro: false, 
            dollarEx: 0,
            EuroEx: 0,  
            thaiEx: 0,  
            showExpenses: false,
            jan: 0, 
            feb: 0, 
            mar: 0, 
            apr: 0,
            may: 0,
            june: 0,
            july: 0,
            aug: 0,
            sep: 0,
            oct: 0,
            nov: 0,
            dec: 0,
            cash: "", 
            debit: "", 
            credit: "", 
            paypal: "",
            checks: "", 
            others: "", 
            util:"",  
            rent:"", 
            ent:"", 
            shop:"",
            tra:"",
            tax:"", 
            ins:"",
            edc:"", 
            oth:"", 
                    

        } 
    },

    mounted() {
        this.getResultExpences(); 
    },

    updated() {
        this.$nextTick(this.getResultExpences());
    },

    computed: {

        totalRequestEx() {
            return this.resultsExpense.reduce(
                (acc, item) => acc + parseFloat(item.amountEx),0
            );
        },
    }, 

    methods: {

        toggleShowDescFlag() {

            this.showExpenses = !this.showExpenses;
        },

        sendingItem () {
              
            this.$emit('sending-data', this.totalRequestEx, 
                        this.jan, 
                        this.feb, 
                        this.mar,
                        this.apr,
                        this.may,
                        this.june,
                        this.july,
                        this.aug,
                        this.sep,
                        this.oct,
                        this.nov, 
                        this.dec,

                        this.cash,
                        this.debit, 
                        this.credit, 
                        this.paypal,
                        this.checks, 
                        this.others, 

                        this.util, 
                        this.rent, 
                        this.ent, 
                        this.shop,
                        this.tra,
                        this.tax, 
                        this.ins,
                        this.edc, 
                        this.oth, 
                    

                    ) 
        },

        ConvertDollar(out) {

            if (this.converBaht === true) {

                this.dollarEx = parseFloat(out/33.86).toFixed(2);
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

        ConvertEuro( out) {

            if (this.converBaht === true) {

                this.EuroEx = parseFloat(out/38.31).toFixed(2);
                this.converDoll = false; 
                this.converBaht = false; 
                this.converEuro = true; 
            }
        }, 

        getResultExpences() {
            AxiosService.getPreRegis()
                .then((response) => {
                const data = response.data;
                const localArray = [];
                for (const frbId in data) {
                    const anObj = {};
                    anObj.id = frbId; // MokuGnqwgr5PnDXJ2asdfsa
                    anObj.monthEx = data[frbId].monthEx;
                    anObj.amountEx = data[frbId].amountEx;
                    anObj.expence = data[frbId].expence
                    anObj.statusFormEx = data[frbId].statusFormEx;
                    anObj.uName = data[frbId].uName;
                    anObj.typeEx = data[frbId].typeEx; 

                    // console.log(anObj.uName);
                    // console.log(data[frbId].uName);

                    if (anObj.uName === this.userName && anObj.statusFormEx === "expence") {
                    localArray.push(anObj);
                    }
                }
                this.resultsExpense = localArray;
                this.getStat();
                })
                .catch((error) => {
                console.log(error);
                });
        },

        getStat() { 

            // console.log( "im here 1", this.DataNoCategory);

            this.jan = this.resultsExpense.filter((rec) => rec.monthEx === "January").length;
            this.feb = this.resultsExpense.filter((rec) => rec.monthEx === "February").length;
            this.mar = this.resultsExpense.filter((rec) => rec.monthEx === "March").length;
            this.apr = this.resultsExpense.filter((rec) => rec.monthEx === "April").length;
            this.may = this.resultsExpense.filter((rec) => rec.monthEx === "May").length;
            this.june = this.resultsExpense.filter((rec) => rec.monthEx === "June").length;
            this.july = this.resultsExpense.filter((rec) => rec.monthEx === "July").length;
            this.aug = this.resultsExpense.filter((rec) => rec.monthEx === "August").length;
            this.sep = this.resultsExpense.filter((rec) => rec.monthEx === "September").length;
            this.oct = this.resultsExpense.filter((rec) => rec.monthEx === "October").length;
            this.nov = this.resultsExpense.filter((rec) => rec.monthEx === "November").length;
            this.dec = this.resultsExpense.filter((rec) => rec.monthEx === "December").length;

            this.cash = this.resultsExpense.filter((rec) => rec.typeEx === "Cash").length;
            this.debit = this.resultsExpense.filter((rec) => rec.typeEx === "Debit").length;
            this.credit = this.resultsExpense.filter((rec) => rec.typeEx === "Credit").length;
            this.paypal = this.resultsExpense.filter((rec) => rec.typeEx === "Paypal").length;
            this.checks = this.resultsExpense.filter((rec) => rec.typeEx === "Checks").length;  
            this.others = this.resultsExpense.filter((rec) => rec.typeEx === "Others").length;

            this.util = this.resultsExpense.filter((rec) => rec.expence === "Utilities").length;
            this.rent = this.resultsExpense.filter((rec) => rec.expence === "Rent").length;
            this.ent = this.resultsExpense.filter((rec) => rec.expence === "Entertainment").length;
            this.shop = this.resultsExpense.filter((rec) => rec.expence === "Shopping").length;
            this.tra = this.resultsExpense.filter((rec) => rec.expence === "Travel").length;
            this.tax = this.resultsExpense.filter((rec) => rec.expence === "Taxes").length;
            this.ins = this.resultsExpense.filter((rec) => rec.expence === "Insurance").length;
            this.edc = this.resultsExpense.filter((rec) => rec.expence === "Education").length;
            this.oth = this.resultsExpense.filter((rec) => rec.expence === "Others").length;
         

        }
    }
}

</script>

<style scoped>

.close {

    background-color: rgb(237, 222, 222);
  color: black;
  padding: 10px 30px;
  margin-top: 10px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
  border-radius: 20px;
  font-size: 16px;
}

.close:hover {
    background-color: rgb(208, 152, 152);   
}

.incomeForm {
  width: 320px;
  margin-left: 4px;
  /* margin: 1rem; */
  margin-top: 15px;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 5px;
  background: rgb(122, 147, 163);
  color: white;
}

.IconDiv {
    
    display: inline-block;
    width: 20%;
    height: 30%;
    font-size: 30px;
    margin-top: 7px;
    
}

.parent {

    /* border: 3px solid rgb(176, 176, 176); */
    /* background-color: rgb(90, 94, 97); */
    padding: 10px;
    top: 10%;
    left: 40%;
    margin-top: -10px;
    margin-left: 10px;
    border-radius: 10px;
    height: 90px;
    width: 300px;


}

.headEx {
    margin-left: 25px;
    font-size: 30px;
    margin-top: 20px;
}
.subhead {

    margin-left: 25px;
    font-size: 37px;

}

.IconDiv:hover {

  color: rgb(47, 131, 220);
  
}

.headEx:hover {
    color: red;
}


.ContaineOut {

    /* border: 5px solid rgb(237, 208, 208); */
    background-color: rgb(145, 132, 132);
    color: white;
    padding: 50px;
    /* position: ; */
    top: 10%;
    left: 30%;
    margin-top: 50px;
    margin-left: 900px;
    border-radius: 10px;
    height: 375px;
    width: 31%; 

}


</style>