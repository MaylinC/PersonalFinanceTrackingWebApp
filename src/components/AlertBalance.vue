<template>
    <div class="backdrop"></div>
    <dialog open> 
        <slot></slot>
        <h1> 
            Budget Balance Notification ! 
        </h1>
        <p style="margin-top: 30px; color: red; font-size: 20px;"> 
            <i class="fas fa-hand-holding-usd"></i> WARNING! <i class="fas fa-comment-dollar"></i>
        </p>
        <p style="margin-top: 30px; font-size: 20px;"> 
            Expences Exceeding Income Budget  
        </p>
        <div class="but">
        <button @click="closeModelDlg" class="close"> Close</button>
        </div>
    </dialog> 

</template>

<script>

export default{
    
    emits: ["checking-balance"], 

    methods: {

        closeModelDlg() {
            this.$emit("checking-balance", false); 
        }

    }
}
</script>

<style scoped>

.but{

    margin-top: 50px;
    
}

h1 {

    margin-top: 50px;
    text-decoration: underline;

}
.backdrop{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0, 0.8);
    z-index: 5; 
}
dialog{
    background: rgb(242, 216, 216); 
    border: 5px solid whitesmoke;
    z-index: 50; 
    height: 300px;
    width: 32.5%; 
    padding: 5px;
    position: fixed;
    top: 40%;
    left: 35%;
    margin-top: -100px;
    margin-bottom: 20px;
    margin-left: -10px;
    border-radius: 15px;
    color: rgb(0, 0, 0);
}

.close {
  background-color: #ffffff;
  color: rgb(16, 16, 16);
  padding: 5px 4px;
  margin: -10px ;
  border: none;
  cursor: pointer;
  width: 30%;
  opacity: 0.9;
  border-radius: 10px;
  font-size: 16px;
}
</style>
