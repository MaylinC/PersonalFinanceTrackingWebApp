<template>
    <div class="backdrop"></div>
    <dialog open> 
        <slot></slot>
        <h1 class="head">Add ToDo Expence </h1>
        <p> {{ date }} {{ outputMonth }} {{ year }} </p>
        <hr>
        <form @submit.prevent="submitForm">  

            <label for="expence-category">Expence Category </label>
                <select class="select" id="expence-category" name="category" v-model="category" required>
                <option value="General Expenses"> General Expenses </option>
                <option value="Shopping"> Shopping </option>
                <option value="Utilities"> Utilities </option>
                <option value="Travel"> Travel </option>
                <option value="Others"> Others </option>
            </select>

            <br><br>    
            <label><b> <i class="fas fa-money-bill-alt" /> Expense </b></label> 
            <input type="text" name="expence" id="expence" v-model="expence" placeholder="Expense" required> 
            
            <br><br>    
            <!-- <label><b> <i class="fas fa-calendar-alt"/> Payment Type </b>    
            </label>  -->

            <label for="paymentType"> <i class="fas fa-calendar-alt"/> Payment Type </label>
                <select class="select" id="paymentType" name="paymentType" v-model="type" required>
                <option value="Cash"> Cash </option>
                <option value="Debit"> Debit Cards </option>
                <option value="Credit"> Credit Cards </option>
                <option value="Paypal"> Paypal </option>
                <option value="Check"> Check </option>
                <option value="Others"> Others </option>
            </select>   
          <!-- <input type="text" name="type" id="type" v-model="type" placeholder="Type " required>    
           -->
          <br><br> 


          <label><b> <i class="fas fa-sort-amount-up-alt"/> Amount </b>    
          </label>    
          <input type="text" name="amount" id="amount" v-model="amount" placeholder="Baht " required>    
          <br><br>   
          <button class="sub">Submit</button> 
        <button class="close" @click="closeModelDlg">Close</button>      
      </form>     
    </dialog> 

</template>

<script>

import AxiosService from "../services/AxiosService.js";

import { app } from "../main.js"; 

export default{

    name: "Popup",

    // inject: ["uName"], 

    props: ["year", "date", "outputMonth"],

    emits: ["dismiss-model-dialog"], 

    data() {
        return {
            expence: "",
            type:"", 
            amount:"",
            category:"", 
            uName:"",
            isFinish: "No", 
            statusForm: "planner"

        };
    },

    methods: {

        closeModelDlg() {
            this.$emit("dismiss-model-dialog", false); 
        },

        submitForm() {
            AxiosService.postPreRegisTry({ 
                statusForm: this.statusForm, 
                year: this.year,
                date: this.date,
                outputMonth: this.outputMonth, 
                expence: this.expence,
                type: this.type, 
                amount: this.amount,
                category: this.category,
                isFinish: this.isFinish, 
                uName: app.config.globalProperties.$displayName,        
            })
            .then((response) => {
                console.log(response.status);
            })
            .catch((error) => { 
                console.log(error);
            }); 

            this.expence = "", 
            this.type = "", 
            this.amount = "", 
            this.category = "", 
            this.isFinish = ""
        },
    },
}
</script>

<style scoped>

p {
    color: black;
}

.head {

margin-bottom: 10px;
font-size: 30px;
    
}

hr{
    margin-bottom: 20px
}
.backdrop{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0, 0.8);
    z-index: 5; 
}
dialog{
    background: rgb(255, 254, 254); 
    border: none;
    z-index: 50; 
    height: 57%;
    width: 30%; 
    padding: 10px;
    position: fixed;
    top: 40%;
    left: 35%;
    margin-top: -100px;
    margin-left: -10px;
    border-radius: 5px;
    color: rgb(0, 0, 0);
}

.close {
  background-color: #ffffff;
  color: rgb(16, 16, 16);
  padding: 5px 4px;
  /* margin-top: 2px; */
  margin: -10px ;
  border: none;
  cursor: pointer;
  width: 40%;
  opacity: 0.9;
  border-radius: 10px;
  font-size: 16px;
}

input[type=text], input[type=password] {
  width: 55%;
  padding: 12px 20px;
  margin: 3px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.select {
    width: 45%;
    padding: 12px 20px;
    margin: 3px 10px;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}


.close {
  background-color: #b53636;
  color: white;
  padding: 10px 30px;
  margin-top: 10px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
  border-radius: 0px;
  font-size: 16px;
}

.sub {
  background-color: #4f9437;
  color: white;
  padding: 10px 30px;
  margin-top: 10px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
  border-radius: 0px;
  font-size: 16px;
}

.sub:hover {
     background-color: #296118;
}

.close:hover {
     background-color: #911616;
}

</style>
