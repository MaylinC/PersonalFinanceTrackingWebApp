<template>
<after-login-navbar></after-login-navbar>

    <div class="outterCon">

      <div class="month"> 
        <h1 class="user"> Hi {{ userName }} ! Welcome to Finance Tracker & Planner Application </h1>
        
        <br><br>  
        <ul>
            <li style="font-size:40px">
              <i class="fas fa-calendar-alt"></i> {{currentMonth()}}<br>
              <span style="font-size:25px">{{currentDate()}}</span>
            </li>
        </ul>    
      </div>

      <div>
          <section>
            <iframe style="margin-left: 900px; margin-top: 50px" width="410" height="250" src="https://www.youtube.com/embed/zVcwvCL2C2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </section>
        </div> 
        <div style="margin-top: -155px ">
          <section>
          <iframe style="margin-left: 900px; margin-top: 180px" width="410" height="250" src="https://www.youtube.com/embed/XYkwa1D1AC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </section>
        </div> 

      <pop-up-calculator @dismiss-model-dialog="dissmissPopUp" v-if="clicking"></pop-up-calculator>

      <div class="popUpCalDiv">     
        <a class="popUpCal" @click="pop">
        <i class="fas fa-calculator "></i>
        </a>
        <p class="inCal"> Click on an ICON to use a Calculator </p>
      </div>

      <pop-up @dismiss-model-dialog="dissmissPopUp" :outputMonth="outputMonth" :year="year" :date="date" v-if="clicking"></pop-up>
      
      <div class="tipsSec">
          <div class="tips">
            <h3 class="headTips"> Finance Tips </h3>
            <p > 
            Welcome all financial people of the world! For those eager to get themselves indulged in the world of financing, fear not for here are some tips to get yourselves started on. But before that you must understand that the world of Finance is an intricate network of calculations and
            monitorization of expenses and income. 
            Money is what revolves around this world, 
            so you must prepare yourself on how to handle money flowing within this vast intricate network.
            </p> 

            <ul class="points" style="list-style-type:circle;">
              <li>Track your spending to improve your finances.</li>
              <li>Create a realistic monthly budget.</li>
              <li>Build up your savings—even if it takes time.</li>
              <li>Pay your bills on time every month.</li>
              <li>Cut back on recurring charges.</li>
              <li>Save up cash to afford big purchases.</li>
              <li>Start an investment strategy.</li>
            </ul>

            <h3 class="secondHead"> 70-20-10 Rule of Self-finance </h3>

            <p class="tips2">Following the 70/20/10 rule of budgeting, you separate your take-home pay into three buckets based on a specific percentage. Seventy percent of your income will go to monthly bills and everyday spending, 20% goes to saving and investing and 10% goes to debt repayment or donation.</p>

        </div>  
      
      <div class="balance">
        <total-balance @sending-data="eventEmitIn"></total-balance>
      </div>
      <div class="balance2">
        <balance-ex @sending-data="eventEmitEx"></balance-ex>
      </div> 

      </div>

      <p class="ShowBlance2"> Please CLICK update every time after you filled in the form </p>
      <p class="ShowBlance"> Updated Amount: Income {{ totalAmountIn }} ฿ , Expenses {{ totalAmountEx }} ฿ </p>

      <div class="Dou">
          <dough-nut :totalRequestEx="totalAmountEx" :totalRequestIn="totalAmountIn"></dough-nut> 
      </div>

      <!-- @sending-data="sendingItem" :totalRequestEx="totalRequestEx" -->
      

      <div class="incomeForm">
        <h2> <i class="fas fa-dollar-sign"></i> Add Income </h2>
        <a @click="toggleShowDescFlag">
        <i class="fas fa-chevron-down">
        </i>  </a>
        <!-- <div @click="toggleShowDescFlag">
          {{ showDesc ? "Hide Detials" : "Show Details" }}
        </div> -->
        <div v-if="showIncome"> 
          <form @submit.prevent="submitFormIncome">
            <div class="container1"> 
              <hr>
              <label class="lab" for="user-incomer"> <i class="fas fa-money-check"></i> Income </label>
                  <select class="select" id="user-incomer" name="income" v-model="income" style="width: 54%; height: 9%;  margin-top: 3%; margin-bottom: -1%;" required>
                  <option value="Bonus"> Bonus </option>
                  <option value="Extra Hours"> Extra Hours </option>
                  <option value="Pension"> Pension </option>
                  <option value="Salary"> Salary </option>
                  <option value="Allowance"> Allowance </option>
                  <option value="Commission"> Commission </option>
                  <option value="Gifts"> Gifts </option>
                  <option value="Interest"> Interest </option>
                  <option value="Others"> Others </option>
              </select>        
              <br><br> 

              <label class="lab" for="paymentType"> <i class="fas fa-calendar-alt"/> Income Receive Type </label>
                <select class="select" id="paymentType" name="paymentType" v-model="typeIn" style="width: 54%; height: 9%;" required>
                <option value="Cash"> Cash </option>
                <option value="Debit"> Debit Cards </option>
                <option value="Credit"> Credit Cards </option>
                <option value="Paypal"> Paypal </option>
                <option value="Checks"> Checks </option>
                <option value="Others"> Others </option>
              </select>  
              <br><br> 

              <label style="font-size: 17px" ><b> <i class="fas fa-sort-amount-up-alt"/> Amount </b> </label>    
              <input type="text" name="amount" id="amount" v-model="amountIn" placeholder="Baht " style="width: 54%; height: 9%;" required>    
              <br><br> 

              <label style="font-size: 17px" ><b>  Day </b> </label>    
              <input type="text" name="day" id="day" v-model="dayIn" placeholder="day " required style="width: 11%; height: 9%">  

              <label class="lab" for="month-incomer"> Month </label>
                  <select class="select" id="month-incomer" name="month" v-model="monthIn" style="width: 29%; height: 9%; margin-top: -1%;" required>
                  <option value="January"> January </option>
                  <option value="February"> February </option>
                  <option value="March"> March </option>
                  <option value="April"> April </option>
                  <option value="May"> May </option>
                  <option value="June"> June </option>
                  <option value="July"> July </option>
                  <option value="August"> August </option>
                  <option value="September"> September </option>
                  <option value="October"> October </option>
                  <option value="November"> November </option>
                  <option value="December"> December </option>
              </select> 

              <label class="lab" for="year-incomer"> Year </label>
                  <select class="select" id="year-incomer" name="month" v-model="yearIn" style="width: 23%; height: 9%; margin-top: -1%;">
                  <option value="2017"> 2017 </option>
                  <option value="2018"> 2018 </option>
                  <option value="2019"> 2019 </option>
                  <option value="2020"> 2020 </option>
                  <option value="2021"> 2021 </option>
                  <option value="2022"> 2022 </option>
                  <option value="2023"> 2023 </option>
                  <option value="2024"> 2024 </option>
                  <option value="2025"> 2025 </option>
                  <option value="2026"> 2026 </option>
                  <option value="2027"> 2027 </option>
                  <option value="2028"> 2028 </option>
                  <option value="2029"> 2029 </option>
                  <option value="2030"> 2030 </option>
              </select> 

              <br><br>
              <label style="font-size: 17px"><b>  Description </b> </label>    
              <input type="text" name="description" id="description" v-model="descriptionIn" placeholder="Description " required style="width: 80%; height: 16%;" >  
      
              <div>
                <button class="sub">Submit</button> 
              </div> 
            </div> 
          </form>
        </div>
      </div>

      <div class="expenseForm">
          <h2> <i class="fas fa-dollar-sign"></i> Add Expences </h2>
          <a @click="toggleShowDescFlag2">
          <i class="fas fa-chevron-down">
          </i>  </a>
          <!-- <div @click="toggleShowDescFlag">
            {{ showDesc ? "Hide Detials" : "Show Details" }}
          </div> -->
          <div v-if="showExpenses"> 
            <form @submit.prevent="submitFormExpence">
              <div class="container1"> 
                <hr>
                <label class="lab" for="user-expence"> <i class="fas fa-money-check"></i> Expence Category </label>
                    <select class="select" id="user-expence" name="expence" v-model="expence" style="width: 54%; height: 9%;  margin-top: 3%; margin-bottom: -1%;" required>
                    <option value="Utilities"> Utilities </option>
                    <option value="Rent"> Rent </option>
                    <option value="Entertainment"> Entertainment </option>
                    <option value="Shopping"> Shopping </option>
                    <option value="Travel"> Travel </option>
                    <option value="Taxes"> Taxes </option>
                    <option value="Insurance"> Insurance </option>
                    <option value="Education"> Education </option>
                    <option value="Others"> Others </option>
                </select>        
                <br><br> 

                <label class="lab" for="paymentType"> <i class="fas fa-calendar-alt"/> Payment Type </label>
                  <select class="select" id="paymentType" name="paymentType" v-model="typeEx" style="width: 54%; height: 9%;" required>
                  <option value="Cash"> Cash </option>
                  <option value="Debit"> Debit Cards </option>
                  <option value="Credit"> Credit Cards </option>
                  <option value="Paypal"> Paypal </option>
                  <option value="Checks"> Checks </option>
                  <option value="Others"> Others </option>
                </select>  
                <br><br> 

                <label style="font-size: 17px" ><b> <i class="fas fa-sort-amount-up-alt"/> Amount </b> </label>    
                <input type="text" name="amount" id="amount" v-model="amountEx" placeholder="Baht " style="width: 54%; height: 9%;" required>    
                <br><br> 

                <label style="font-size: 17px" ><b>  Day </b> </label>    
                <input type="text" name="day" id="day" v-model="dayEx" placeholder="day " required style="width: 11%; height: 9%">  

                <label class="lab" for="month-incomer"> Month </label>
                    <select class="select" id="month-incomer" name="month" v-model="monthEx" style="width: 29%; height: 9%; margin-top: -1%;" required>
                    <option value="January"> January </option>
                    <option value="February"> February </option>
                    <option value="March"> March </option>
                    <option value="April"> April </option>
                    <option value="May"> May </option>
                    <option value="June"> June </option>
                    <option value="July"> July </option>
                    <option value="August"> August </option>
                    <option value="September"> September </option>
                    <option value="October"> October </option>
                    <option value="November"> November </option>
                    <option value="December"> December </option>
                </select> 

                <label class="lab" for="year-incomer"> Year </label>
                    <select class="select" id="year-incomer" name="month" v-model="yearEx" style="width: 23%; height: 9%;; margin-top: -1%;">
                    <option value="2017"> 2017 </option>
                    <option value="2018"> 2018 </option>
                    <option value="2019"> 2019 </option>
                    <option value="2020"> 2020 </option>
                    <option value="2021"> 2021 </option>
                    <option value="2022"> 2022 </option>
                    <option value="2023"> 2023 </option>
                    <option value="2024"> 2024 </option>
                    <option value="2025"> 2025 </option>
                    <option value="2026"> 2026 </option>
                    <option value="2027"> 2027 </option>
                    <option value="2028"> 2028 </option>
                    <option value="2029"> 2029 </option>
                    <option value="2030"> 2030 </option>
                </select> 

                <br><br>
                <label style="font-size: 17px"><b>  Description </b> </label>    
                <input type="text" name="description" id="description" v-model="descriptionEx" placeholder="Description " required style="width: 80%; height: 16%;" >  
        
                <div>
                  <button class="sub">Submit</button> 
                </div> 
              </div> 
            </form>
          </div>
        </div>

        <div class="Bar">
          <bar-chart :jan="jan" :feb="feb" :mar="mar" :apr="apr" :may="may"  :june="june" :july="july" :aug="aug" :sep="sep" :oct="oct" :nov="nov" :dec="dec"></bar-chart> 
        </div>

        <div class="Bar2">
            <bar-chart-in :janIn="janIn" :febIn="febIn" :marIn="marIn" :aprIn="aprIn" :mayIn="mayIn"  :juneIn="juneIn" :julyIn="julyIn" :augIn="augIn" :sepIn="sepIn" :octIn="octIn" :novIn="novIn" :decIn="decIn"></bar-chart-in> 
        </div>

        <!-- here {{ janIn }} {{febIn}} {{marIn}}
        here {{ jan }} {{feb}} {{mar}} -->

        <div class="containPie"> 

          <div class="pieEx">
            <pie-chart-ex :cash="cash" :debit="debit" :credit="credit" :paypal="paypal" :checks="checks" :others="others"></pie-chart-ex>
          </div>

          <div class="pieIn">
            <pie-chart-in :cashIn="cashIn" :debitIn="debitIn" :creditIn="creditIn" :paypalIn="paypalIn" :checksIn="checksIn" :othersIn="othersIn"></pie-chart-in>
          </div>

          <div class="pieExCat">
            <pie-chart-ex-cat :util="util" :rent="rent" :ent="ent" :shop="shop" :tra="tra" :tax="tax" :ins="ins" :edc="edc" :oth="oth" ></pie-chart-ex-cat>
          </div>

          <div class="pieInCat"> 
            <pie-chart-in-cat :bo="bo" :extr="extr" :pen="pen" :sal="sal" :aol="aol" :com="com" :gif="gif" :int="int" :othIn="othIn" ></pie-chart-in-cat>
          </div>
        </div>

    <alert-balance @checking-balance="CheckBalance" v-if="balanceInform"> </alert-balance>

    </div> 

</template>


<script>

import AfterLoginNavbar from './AfterLoginNavbar.vue'; 
// import EventPlanner from './EventPlanner.vue'
import { app } from "../main.js";  
import DoughNut from './DoughnutChart.vue';
import AxiosService from "../services/AxiosService.js";
import PopUpCalculator from './PopUpCalculator.vue';
import totalBalance from './TotalBalance.vue';
import balanceEx from './BalanceEx.vue';
import barChart from './BarChartEx.vue'; 
import barChartIn from './BarChartIn.vue'; 
import pieChartEx from './PiechartEx.vue'; 
import pieChartIn from './PieChartIn.vue'; 
import PieChartExCat from './PieChartExCat.vue';
import PieChartInCat from './PieChartInCat.vue'; 
import AlertBalance from './AlertBalance.vue'; 

export default {


    components: { AfterLoginNavbar, PopUpCalculator, totalBalance ,balanceEx, DoughNut, barChart, barChartIn, pieChartEx, pieChartIn,PieChartExCat, PieChartInCat, AlertBalance},

    data() {

        return {
            income: "", 
            amountIn: "", 
            typeIn: "", 
            monthIn: "", 
            yearIn: "", 
            dayIn: "", 
            descriptionIn: "", 
            expence: "", 
            amountEx: "",
            typeEx: "", 
            monthEx: "", 
            yearEx: "", 
            dayEx: "",
            descriptionEx: "", 
            monthNames: ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"],
            showIncome: false,
            showExpenses: false, 
            uName: "",
            userName: app.config.globalProperties.$displayName, 
            statusFormIn: "income",
            statusFormEx: "expence",
            clicking: false, 
            totalAmountEx: 0, 
            totalAmountIn: 0,
            
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

            cash: "", 
            debit: "", 
            credit: "", 
            paypal: "",
            checks: "", 
            others: "",

            cashIn: "", 
            debitIn: "", 
            creditIn: "", 
            paypalIn: "",
            checksIn: "", 
            othersIn: "",

            util:"",  
            rent:"", 
            ent:"", 
            shop:"",
            tra:"",
            tax:"", 
            ins:"",
            edc:"", 
            oth:"", 

            bo:"",
            extr:"",
            pen:"",
            sal:"",
            aol:"",
            com:"",
            gif:"",
            int:"",
            othIn:"",

            balanceInform: false 
 
        }   
    },

    methods: {

      CheckBalance(input) {


        if ( input !== false)  {

           if (this.totalAmountEx > this.totalAmountIn) {
            this.balanceInform = true; 

            // console.log("boo", this.balanceInform ); 
              }
        }
        else {
          this.balanceInform = false; 
        }
      
      },

      eventEmitEx(total, jan, feb, mar, apr, may, june, july, aug, sep, oct, nov, dec, cash, debit, credit, paypal,checks,others,util,rent,ent,shop,tra,tax,ins,edc,oth) {

          this.totalAmountEx = total; 
          this.jan = jan; 
          this.mar = mar; 
          this.feb = feb;
          this.apr = apr; 
          this.may = may,
          this.june = june,
          this.july = july,
          this.aug = aug,
          this.sep = sep,
          this.oct = oct,
          this.nov = nov, 
          this.dec = dec, 
          this.cash = cash,
          this.debit = debit,
          this.credit = credit,
          this.paypal = paypal,
          this.checks = checks,
          this.others = others, 
          this.util = util, 
          this.rent = rent, 
          this.ent = ent, 
          this.shop = shop,
          this.tra = tra,
          this.tax = tax, 
          this.ins = ins,
          this.edc = edc, 
          this.oth = oth 

          this.CheckBalance(); 
      },

      eventEmitIn(total, jan, feb, mar, apr, may, june, july, aug, sep, oct, nov, dec, cash, debit, credit, paypal,checks,others,bo,extr,pen,sal,aol,com,gif,int,othIn) {

          this.totalAmountIn = total; 
          this.janIn = jan; 
          this.marIn = mar; 
          this.febIn = feb;
          this.aprIn = apr; 
          this.mayIn = may,
          this.juneIn = june,
          this.julyIn = july,
          this.augIn = aug,
          this.sepIn = sep,
          this.octIn = oct,
          this.novIn = nov, 
          this.decIn = dec 
          this.cashIn = cash,
          this.debitIn = debit,
          this.creditIn = credit,
          this.paypalIn = paypal,
          this.checksIn = checks,
          this.othersIn = others 
          this.bo = bo,
          this.extr = extr,
          this.pen = pen,
          this.sal = sal,
          this.aol = aol,
          this.com = com,
          this.gif = gif,
          this.int = int,
          this.othIn = othIn

          this.CheckBalance(); 

      },

      pop() {
          this.clicking = true; 
      },

      dissmissPopUp(condition) {
            
          this.clicking = condition; 
      },
    
      currentDate() {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        return date;
      }, 

      currentMonth() {
        const current = new Date();
        const month = this.monthNames[current.getMonth()];
        return month;
      }, 
      
      toggleShowDescFlag() {
        this.showIncome = !this.showIncome;
      },

      toggleShowDescFlag2() {
        this.showExpenses = !this.showExpenses;
      },

      submitFormExpence() {

        AxiosService.postPreRegisTry({
              statusFormEx: this.statusFormEx, 
              expence: this.expence, 
              amountEx: this.amountEx,
              typeEx: this.typeEx,
              monthEx: this.monthEx,
              dayEx: this.dayEx,
              yearEx: this.yearEx,
              descriptionEx: this.descriptionEx,
              uName: app.config.globalProperties.$displayName, 
        }).then((response) => {
              console.log(response.status);
        }).catch((error) => { 
                console.log(error);
        });    
        
        this.expence = "", 
        this.amountEx = "", 
        this.typeEx = "", 
        this.monthEx = "", 
        this.dayEx = "", 
        this.yearEx = "", 
        this.descriptionEx = ""

      }, 

      submitFormIncome() {
        
        AxiosService.postPreRegisTry({
              statusFormIn: this.statusFormIn, 
              income: this.income, 
              amountIn: this.amountIn,
              typeIn: this.typeIn,
              monthIn: this.monthIn,
              dayIn: this.dayIn,
              yearIn: this.yearIn,
              descriptionIn: this.descriptionIn,
              uName: app.config.globalProperties.$displayName, 
        }).then((response) => {
              console.log(response.status);
        }).catch((error) => { 
                console.log(error);
        });    
        
        this.income = "", 
        this.amountIn = "", 
        this.typeIn = "", 
        this.monthIn = "", 
        this.dayIn = "", 
        this.yearIn = "", 
        this.descriptionIn = ""
      }, 
    }
}
</script>

<style scoped>

.containPie {

  border: 5px solid rgb(191, 182, 182); 
  margin-top: 10px;
  background-color: rgb(233, 204, 197);
  width: 98%;
  height: 500px;
  margin-left: 16px;
  margin-bottom: 50px;
  border-radius: 15px;

}

.pieInCat{

  margin-left: 1050px;
  margin-top: -460px;

}

.pieExCat{

  margin-left: 710px;
  margin-top: -450px;

}

.pieIn {
  margin-left: 380px;
  margin-top: -427px;
}

.pieEx{
  margin-left: 50px;
  margin-top: 50px;
}

.Dou {
  border: 5px solid rgb(113, 113, 113); 
  margin-top: 40px;
  background-color: rgb(203, 199, 198);
  width: 31%;
  height: 480px;
  margin-left: 920px;
  border-radius: 15px;
}

.ShowBlance2{
  margin-left: 850px;
  margin-top: 810px;
  font-size: 15px;
}

.ShowBlance {

  font-size: 20px;
  margin-left: 850px;
  margin-top: 20px;
  color: red;
}

.secondHead{
  text-align: center;
  margin-top: 5%;
  text-decoration: underline;
}
.tips2{

    margin-top: 3%

}

.points{
  margin-left: 30%;
  margin-top: 3%
}

.headTips {

  text-align: center;
  margin-bottom: 3%;
  text-decoration: underline;

}

.tips {

  /* background-color: rgb(255, 255, 255); */
  padding: 50px;
  text-align: justify;
  width: 60%; 
  margin-top: -1%;
   
}

.balance{ 
  margin-top: 25px;
  margin-left: 800px;
  font-size: 35px;
  position:relative;
} 

.popUpCal {
   
  font-size: 35px;
   
}

.popUpCalDiv{
  margin-left: -1360px;
   margin-top: -550px; 
}

.inCal{
  
  margin-top: -25px; 
  margin-left: 310px;
}

.sub {
  background-color: #3f9621;
  color: white;
  padding: 10px 30px;
  margin: 15px 0;
  border: none;
  cursor: pointer;
  width: 30%;
  opacity: 0.9;
  border-radius: 15px;
  font-size: 16px;
}

.sub:hover {
     background-color: #296118;
}

.lab {

  font-size: 17px;
  font-weight: bold;
}

input[type=text], input[type=password] {
  width: 55%;
  padding: 12px 20px;
  margin: 3px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: 'Trebuchet MS', sans-serif;
}

.user {
  color:white; 
  font-family: 'Trebuchet MS', sans-serif
}

.incomeForm {
  width: 58%;
  margin: 1rem;
  margin-top: -1380px;
  padding: 5px;
  border-radius: 5px;
  background: rgb(122, 147, 163);
  color: white;
}

.expenseForm {
  width: 58%;
  margin: 1rem;
  padding: 5px;
  border-radius: 5px;
  background: rgb(169, 138, 119);
  color: white;
}

hr {
  border: 1px solid #656464;
  margin-top: 10px;
  margin-bottom: 10px
}

h2 { 
  font-family: 'Trebuchet MS', sans-serif; 
  font-size: 25px;
  margin-top: 5%;
  margin-bottom: 3%;
 
}

.container1{

    /* border: 5px solid rgb(249, 249, 249); */
    background-color: rgb(179, 173, 173);
    /* padding: 30px;
    position: fixed;
    top: 20%;
    left: 30%;
    margin-top: 300px;
    margin-left: -10px;
    border-radius: 0px;*/
    /* height: 460px; */
    /* width: 100%;  */
    
}

.my-form.invalid-input input{
  border-color: red; 
} 

.invalid-input::after {
  margin: 3px;
  font-style: italic;
  font-size: 0.7rem;
  color: red;
  content: "** The Amount is invalid !!";
}

.my-form {
  margin: 5px 0;
}

.select {
  width: 50%;
  height: 10%;
  padding: 12px 20px;
  margin: 3px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.tipsSec {

  padding: 70px 25px;
  width: 100%;
  height: 650px;
  margin-top: -82px;
  background-color: rgb(226, 232, 240);
  
}

.month {
  padding: 70px 25px;
  width: 100%;
  /* background: #1abc9c; */
  background-image: url("https://cn.hyperledger.org/wp-content/uploads/2016/08/hl_finance.jpg");
  text-align: center;
}

.month ul {
  margin: 0;
  padding: 0;
}

.month ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  list-style-type: none;
}

* {box-sizing: border-box;}
ul {list-style-type: none;}
body {font-family: Verdana, sans-serif;}

.balance2{
  margin-top: -20px;
}



</style>