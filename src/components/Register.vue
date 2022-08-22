<template>
 <div class="backg">
   <div class="container">
    <h1> Registration </h1> 
    <base-dialog @dismiss-model-dialog="dissmissFromErrors" v-if="invalidPassword"></base-dialog>
    <form @submit.prevent="submitForm">
        <p>Please fill in this form to create an account.</p>
        <hr>
        <label for="userName"><b>Username </b></label>
        <input type="text" v-model="uName" placeholder="Username" name="userName" required> 
        <br><br>   

        <label for="email"><b>Email </b></label>
        <input type="text" v-model="email" placeholder="Enter Email" name="email" required> 
        <br><br>    
   
        <label for="password"><b>Password </b> </label>
        <input name="password" v-model="password" placeholder="Enter Password" type="password" required>
        <br><br>    

        <label for="psw-repeat"><b>Repeat Password </b></label>
        <input name="psw-repeat" v-model="rePassword" placeholder="Enter Password Again" type="password" required>
        <br><br>     
        
        <p style="margin-top: 10px; margin-bottom: 15px; ">By creating an account you agree to our Terms and Privacy </p>
        <button class="registerbtn"> Register </button>
        <div class="clearfix">
            <router-link class="cancelbtn" :to="'/homepage'" > Cancel </router-link>
            <!-- <button class="cancelbtn" type="button">Cancel</button> 
            <button class="registerbtn" type="submit">Sign Up</button> -->
            <!-- <button type="button" v-on:click="login()">Login</button>        -->
        </div>
        <div class="conSignin">
        <p class="reg">Already have an account? <router-link class="loginAcc" :to="'/login'" > Sign in </router-link> </p>  
        </div>
    </form>  
   </div>
  </div>   
</template>

<script>

import BaseDialog from "./BaseDialog.vue" 

export default {
    components: {
      BaseDialog, 
    }, 
    data() {
    return {
      uName: "",
      password: "",
      rePassword: "", 
      email: "",
      invalidPassword: false, // valid 
    };
  },
  methods: {
    submitForm() { 
      // console.log(this.uName + " " + this.email + " " + this.password + " " + this.rePassword);
      
      if (this.password === this.rePassword) {

        this.invalidPassword = false;
        
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEw-3qkc89XwSHY8Q6ot1oKPcJtlJtxD8", 
        {
          method: "POST", 
          body: JSON.stringify(
            {
              displayName: this.uName,
              email: this.email,
              password: this.password, 
              returnSecureToken: true, 
            }),
        }).then(response => response.json()).then(data=> {
          if(data.error != null) {
              console.log("Error: signUp"); 
              console.log(data.error); 
              alert(data.error.message); 
          }
          else {
            // alert("process to login page"); 
            this.$router.replace("/login"); // cannot come back to register page 
          }
        }).catch((error) => (console.error(error)))
      }
      else {

        this.invalidPassword = true; // invalid  
        // alert("Password is Not Match"); 
      }
    },

    dissmissFromErrors() {
      this.invalidPassword = false; 
    },
  } 
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}

h1{
   margin-bottom: 15px;
   font-size: 50px;
}

.reg {
  margin-bottom: 30px;
  color: black;
}

.hr2 {

  margin-top: 15px;

}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 15px;
}

.registerbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 40px;
  margin-top: 10px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 90%;
  opacity: 0.9;
  border-radius: 10px;
  font-size: 16px;
  margin-bottom: 29px;
}

.cancelbtn {
  /* background-color: brown; */
  color: rgb(0, 0, 0);
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 10%;
  opacity: 0.9;
  border-radius: 10px;

}

.conSignin {

  background-color: #f1f1f1;
  text-align: center;
  margin-top: 30px;

}

.loginAcc {

  background-color: #f1f1f1; /* Green */
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

}

.container{

    border: 20px solid rgb(249, 249, 249);
    background-color: rgb(255, 255, 255);
    padding: 10px;
    position: fixed;
    top: 10%;
    left: 35%;
    margin-top: -30px;
    margin-left: -10px;
    border-radius: 25px;
    height: 660px;

}

.backg {

  background-image: url("https://wallpaper.dog/large/11047413.jpg"); 
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;

}

input[type=text], input[type=password] {
  width: 55%;
  padding: 12px 20px;
  margin: 3px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}


</style>