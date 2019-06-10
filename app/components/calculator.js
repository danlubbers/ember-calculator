import Component from '@ember/component';

let result = null;
let onDisplay = 0;

export default Component.extend({
    actions: {
        clickAC() {
            // This will be used to clear state
            this.set('onDisplay', 0);
            console.log(onDisplay)
        },

        zero() {
            this.set('onDisplay', 0);
            console.log(0);
        },

        one() {
            this.set('onDisplay', 1);
            console.log(1);
        },

        two() {
            this.set('onDisplay', 2);
            console.log(2);
        },

        three() {
            this.set('onDisplay', 3);
            console.log(3);
        },

        four() {
            this.set('onDisplay', 4);
            console.log(4);
        },

        five() {
            this.set('onDisplay', 5);
            console.log(5);
        },

        six() {
            this.set('onDisplay', 6);
            console.log(6);
        },

        seven() {
            this.set('onDisplay', 7);
            console.log(7);
        },

        eight() {
            this.set('onDisplay', 8);
            console.log(8);
        },

        nine() {
            this.set('onDisplay', 9);
            console.log(9);
        },

        decimal() {
            this.set('onDisplay', '.');
            console.log('.');
        },

        add() {
            console.log('add');
        },


        subtract() {
            console.log('subtract');
        },


        multiply() {
            console.log('multiply');
        },


        divide() {
            console.log('divide');
        },

        plusMinus() {
            console.log('plus-minus');
        },

        percent() {
            console.log('percent');
        },
       
        equals() {
            console.log('equals');
        },
    }
});
