<template>
    
    <after-login-navbar></after-login-navbar>
  <div class="backg">
  </div>

   <div class="container"> 
        <form @submit.prevent="submitForm"> 
            <h1 class="log"> LOGOUT </h1>
            <h3 class="log2"> Thank you </h3>
            <button class="confirm"> Confirm </button>
        </form>
    </div> 
</template>

<script>

import { app } from "../main.js"; 
import AfterLoginNavbar from './AfterLoginNavbar.vue'; 

export default {

    components: { AfterLoginNavbar }, 

    methods: {
        submitForm() {
            app.config.globalProperties.$displayName = ""; 
            app.config.globalProperties.$idToken = ""; 
            app.config.globalProperties.$expiresIn = ""; 
            app.config.globalProperties.$authenticated = false; 

            this.$router.replace("/"); 
        }
    }
}
</script>

<style scoped>

.log {
    margin-top: 80px;
    font-size: 50px;
}

.log2 {

    margin-top: 10px;
    font-size: 20px;
    margin-bottom: 10px;
}


.backg {

  background-image: url("https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jaWFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"); 
  height: 94vh;
  width: 100%;
  background-position: center;
  background-size: cover;

}

.confirm {
  background-color: #b53636;
  color: white;
  padding: 10px 30px;
  margin-top: 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 40%;
  opacity: 0.9;
  border-radius: 25px;
  font-size: 16px;
}

.container {
    
    width: 400px;
    height: 350px;
    margin-top: -600px;
    margin-left: 550px;
    padding: 5px;
    border-radius: 25px;
    color: rgb(0, 0, 0);

} 

</style>