import Component from '@ember/component';

export default Component.extend({
    onDisplay: '0',

    actions: {

        // Clear Key

        clickAC(e) {
            console.log(e.target.textContent);
            // This will be used to clear state
            this.set('onDisplay', '0');
            console.log(this.onDisplay)
        },


        // Number Keys

        numbers(e) {
            let key = e.target;
            let action = key.dataset.action;
            let keyContent = key.textContent;
            let displayNum = e.target.textContent;
            console.log(e)
            console.log(displayNum)
            // console.log(key, action, keyContent, onDisplay)
            
            if(action === 'number') {
                if(this.onDisplay === '0') {
                    this.set('onDisplay', displayNum);
                } else {
                    this.set('onDisplay', this.onDisplay + keyContent);
                }
            }

        },

        decimal(e) {
            let key = e.target;
            let action = key.dataset.action;
            let keyContent = key.textContent;
            let displayNum = e.target.textContent;
            if(action === 'decimal') {
                this.set('onDisplay', this.onDisplay + keyContent);
            }
        },

        // zero(e) {
        //     console.log(e.target.dataset.action);
        //     // this.set('currentNum', e.target.textContent);
        //     this.set('onDisplay', this.onDisplay + '0');
        //     console.log(this.currentNum, this.onDisplay);
        // },

        // one(e) {
        //     console.log(e.target.dataset.action);
        //         // this.set('currentNum', this.currentNum + '1');
        //     this.set('onDisplay', this.onDisplay + '1');
        //     console.log(this.currentNum, this.onDisplay);
        // },

        // two(e) {
        //     console.log(e.target.dataset.action);
        //     // this.set('currentNum', e.target.textContent);
        //     this.set('onDisplay', this.onDisplay + '2');
        //     console.log(this.currentNum, this.onDisplay);
        // },

        // three(e) {
        //     console.log(e.target.dataset.action);
        //     // this.set('currentNum', e.target.textContent);
        //     this.set('onDisplay', this.onDisplay + '3');
        //     console.log(this.currentNum, this.onDisplay);
        // },

        // four(e) {
        //     console.log(e.target.dataset.action);
        //     // this.set('currentNum', e.target.textContent);
        //     this.set('onDisplay', this.onDisplay + '4');
        //     console.log(this.currentNum, this.onDisplay);
        // },

        // five(e) {
        //     console.log(e.target.dataset.action);
        //     // this.set('currentNum', e.target.textContent);
        //     this.set('onDisplay', this.onDisplay + '5');
        //     console.log(this.currentNum, this.onDisplay);
        // },

        // six(e) {
        //     console.log(e.target.dataset.action);
        //     // this.set('currentNum', e.target.textContent);
        //     this.set('onDisplay', this.onDisplay + '6');
        //     console.log(this.currentNum, this.onDisplay);
        // },

        // seven(e) {
        //     console.log(e.target.dataset.action);
        //     // this.set('currentNum', e.target.textContent);
        //     this.set('onDisplay', this.onDisplay + '7');
        //     console.log(this.currentNum, this.onDisplay);
        // },

        // eight(e) {
        //     console.log(e.target.dataset.action);
        //     // this.set('currentNum', e.target.textContent);
        //     this.set('onDisplay', this.onDisplay + '8');
        //     console.log(this.currentNum, this.onDisplay);
        // },

        // nine(e) {
        //     console.log(e.target.dataset.action);
        //     // this.set('currentNum', e.target.textContent);
        //     this.set('onDisplay', this.onDisplay + '9');
        //     console.log(this.currentNum, this.onDisplay);
        // },


        // Decimal Key

        // decimal(e) {
        //     console.log(e.target.dataset.action);
        //     this.set('currentNum', this.currentNum + '.');
        //     this.set('onDisplay', this.onDisplay + '.');
        //     console.log(this.currentNum, this.onDisplay);
        // },


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
