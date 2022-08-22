<template>

    <div class="navbar">
        
        <router-link :to="'/Dashboard'" class="link" :class=" { active: isActive }">
        <i class="fa fa-fw fa-home"/>
        Dashboard
        </router-link> 

        <router-link :to="'/eventplanner'" class="link" :class=" { active: isActive }">
        <i class="fas fa-calendar-alt" /> 
        Finance Planner
        </router-link> 

        <router-link :to="'/expenses'" class="link" :class=" { active: isActive }">  
        <i class="fas fa-money-bill-alt" />
        Expences
        </router-link> 

        <router-link :to="'/logout'" class="link" :class=" { active: isActive }">  
        <i class="fas fa-sign-out-alt"></i>
        Logout
        </router-link> 

        <!-- @click="notification" -->
        
        <div class="Notifi" @click="notification_two" >  
        <i class="fas fa-bell"></i>
        Notification
        </div> 

        <notifications group="ToDo" width="30%"/>

        <notifications group="NoToDo" width="30%"/>

        <notifications group="ToDoClick" width="30%"/>
        
        <p class="user" > <i class="fas fa-user"></i> {{ userName }} </p>

        <router-view></router-view>
    </div>
</template>

<script>

import { app } from "../main.js"; 
import AxiosService from "../services/AxiosService.js";

export default {
  
  data() {
    
    return {
      userName: app.config.globalProperties.$displayName,
      actMonth: "", 
      actDay: "", 
      actYear: 0, 
      monthNames: ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"],
      results: [], 
      toDo: false,  
    };

  },

  mounted() {
    this.getResult();
  },

  updated() {
    this.getResult();
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

            if (anObj.uName === this.userName && anObj.statusForm === "planner") {
              localArray.push(anObj);
            }
          }
          this.results = localArray;
          this.notification_one();

        })
        .catch((error) => {
          console.log(error);
        });
    }, 

    currentMonth() {
        const current = new Date();
        const month = this.monthNames[current.getMonth()];
        const date = `${current.getDate()}`; 
        const year = current.getFullYear(); 
        this.actMonth = month;
        this.actDay = date; 
        this.actYear = year; 
        console.log( "year", this.actYear);
        console.log( "month", this.actMonth);
        console.log( "date", this.actDay);

    }, 
      
    notification_one() {
        this.currentMonth(); 
        for (let i = 0; i < this.results.length; i++ ) { 
          if (this.results[i].outputMonth === this.actMonth && this.results[i].date === this.actDay && this.results[i].year === this.actYear) {
            this.toDo = true;  
            return this.$notify({group: 'ToDo', title:'Planner Notification', text: "Please Check Your TO-DO Planner, There's some Payment you have to do TODAY", type: 'warn'});
          }
        }
    },

    notification_two() {

      if (this.toDo === false) {
        return this.$notify({group: 'NoToDo', title:'Planner Notification', text: "No Payment you have to do in TO-DO list TODAY", type: 'warn'});
      }
      else {
        return this.$notify({group: 'ToDoClick', title:'Planner Notification', text: "Please Check Your TO-DO Planner, There's some Payment you have to do TODAY", type: 'warn'});
      }
    }
  }, 
} 
</script>

<style scoped>

.Notifi {

  margin-top: 13px ;
  color: white;
  font-size: 17px;
  margin-left: 10px;
  float: left;
}

.Notifi:hover {
  background-color: rgb(211, 60, 60);
  width: 120px;
  height: 130px;
  margin-top: 1px;
  margin-bottom: 1px;
}

.user {
  font-family: Arial, Helvetica, sans-serif;
  float: right;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
}

body {font-family: Arial, Helvetica, sans-serif;}

.navbar {
  width: 100%;
  background-color: #555;
  overflow: auto;
  height: 49px;
  
}

.navbar a {
  /* margin-top: 1%; */
  float: left;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background-color: rgb(25, 147, 62);

}

.active {
  background-color: #04AA6D;

}

@media screen and (max-width: 500px) {
  .navbar a {
    float: none;
    display: block;
  }
}

</style>