<template>
    <nav-bar></nav-bar>
    <div class="container">
    <br><br>
    <br><br>
    <br><br>
    <h1>Welcome to Personal Finance Tracking Application</h1>
    <br><br> 
    <br><br> 
    <h2>  We keep track your finances </h2>
    <br><br> 
    <p> Manage your personal finance digitally with us. We provide features for helping each user keeping track and manage their expenses and income.</p>
    </div>
    
</template>

<script>

// import LoginPage from "./components/Login.vue"
// import RegisterPage from "./components/Register.vue"
// import Calculator from "./components/Calculator.vue"
// import HomePage from "./components/HomePage.vue"
import NavBar from './navBar.vue';


export default {
  name: 'App',
  components: { NavBar}
}; 
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}

.container {
    background-image: url("https://st2.depositphotos.com/5501600/9194/i/450/depositphotos_91943572-stock-photo-blue-finance-background-with-dollars.jpg"); 
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
    padding-left: 5%;
    padding-right: 5%;
    box-sizing: border-box;
    position: relative;  
} 

h1 { color: rgb(255, 255, 255); 
font-family: 'Helvetica Neue', sans-serif; 
font-size: 60px; 
font-weight: bold; 
letter-spacing: -1px; 
line-height: 1; 
text-align: center; 
}


h2 { color: rgb(203, 184, 184); font-family: 'Open Sans', sans-serif; 
font-size: 30px; 
font-weight: 300;
line-height: 32px; 
margin: 0 0 72px; 
text-align: center; }

p { color: #ffffff;
 font-family: 'Helvetica Neue', sans-serif; 
 font-size: 15px; line-height: 
 24px; margin: 0 0 24px; 
 text-align: center; 
 text-justify: inter-word; }

</style> 