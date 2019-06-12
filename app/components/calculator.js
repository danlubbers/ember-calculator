import Component from '@ember/component';

export default Component.extend({
    onDisplay: '0',
    firstNum: '',
    secondNum: '',
    operator: '',

    actions: {

        // Clear Key

        clickAC(e) {
            console.log(e.target.textContent);
            // This will be used to clear state
            this.set('onDisplay', '0');
            console.log(this.onDisplay);
        },

        // Number Keys
        numbers(e) {
            let key = e.target;
            let action = key.dataset.action;
            let keyContent = key.textContent;
            
            if(action === 'number') {
                if(this.onDisplay === '0') {
                    this.set('onDisplay', keyContent);
                } else {
                    this.set('onDisplay', this.onDisplay + keyContent);
                }
            }
        },

        // Decimal Key

        decimal(e) {
            let key = e.target;
            let action = key.dataset.action;
            let keyContent = key.textContent;
    
            // this checks if the action is equal to decimal and only adds a decimal to the display if there is not one already found. This prevents more than one decimal point being added. 
            if(action === 'decimal' && !/\./g.test(this.onDisplay)) {
                this.set('onDisplay', this.onDisplay + keyContent);
            }
        },

        // Operand Keys

        operator(e) {
            let key = e.target;
            let action = key.dataset.action;
            let keyContent = key.textContent;
            if(action === 'operator') {
                this.set('firstNum', this.onDisplay);
                this.set('onDisplay', '0');
                this.set('operator', keyContent);
                console.log(this.firstNum);
                console.log(this.operator);
            }
        },

        // Calculations

        equals(e) {
            let key = e.target;
            let keyContent = key.textContent;
            this.set('secondNum', this.onDisplay);
            console.log(keyContent);

            if(this.operator === '+') {
                let addition = +this.firstNum + +this.secondNum;
                this.set('onDisplay', addition);
                console.log(addition);
            }

            if(this.operator === '-') {
                let subtraction = +this.firstNum - +this.secondNum;
                this.set('onDisplay', subtraction);
                console.log(subtraction);
            }

            if(this.operator === 'x') {
                let multiplication = +this.firstNum * +this.secondNum;
                this.set('onDisplay', multiplication); 
                console.log(multiplication);
            }

            if(this.operator === '÷') {
                let division = +this.firstNum / +this.secondNum;
                this.set('onDisplay', division);
                console.log(division);
            }
        },

        // Extras
        
        plusMinus() {
            alert('Plus/Minus, I currently do not work');
        },
        
        percent() {
            alert('Percent, I currently do not work');
        },
    }
});
