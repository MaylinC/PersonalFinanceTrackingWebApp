<template>

<div class="both">

<div class="detailEvent">

    <h2 class="header" v-if="converBaht"> {{ userName }}'s All Expenses: {{ totalRequest }} ฿ </h2> 
    <h2 class="header" v-if="converDoll"> {{ userName }}'s All Expenses: {{ dollar }} $ </h2> 
    <h2 class="header" v-if="converEuro"> {{ userName }}'s All Expenses: {{ Euro }} € </h2>   

      <div class="parent"> 
      <h3 class="currency"> Optimize your Currency:  </h3>  
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

<table id="customers">
        <thead>
          <tr>
            <!-- <th> Done </th> -->
            <th>Expence</th>
            <th>Amount</th>
            <th>Payment Type</th>
            <th>Date</th>
            <th>Month</th>
            <th>Year</th>
            <th>Description</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in results" :key="result.id">
            <!-- <td ><input type="checkbox" @click="assignMarkFinish(result.id)"> {{ result.isFinish }}</td> -->
            <td>{{ result.expence }}</td>
            <td v-if="converBaht">{{ result.amountEx }} ฿ </td>
            <td v-if="converDoll">{{ parseFloat(result.amountEx/33.86).toFixed(2) }} $ </td>
            <td v-if="converEuro">{{ parseFloat(result.amountEx/38.31).toFixed(2) }} € </td>
            <td> {{ result.typeEx }} </td>
            <td> {{ result.dayEx }} </td> 
            <td> {{ result.monthEx }} </td> 
            <td> {{ result.yearEx }} </td> 
            <td> {{ result.descriptionEx }} </td> 
            <td>
              <button class="buttonM1 button3" @click="DeleteItem(result.id) ">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
</div>
</div>
  
</template>

<script>

import AxiosService from "../services/AxiosService.js";
import { app } from "../main.js";
import axios from "axios";

export default {

    data() {
    
        return {
            userName: app.config.globalProperties.$displayName,
            results: [],
            dollar: 0,
            Euro: 0, 
            thai: 0, 
            converBaht: true,  
            converDoll: false, 
            converEuro: false, 
            currentSort:'name',
            currentSortDir:'asc', 

            sort: {
                key: '',
                isAsc: false
            },


        }
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
                (acc, item) => acc + parseFloat(item.amountEx),0
            );
        },
    },

    methods: { 
 
        getResult() {
            AxiosService.getPreRegis()
            .then((response) => {
                const data = response.data;
                const localArray = [];
                for (const frbId in data) {
                    const anObj = {};
                    anObj.id = frbId; // MokuGnqwgr5PnDXJ2asdfsa
                    anObj.expence = data[frbId].expence;
                    anObj.amountEx = data[frbId].amountEx;
                    anObj.typeEx = data[frbId].typeEx;
                    anObj.monthEx = data[frbId].monthEx;
                    anObj.dayEx = data[frbId].dayEx;
                    anObj.yearEx = data[frbId].yearEx;
                    anObj.descriptionEx = data[frbId].descriptionEx;
                    anObj.statusFormEx = data[frbId].statusFormEx;
                    anObj.uName = data[frbId].uName;

                    if (anObj.uName === this.userName && anObj.statusFormEx === "expence") {
                    localArray.push(anObj);
                    }
                }
                this.results = localArray;
                })
                .catch((error) => {
                console.log(error);
                });
        },

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
    
    },

}
</script>

<style scoped>


#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 1350px;
  padding: 20px;
  /* position: fixed; */
  top: 3%;
  left: 5%;
  margin-top: 20px;
  margin-left: 50px;
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
  background-color: #515f82;
  color: rgb(255, 255, 255);
}

.currency {
  margin-left: -400px;
  margin-top: 50px;
  margin-bottom: -30px;
  font-size: 20px;
}

.IconDiv {
    
    display: inline-block;
    width: 10%;
    height: 30%;
    font-size: 25px;
    margin-left: 20px;
}

.parent {

  margin-left: 1170px;

}

.IconDiv:hover {

  color: rgb(43, 159, 53);
  
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

.button3 {
  background-color: rgb(186, 48, 48);
  color: black;
  /* border: 2px solid rgb(211, 42, 42); */
}

.header {
    margin-left: -1000px;
    margin-top: 100px;
    margin-bottom: -80px;
}
</style>