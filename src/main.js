import { createApp } from 'vue'
import App from './App.vue'
import "nprogress/nprogress.css";
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { fab } from '@fortawesome/free-brands-svg-icons';

// import firebase from 'firebase/compat/app';
 

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import "bootstrap"

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"


// import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import {createRouter,createWebHistory} from "vue-router"; 
import Login from "./components/Login.vue"; 
import Register from "./components/Register.vue"; 
import HomePage from "./components/HomePage.vue"; 
import Dashboard from "./components/Dashboard.vue"; 
import '@fortawesome/fontawesome-free/js/all'
import EventPlanner from "./components/EventPlanner.vue"; 
import Logout from "./components/Logout.vue"; 
import Expenses from "./components/Expenses.vue"; 


import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'
import Notifications from '@kyvg/vue3-notification'

// import "chart.js"
// import "hchs-vue-charts"

// 'https://iccs340project-85df8-default-rtdb.asia-southeast1.firebasedatabase.app/preregis.json?auth=' + app.config.globalProperties.$idToken

// var database = firebase.database('https://iccs340project-85df8-default-rtdb.asia-southeast1.firebasedatabase.app/preregis.json?auth=' + app.config.globalProperties.$idToken); 

// const preregisRef=database.ref("preregis"); 


library.add(fas, fab); 


const router = createRouter({
    history: createWebHistory(), 
    routes: [
        { path: "/", redirect: "/homepage"},
        { path: "/login", component: Login},
        { path: "/register", component: Register}, 
        { path: "/homepage", component: HomePage},
        { path: "/dashboard", component: Dashboard, meta: { requireAuthen: true }},
        { path: "/eventplanner", component: EventPlanner, meta: { requireAuthen: true }},
        { path: "/logout", component: Logout, meta: { requireAuthen: true }},
        { path: "/expenses", component: Expenses, meta: { requireAuthen: true }},
       
        // { path: "/showEvent", component: ShowEvent, meta: { requireAuthen: true }}
        //


    ],
}); 

router.beforeEach(function(to,from,next) {
    // console.log("I am from beforEach");
    // console.log(to); 
    // console.log(from);
    // next();  // okay, you can go there.
    if(to.meta.requireAuthen) {

      if(app.config.globalProperties.$authenticated) {
        next(); 

      } else { //not authen yet
        alert("Please login first"); 
        next("/login"); 
      }

    } else { // user is heading to the public pages 
      next(); 
    }
  }); 

export const eventBus = createApp(App)

const app = createApp(App); 
app.use(router); 
app.component('fa', FontAwesomeIcon); 
app.use(Notifications); 
app.use(VueCollapsiblePanel); 

app.mount('#app');

app.config.globalProperties.$displayName = ""; 
app.config.globalProperties.$idToken = ""; 
app.config.globalProperties.$expiresIn = ""; 
app.config.globalProperties.$authenticated = false; 

export { app }; 

// createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app');