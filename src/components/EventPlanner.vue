<template>
    <after-login-navbar></after-login-navbar>
    <div class="month">      
    <ul>
        <li class="prev">  <button type="button" class="but1" @click="getPrevMonth"> <i class="fas fa-chevron-left"></i> </button> </li>
        <li class="next"> <button type="button" class="but2" @click="getNextMonth"> <i class="fas fa-chevron-right"></i> </button> </li>
        <li>
        {{ outputMonth }}<br>
        <span style="font-size:18px"> {{currentDate()}} {{ outPutShort }} {{ year }}</span>
        </li>
    </ul>
    <br><br>
    <p> <i class="fas fa-mouse"></i>  Click the date on the calender in order to plan your to-do expences <i class="fas fa-mouse"></i> </p>
    </div>
    <ul class="weekdays">
    <li>Mo</li>
    <li>Tu</li>
    <li>We</li>
    <li>Th</li>
    <li>Fr</li>
    <li>Sa</li>
    <li>Su</li>
    </ul>

    <pop-up @dismiss-model-dialog="dissmissPopUp" :outputMonth="outputMonth" :year="year" :date="date"  :results="date"  v-if="clicking"></pop-up>
    
    <ul class="days">
        <li class="prevDate" style="color: grey">29</li>
        <li class="prevDate" style="color: grey">30</li>
        <li type="button" @click="pop('1')"> 1 </li>
        <li type="button" @click="pop('2')">2</li>
        <li type="button" @click="pop('3')">3</li>
        <li type="button" @click="pop('4')">4</li>
        <li type="button" @click="pop('5')">5</li>
        <li type="button" @click="pop('6')">6</li>
        <li type="button" @click="pop('7')">7</li>
        <li type="button" @click="pop('8')">8</li>
        <li type="button" @click="pop('9')">9</li>
        <li type="button" @click="pop('10')">10</li>
        <li type="button" @click="pop('11')">11</li>
        <li type="button" @click="pop('12')">12</li>
        <li type="button" @click="pop('13')">13</li>
        <li type="button" @click="pop('14')">14</li>
        <li type="button" @click="pop('15')">15</li>
        <li type="button" @click="pop('16')">16</li>
        <li type="button" @click="pop('17')">17</li>
        <li type="button" @click="pop('18')">18</li>
        <li type="button" @click="pop('19')">19</li>
        <li type="button" @click="pop('20')">20</li>
        <li type="button" @click="pop('21')">21</li>
        <li type="button" @click="pop('22')">22</li>
        <li type="button" @click="pop('23')">23</li>
        <li type="button" @click="pop('24')">24</li>
        <li type="button" @click="pop('25')">25</li>
        <li type="button" @click="pop('26')">26</li>
        <li type="button" @click="pop('27')">27</li>
        <li type="button" @click="pop('28')">28</li>
        <li type="button" @click="pop('29')">29</li>
        <li type="button" @click="pop('30')">30</li>
        <li type="button" @click="pop('31')">31</li>
        <li class="nextDate" style="color: grey">1</li>
        <li class="nextDate" style="color: grey">2</li>  
    </ul>
    
    <div class="calculator3">
        <div class="container3">
                <calculator></calculator>
        </div>
    </div>

    <div class="showevent">   
      <show-event></show-event>
    </div>
</template>


<script>
import PopUp from "./Popup.vue"
import AfterLoginNavbar from './AfterLoginNavbar.vue'; 
import Calculator from './Calculator.vue';
import ShowEvent from './ShowEvent.vue';
export default {
    
    name: "EventPlanneer", 

    components: {
        PopUp, AfterLoginNavbar, Calculator, ShowEvent
    }, 
     data() {
        return { 
        
            months: ["January", "February","March","April","May","June", 
                    "July", "August", "September", "Ocbtober", "November", "December"],
            short: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
            year: 2021,
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        
            outputMonth: "December", 
            outputDay: "Fri",
            outPutShort: "Dec", 
            
            date:"",
            clicking: false, 
            emResult: [], 
        }    
    }, 
    methods: {
        getNextMonth() {
            let index = this.months.indexOf(this.outputMonth); 
            if (index < this.months.length-1) {
                index++; 
                this.outputMonth = this.months[index]; 
                this.outPutShort = this.short[index]     
            } 
            else {
                index = 0; 
                this.outputMonth = this.months[index]; 
                this.outPutShort = this.short[index]; 
                this.year++; 
            }
        }, 
        getPrevMonth() {
            let index = this.months.indexOf(this.outputMonth); 
            if (index > 0) {
                index--; 
                this.outputMonth = this.months[index]; 
                this.outPutShort = this.short[index]
            } 
            else {
                index = this.months.length-1; 
                this.outputMonth = this.months[index]; 
                this.outPutShort = this.short[index]
                this.year--; 
            }
        },
        currentDate() {
            const current = new Date();
            const date = `${current.getDate()}`;
            return date;
        },
        pop(inDate) {
            this.clicking = true; 
            this.date = inDate; 
            // console.log("hello");
        },
        
        dissmissPopUp(condition) {
            
            this.clicking = condition; 
        },
    }
}
</script>

<style scoped>
* {box-sizing: border-box;}
ul {list-style-type: none;}
body {font-family: Verdana, sans-serif;}
.month {
  padding: 70px 25px;
  width: 100%;
  background: #555c68;
  background-image: url("https://www.ecoplusitalia.com/wp-content/uploads/2016/04/6839531-grey-wallpaper.jpg"); 
  text-align: center;
}
.month ul {
  margin: 0;
  padding: 0;
}
.month ul li {
  color: white;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 3px;
}
.month .prev {
  float: left;
  padding-top: 10px;
}
.month .next {
  float: right;
  padding-top: 10px;
}
.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color: #ddd;
}
.weekdays li {
  display: inline-block;
  width: 13.6%;
  color: rgb(85, 126, 91);
  text-align: center;
  font-size: 20px;
  
}
.days {
  padding: 10px 10px;
  background: #eee;
  margin: 0;
}
.days li {
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  text-align: center;
  margin-bottom: 5px;
  font-size:19px;
  color: rgb(16, 16, 16);
}
/* Add media queries for smaller screens */
@media screen and (max-width:720px) {
  .weekdays li, .days li {width: 13.1%;}
}
@media screen and (max-width: 420px) {
  .weekdays li, .days li {width: 12.5%;}
  .days li .active {padding: 2px;}
}
@media screen and (max-width: 290px) {
  .weekdays li, .days li {width: 12.2%;}
}
.but2{
  background-color: #4f9437;
  color: white;
  padding: 10px 30px;
  margin-top: 10px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 80%;
  opacity: 0.9;
  border-radius: 5px;
  font-size: 16px;
}
.but1{
  background-color: #c13030;
  color: white;
  padding: 10px 30px;
  margin-top: 10px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
  border-radius: 5px;
  font-size: 16px;
}
.calculator3 {
   
  display: flex;
  margin-bottom: 30%;
  
}
.container3{
    border: 10px solid rgb(118, 115, 115);
    background-color: rgb(255, 253, 253);
    padding: 10px;
    top: 50%;
    left: 3%;
    margin-top: 50px;
    margin-left: 25px;
    border-radius: 25px; 
}
.showevent {
  margin-top: -600px;
}
p { color: #ffffff;
 font-family: 'Helvetica Neue', sans-serif; 
 font-size: 15px; 
 line-height: 24px; 
 text-align: center; 
 text-justify: inter-word; }

.stat {
  color: rgb(0, 0, 0);
  margin-left: -900px;
}
</style>