<template>

    <div class="backdrop"></div>
        <dialog open> 
            <slot></slot>
            <calculator></calculator>
            <button class="close" @click="closeModelDlg">Close</button>   
        </dialog> 

</template>

<script>

import Calculator from './Calculator.vue';

export default {

    emits: ["dismiss-model-dialog"], 

    components: {
    Calculator
    },

    methods: {

        closeModelDlg() {
            this.$emit("dismiss-model-dialog", false); 
        },
    }
}
</script>

<style>

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
    background: rgb(255, 254, 254); 
    border: none;
    z-index: 50; 
    height: 57%;
    width: 30%; 
    padding: 10px;
    position: fixed;
    top: 40%;
    left: 35%;
    margin-top: -100px;
    margin-left: -10px;
    border-radius: 5px;
    color: rgb(0, 0, 0);
}

.close {
  background-color: #b53636;
  color: white;
  padding: 10px 30px;
  margin-top: 10px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
  border-radius: 0px;
  font-size: 16px;
}

.close:hover {
    background-color: #762323;
}

</style>