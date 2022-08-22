<template>
    <div class="backdrop"></div>
    <dialog open> 
        <slot></slot>
        <p> 
            Password is Not Match, Please Try again !!!
            <br><br>
            <button @click="closeModelDlg" class="close"> Close</button>
        </p>
    </dialog> 

</template>

<script>

export default{
    
    emits: ["dismiss-model-dialog"], 

    methods: {

        closeModelDlg() {
            this.$emit("dismiss-model-dialog"); 
        }

    }
}
</script>

<style scoped>
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
    background: rgb(167, 166, 166); 
    border: none;
    z-index: 50; 
    height: 10%;
    width: 32.5%; 
    padding: 5px;
    position: fixed;
    top: 40%;
    left: 35%;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 15px;
    color: rgb(0, 0, 0);
}

.close {
  background-color: #ffffff;
  color: rgb(16, 16, 16);
  padding: 5px 4px;
  /* margin-top: 2px; */
  margin: -10px ;
  border: none;
  cursor: pointer;
  width: 30%;
  opacity: 0.9;
  border-radius: 10px;
  font-size: 16px;
}
</style>
