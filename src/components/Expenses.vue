<template>

    <div class="outter"> 

         <after-login-navbar></after-login-navbar>

        <div class="expenses">
        <expences-list></expences-list>
        </div>

        <div class="income"> 
            <income-list></income-list>
        </div>
    </div>
        
</template>

<script>

import AfterLoginNavbar from './AfterLoginNavbar.vue'; 
import ExpencesList from './ExpensesList.vue';
import IncomeList from './IncomeList.vue';
export default {

    components: { AfterLoginNavbar, ExpencesList, IncomeList} 

}
</script>

<style scoped>



.income{
    margin-bottom: 5%;
}





</style>