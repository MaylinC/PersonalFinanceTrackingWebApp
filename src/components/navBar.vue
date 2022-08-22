<template>

  <div class="navbar">
        
        <router-link :to="'/login'" class="link" :class=" { active: isActive }">
        <i class="fas fa-sign-in-alt"/>
        Login
        </router-link> 

        <router-link :to="'/register'" class="link" :class=" { active: isActive }">
        <i class="fas fa-registered"/>
        Register
        </router-link> 

    </div>

    <router-view></router-view>
    <!-- <router-link class="rou" to="/login"> Login </router-link>
    <router-link class="rou" to="/register"> Register </router-link> -->
    <!-- <router-view></router-view> -->
</template>

<style scoped>

/* .rou { */
  /* Style from https://www.w3schools.com/css/css3_buttons.asp */
  /* background-color: #ffffff; 
  background-size: cover;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 3%;
  border-radius: 20px;
}  */


body {font-family: Arial, Helvetica, sans-serif;}

.navbar {
  width: 100%;
  background-color: rgb(128, 128, 138);
  overflow: auto;
}

.navbar a {
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

@media screen and (max-width: 600px) {
  .navbar a {
    float: none;
    display: block;
  }
}

</style>

