import axios from "axios";
// import NProgress from "nprogress";
import { app } from"../main.js" 

const apiClient = axios.create();

// const apiClient = axios.create({
//     baseURL: "https://iccs340project-85df8-default-rtdb.asia-southeast1.firebasedatabase.app/preregis.json",
// }); 

// apiClient.interceptors.request.use((config) => {
//     NProgress.start();
//     return config;
// }); 

// apiClient.interceptors.response.use((response) => {
//     NProgress.done();
//     return response;
// });


export default {
  
  postPreRegisTry(theObj) {
    let url = "https://iccs340project-85df8-default-rtdb.asia-southeast1.firebasedatabase.app/preregis.json?auth=" + app.config.globalProperties.$idToken; 
    return apiClient.post(url, theObj);
  },
  getPreRegis() {
    // this is the url when the user login already 
    let url = "https://iccs340project-85df8-default-rtdb.asia-southeast1.firebasedatabase.app/preregis.json?auth=" + app.config.globalProperties.$idToken; 
    // if the user hasn't signed in, url shouldn't have this part "?auth = "
    if(!app.config.globalProperties.$authenticated) {

      url = "https://iccs340project-85df8-default-rtdb.asia-southeast1.firebasedatabase.app/preregis.json";  

    }
    return apiClient.get(url);
  },

  postIncome(theObj) {
    let url = "https://iccs340project-85df8-default-rtdb.asia-southeast1.firebasedatabase.app/income.json?auth=" + app.config.globalProperties.$idToken; 
    return apiClient.post(url, theObj);
  },

  getIncome() {
    // this is the url when the user login already 
    let url = "https://iccs340project-85df8-default-rtdb.asia-southeast1.firebasedatabase.app/income.json?auth=" + app.config.globalProperties.$idToken; 
    // if the user hasn't signed in, url shouldn't have this part "?auth = "
    if(!app.config.globalProperties.$authenticated) {

      url = "https://iccs340project-85df8-default-rtdb.asia-southeast1.firebasedatabase.app/income.json";  

    }
    return apiClient.get(url);
  },


};
