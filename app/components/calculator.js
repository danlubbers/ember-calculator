import Component from '@ember/component';

let result = '0';
let onDisplay = '';
let currentNum = '';
let firstNum = '';


export default Component.extend({
    actions: {

        // Clear Key

        clickAC(e) {
            console.log(e.target.dataset.action);
            // This will be used to clear state
            this.set('onDisplay', '0');
            this.set('result', '0');
            console.log(this.result, this.onDisplay)
        },


        // Number Keys

        zero(e) {
            console.log(e.target.dataset.action);
            this.set('currentNum', '0');
            this.set('onDisplay', '0');
            console.log(this.currentNum, this.onDisplay);
        },

        one(e) {
            console.log(e.target.dataset.action);
            if(e.target.dataset.action === 'number') {
                this.set('currentNum', '1');
                this.set('onDisplay', currentNum + '1');
            }
            console.log(this.currentNum, this.onDisplay);
        },

        two(e) {
            console.log(e.target.dataset.action);
            this.set('currentNum', currentNum + '2');
            this.set('onDisplay', currentNum + '2');
            console.log(this.currentNum, this.onDisplay);
        },

        three(e) {
            console.log(e.target.dataset.action);
            this.set('currentNum', '3');
            this.set('onDisplay', '3');
            console.log(this.currentNum, this.onDisplay);
        },

        four(e) {
            console.log(e.target.dataset.action);
            this.set('currentNum', '4');
            this.set('onDisplay', '4');
            console.log(this.currentNum, this.onDisplay);
        },

        five(e) {
            console.log(e.target.dataset.action);
            this.set('currentNum', '5');
            this.set('onDisplay', '5');
            console.log(this.currentNum, this.onDisplay);
        },

        six(e) {
            console.log(e.target.dataset.action);
            this.set('currentNum', '6');
            this.set('onDisplay', '6');
            console.log(this.currentNum, this.onDisplay);
        },

        seven(e) {
            console.log(e.target.dataset.action);
            this.set('currentNum', '7');
            this.set('onDisplay', '7');
            console.log(this.currentNum, this.onDisplay);
        },

        eight(e) {
            console.log(e.target.dataset.action);
            this.set('currentNum', '8');
            this.set('onDisplay', '8');
            console.log(this.currentNum, this.onDisplay);
        },

        nine(e) {
            console.log(e.target.dataset.action);
            this.set('currentNum', '9');
            this.set('onDisplay', '9');
            console.log(this.currentNum, this.onDisplay);
        },


        // Decimal Key

        decimal(e) {
            console.log(e.target.dataset.action);
            this.set('onDisplay', '.');
            console.log('.');
        },


        // Operand Keys

        add(e) {
            console.log(e.target.dataset.action);
            if (e.target.dataset.action === 'operand') {

            }
            
        },


        subtract(e) {
            console.log(e.target.dataset.action);
            console.log('subtract');
        },


        multiply(e) {
            console.log(e.target.dataset.action);
            console.log('multiply');
        },


        divide(e) {
            console.log(e.target.dataset.action);
            console.log('divide');
        },

        
        // Equal Key
        
        equals(e) {
            console.log(e.target.dataset.action);
            console.log('equals');
        },


        // Extras
        
        plusMinus() {
            console.log('plus-minus');
        },
        
        percent() {
            console.log('percent');
        },
    }
});
