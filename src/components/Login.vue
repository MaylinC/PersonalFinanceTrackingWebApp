<template>
  <div class="backg">
    <div class="login"> 
      <h1> LOGIN </h1>
      <br><br>
      <form @submit.prevent="submitForm">  
          <label><b>Email  </b></label>
          <input type="text" name="User" id="User" v-model="email" placeholder="Username "> 
          <br><br>    
          <label><b>Password  </b>    
          </label>    
          <input type="Password" name="Pass" id="Pass" v-model="Password" placeholder="Password ">    
          <br><br>    
          <button class="buttonL">Login</button> 
          <br><br> 
          <router-link :to="'/register'"> Create an account </router-link>             
      </form>     
      </div> 
  </div>
</template>

<script>

import { app } from "../main.js"; 

export default {
    data() {
    return {
      email: "",
      Password: "",
    };
  },
  methods: {

      submitForm() {
            // console.log(this.email + " " + this.password);
            const URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEw-3qkc89XwSHY8Q6ot1oKPcJtlJtxD8"; 
            fetch(URL,{
                method: "POST", 
                body: JSON.stringify(
                {
                    email: this.email,
                    password: this.Password, 
                    returnSecureToken: true, 
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.error != null) {
                        console.log("Error: signIn"); 
                        console.log(data.error); 
                        alert(data.error.message); 
                }
                else {
                  
                    app.config.globalProperties.$displayName = data.displayName; 
                    app.config.globalProperties.$idToken = data.idToken;  
                    app.config.globalProperties.$expiresIn = data.expiresIn; 
                    app.config.globalProperties.$authenticated = true; 

                    // console.log("Ok: the token is" + app.config.globalProperties.$idToken);

                    this.$router.replace("/dashboard");  
                }
            })
            .catch((error) => console.log(error)); 
        },
  }
    
};
</script>

<style scoped>

h1 {
     font-size: 50px;
}


.login {

    border: 20px solid rgb(249, 249, 249);
    background-color: rgb(255, 255, 255);
    padding: 70px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -250px;
    border-radius: 25px;
}

.buttonL {
    font-family: "Raleway", sans-serif;
    cursor: pointer;
    background-color: grey;
    border: 2px solid gray;
    border-radius: 4px;
    display: block;
    font-size: 16px;
    padding: 10px;
    margin-top: 20px;
    width: 100%;
    color: white;
}

body {
  background-color: lightblue;
}

.backg {

  background-image: url("https://wallpaperaccess.com/full/1104816.jpg"); 
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;

}

input[type=text], input[type=password] {
  width: 60%;
  padding: 12px 20px;
  margin: 3px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}


</style>

