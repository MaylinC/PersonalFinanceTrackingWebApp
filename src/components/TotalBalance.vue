<template>

    <div class="ContaineOut"> 

        <div class="parent"> 
        <h4 class="currency" style="font-size: 20px"> CHOOSE YOUR CURRENCY </h4> 
        <hr style="border: 3px solid rgb(90, 94, 97); margin-bottom: 10px; margin-top: 10px"> 
        <div class="IconDiv">  
            <a class="dollar" @click="ConvertDollar(totalRequestIn)">
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
            <a class="euro" @click="ConvertEuro(totalRequestIn)">
            <i class="fas fa-euro-sign"></i>
            </a>
            <!-- <p class="inCal"> Click on an ICON to use a Calculator </p> -->
        </div>
        </div>

        <div class="incomeForm"> 
            <h4 class="headIn"> Total Income Earned </h4> 
            <a style="font-size: 20px;" @click="toggleShowDescFlag">
            <i class="fas fa-chevron-down">
            </i> </a>
            <div v-if="showIncome">
            <div class="container1">
                <div class="init">
                    <h4 class="subhead" v-if="converBaht"> {{ totalRequestIn }} ฿ </h4>
                    <h4 class="subhead" v-if="converDoll">{{ dollarIn }} $ </h4>
                    <h4 class="subhead" v-if="converEuro">{{ EuroIn }} € </h4>
                </div>
            </div>
            </div>
        </div>
        <button class="close" @click="sendingItem"> Update </button>  
    </div> 
    
</template>

<script>

import AxiosService from "../services/AxiosService.js";
import { app } from "../main.js";
// import axios from "axios";
// import DoughnutChart from "./DoughnutChart.vue"; 

export default {

    // components: { DoughnutChart }, 

    emits: ["sending-data"],


    data() {
        return {
            userName: app.config.globalProperties.$displayName,
            resultsIncome: [], 
            resultsExpense: [], 
            currency: "",  
            converBaht: true,  
            converDoll: false, 
            converEuro: false, 
            dollarIn: 0,
            EuroIn: 0,
            thaiIn: 0,
            showIncome: false, 
            janIn: 0, 
            febIn: 0, 
            marIn: 0, 
            aprIn: 0,
            mayIn: 0,
            juneIn: 0,
            julyIn: 0,
            augIn: 0,
            sepIn: 0,
            octIn: 0,
            novIn: 0,
            decIn: 0,

            cashIn: "", 
            debitIn: "", 
            creditIn: "", 
            paypalIn: "",
            checksIn: "", 
            othersIn: "",

            bo:"",
            extr:"",
            pen:"",
            sal:"",
            aol:"",
            com:"",
            gif:"",
            int:"",
            othIn:"",
     
        } 
    },

    mounted() {
        this.getResultIncome();
    },

    updated() {
        this.$nextTick(this.getResultIncome());

    },

    computed: {
        totalRequestIn() {
            return this.resultsIncome.reduce(
                (acc, item) => acc + parseFloat(item.amountIn),0
            );
        },
    },

    methods: {

        toggleShowDescFlag() {
            this.showIncome = !this.showIncome;
        },

        sendingItem () {
            
            
            this.$emit('sending-data', this.totalRequestIn, 
                        this.janIn, 
                        this.febIn, 
                        this.marIn,
                        this.aprIn,
                        this.mayIn,
                        this.juneIn,
                        this.julyIn,
                        this.augIn,
                        this.sepIn,
                        this.octIn,
                        this.novIn, 
                        this.decIn,

                        this.cashIn,
                        this.debitIn, 
                        this.creditIn, 
                        this.paypalIn,
                        this.checksIn, 
                        this.othersIn,

                        this.bo,
                        this.extr,
                        this.pen,
                        this.sal,
                        this.aol,
                        this.com,
                        this.gif,
                        this.int,
                        this.othIn)

        },

        ConvertDollar(In) {

            if (this.converBaht === true) {

                this.dollarIn = parseFloat(In/33.86).toFixed(2);
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

        ConvertEuro(In) {

            if (this.converBaht === true) {

                this.EuroIn = parseFloat(In/38.31).toFixed(2);
                this.converDoll = false; 
                this.converBaht = false; 
                this.converEuro = true; 
            }
        }, 

        getResultIncome() {
            AxiosService.getPreRegis()
                .then((response) => {
                const data = response.data;
                const localArray = [];
                for (const frbId in data) {
                    const anObj = {};
                    anObj.id = frbId; // MokuGnqwgr5PnDXJ2asdfsa
                    anObj.amountIn = data[frbId].amountIn;
                    anObj.income = data[frbId].income;
                    anObj.monthIn = data[frbId].monthIn; 
                    anObj.typeIn = data[frbId].typeIn; 
                    anObj.statusFormIn = data[frbId].statusFormIn;
                    anObj.uName = data[frbId].uName;


                    // console.log(anObj.uName);
                    // console.log(data[frbId].uName);
                    

                    if (anObj.uName === this.userName && anObj.statusFormIn === "income") {
                    localArray.push(anObj);
                    }
                }
                this.resultsIncome = localArray;
                this.getStat();
                })
                .catch((error) => {
                console.log(error);
                });
        },

        getStat() { 

            // console.log( "im here 1", this.DataNoCategory);

            this.janIn = this.resultsIncome.filter((rec) => rec.monthIn === "January").length;
            this.febIn = this.resultsIncome.filter((rec) => rec.monthIn === "February").length;
            this.marIn = this.resultsIncome.filter((rec) => rec.monthIn === "March").length;
            this.aprIn = this.resultsIncome.filter((rec) => rec.monthIn === "April").length;
            this.mayIn = this.resultsIncome.filter((rec) => rec.monthIn === "May").length;
            this.juneIn = this.resultsIncome.filter((rec) => rec.monthIn === "June").length;
            this.julyIn = this.resultsIncome.filter((rec) => rec.monthIn === "July").length;
            this.augIn = this.resultsIncome.filter((rec) => rec.monthIn === "August").length;
            this.sepIn = this.resultsIncome.filter((rec) => rec.monthIn === "September").length;
            this.octIn = this.resultsIncome.filter((rec) => rec.monthIn === "October").length;
            this.novIn = this.resultsIncome.filter((rec) => rec.monthIn === "November").length;
            this.decIn = this.resultsIncome.filter((rec) => rec.monthIn === "December").length;

            this.cashIn = this.resultsIncome.filter((rec) => rec.typeIn === "Cash").length;
            this.debitIn = this.resultsIncome.filter((rec) => rec.typeIn === "Debit").length;
            this.creditIn = this.resultsIncome.filter((rec) => rec.typeIn === "Credit").length;
            this.paypalIn = this.resultsIncome.filter((rec) => rec.typeIn === "Paypal").length;
            this.checksIn = this.resultsIncome.filter((rec) => rec.typeIn === "Checks").length;  
            this.othersIn = this.resultsIncome.filter((rec) => rec.typeIn === "Others").length;

            this.bo = this.resultsIncome.filter((rec) => rec.income === "Bonus").length;
            this.extr = this.resultsIncome.filter((rec) => rec.income === "Extra Hours").length;
            this.pen = this.resultsIncome.filter((rec) => rec.income === "Pension").length;
            this.sal = this.resultsIncome.filter((rec) => rec.income === "Salary").length;
            this.aol = this.resultsIncome.filter((rec) => rec.income === "Allowance").length;
            this.com = this.resultsIncome.filter((rec) => rec.income === "Commission").length;
            this.gif = this.resultsIncome.filter((rec) => rec.income === "Gifts").length;
            this.int = this.resultsIncome.filter((rec) => rec.income === "Interest").length;
            this.othIn = this.resultsIncome.filter((rec) => rec.income === "Others").length;

        }

    }


}
</script>

<style scoped>

.close {
  background-color: #796464;
  color: white;
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
    background-color: rgb(138, 86, 86);   
}

.incomeForm {
  width: 320px;
  margin-left: -10px;
  /* margin: 1rem; */
  margin-top: 15px;
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
    margin-top: -10px;
    
}

.parent {

    /* border: 3px solid rgb(176, 176, 176); */
    /* background-color: rgb(90, 94, 97); */
    padding: 10px;
    top: 10%;
    left: 40%;
    margin-top: -30px;
    margin-left: -8px;
    border-radius: 10px;
    height: 90px;
    width: 300px;


}


.IconDiv:hover {

  color: rgb(47, 131, 220);
  
}

.totalEarn{
    margin-top: 30px;
}

.headIn{
    margin-top: 15px;
    font-size: 30px;
    margin-bottom: -15px;
}

.headIn:hover {
    color: green;
}


.ContaineOut {

    /* border: 5px solid rgb(237, 208, 208); */
    background-color: rgb(237, 222, 222);
    padding: 50px;
    /* position: fixed; */
    top: 15%;
    left: 30%;
    margin-top: 20px;
    margin-left: 100px;
    border-radius: 10px;
    height: 350px;
    width: 73%; 

}


</style>