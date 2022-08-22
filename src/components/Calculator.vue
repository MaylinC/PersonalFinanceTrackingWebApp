<template>
    <div class="calculator"> 
        <div class="show"> {{ current || 0 }} </div>
        <div class="op" @click="reset">AC</div>
        <div class="op" @click="symbol">+/-</div>
        <div class="op" @click="percentage">%</div>
        <div class="op" @click="divide">÷</div>
        <div class="button" @click="addNumberFromBack('7')">7</div>
        <div class="button" @click="addNumberFromBack('8')">8</div>
        <div class="button" @click="addNumberFromBack('9')">9</div>
        <div class="op" @click="time">x</div>
        <div class="button" @click="addNumberFromBack('4')">4</div>
        <div class="button" @click="addNumberFromBack('5')">5</div>
        <div class="button" @click="addNumberFromBack('6')">6</div>
        <div class="op" @click="subtract">-</div>
        <div class="button" @click="addNumberFromBack('1')">1</div>
        <div class="button" @click="addNumberFromBack('2')">2</div>
        <div class="button" @click="addNumberFromBack('3')">3</div>
        <div class="op" @click="plus">+</div>
        <div class="button" @click="addNumberFromBack('0')">0</div>
        <div class="button" @click="addNumberFromBack('.')">.</div>
        <div class="op" @click="result">=</div>
    </div> 
</template>

<script>

export default {
    data() {
        return {
            current: "",
            operator: "", 
            lastNo: "", 
            clickOp: "-1", 

        }
    },

    methods: {
        reset() {
            this.current = ""; 
        },
        symbol() {

            if (this.current.charAt(0) === "-") {
                this.current = this.current.slice(1); 
            }
            else {
                this.current = `-${this.current}`; 
            }   
        },

        percentage() {
            this.current = `${this.current / 100}`
        },
        
        addNumberFromBack(number) {

            if (this.clickOp == "1") {
                this.current = ''; 
                this.clickOp = "-1"; 
            }
            
            if (number === '.') {
                console.log("got dot");
                if (this.current.indexOf('.') === -1) {
                    this.current = this.current + number; 
                }
            }
            else {
                this.current = this.current + number; 
            }
        }, 
        divide() {
           this.operator = (a,b) => a/b; 
           this.lastNo = this.current; 
           this.clickOp = 1; 
        },
        time() {
           this.operator = (a,b) => a * b; 
           this.lastNo = this.current; 
           this.clickOp = 1; 
        },
        subtract() {
           this.operator = (a,b) => a - b; 
           this.lastNo = this.current; 
           this.clickOp = 1; 
        },
        plus() {
            this.operator = (a,b) => a + b; 
            this.lastNo = this.current; 
            this.clickOp = 1; 
        }, 
        result() {
            this.current =  `${this.operator(parseFloat(this.current), parseFloat(this.lastNo))}`;  
            this.lastNo = "";
        }

    }
};
</script>

<style scoped>

.calculator{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-auto-rows: minmax(50px, auto);
    font-size: 25px;
    width: 400px;
    margin: 0 auto;
    
}

.show{
    grid-column: 1 / 5;   /* start at col 1 and end after column 4 */
    background-color: #333;
    margin-bottom: 30px;
    border: 2px solid #333;
    color: white;
    
}

.button {
    margin-bottom: 30px;
    margin-left: 30px;
    border: 2px solid;
    border-radius: 30px;

}

.button:hover {
    background-color: rgb(172, 164, 154);
}

.op {
    background-color: rgb(233, 152, 52);
    border: 2px solid;
    border-radius: 30px;
    margin-bottom: 30px;
    margin-left: 30px;
}

.op:hover {
    background-color:rgb(199, 170, 133); 
}

</style>

