import Component from '@ember/component';

export default Component.extend({
    // This shows what we see on screen in the Display
    onDisplay: '0',
    // This sets the first number before hitting an operator
    firstNum: '',
    // This sets the second number after hitting operator and before hitting equals
    secondNum: '',
    // This sets the operator 
    operator: '',

    actions: {

        // Clear Key
        clickAC() {
            // console.log(e.target.textContent);
            // This will be used to clear/reset state to 0
            this.set('onDisplay', '0');
            // console.log(this.onDisplay);
        },

        // Number Keys
        numbers(e) {
            // key shows what is in the element property
            let key = e.target;
            // console.log(key);

            // action shows what value is as the data-action
            let action = key.dataset.action;
            // console.log(action);

            // keyContent shows the text content of the elemebt
            let keyContent = key.textContent;
            // console.log(keyContent);
            
            if(action === 'number') {
                if(this.onDisplay === '0') {
                    // If 0 is showing in the display, this will change state to the current keyContent that was clicked
                    this.set('onDisplay', keyContent);
                } else {
                    // If 0 is not showing in the display, the keyContent will be appended to the number that is onDisplay
                    this.set('onDisplay', this.onDisplay + keyContent);
                }
            }
        },

        // Decimal Key
        decimal(e) {
            let key = e.target;
            let action = key.dataset.action;
            let keyContent = key.textContent;
    
            // this checks if the action is equal to decimal and only adds a decimal to the display if there is not one already found. This prevents more than one decimal point being added. I used regex, but I could have also used .includes('.')
            if(action === 'decimal' && !/\./g.test(this.onDisplay)) {
                this.set('onDisplay', this.onDisplay + keyContent);
            }
        },

        // Operator Keys
        operator(e) {
            let key = e.target;
            let action = key.dataset.action;
            let keyContent = key.textContent;

            if(action === 'operator') {
                // Once an operator is clicked, it will set what is onDisplay to the firstNum variable in state.
                this.set('firstNum', this.onDisplay);
                // This clears the display between the first number and second number being chosen
                this.set('onDisplay', '');
                // This will set the operator variable to the correct operator based on which button was clicked.
                this.set('operator', keyContent);
                // console.log(this.firstNum);
                // console.log(this.operator);
            }
        },

        // Calculations
        equals() {
            // let key = e.target;
            // let keyContent = key.textContent;

            // Once the equals button is clicked it sets what is onDisplay to the secondNum variable 
            // Now we can use our firstNum, secondNum and operator variables to make the calculations
            this.set('secondNum', this.onDisplay);
            // console.log(keyContent);

            // Addition
            if(this.operator === '+') {
                // The plus (+) I used to turn the string into a number instead of ParseFloat
                let addition = +this.firstNum + +this.secondNum;
                this.set('onDisplay', addition);
                // console.log(addition);
            }

            // Subtraction
            if(this.operator === '-') {
                let subtraction = +this.firstNum - +this.secondNum;
                this.set('onDisplay', subtraction);
                // console.log(subtraction);
            }

            // Multiplication
            if(this.operator === 'x') {
                let multiplication = +this.firstNum * +this.secondNum;
                this.set('onDisplay', multiplication); 
                // console.log(multiplication);
            }

            // Division
            if(this.operator === '÷') {
                let division = +this.firstNum / +this.secondNum;
                this.set('onDisplay', division);
                // console.log(division);
            }
        },

        // Extras 
        plusMinus() {
            // This tests to makes sure there won't be more than one - symbol on the display
            if(/-/g.test(this.onDisplay)) {
                // Math.abs turns the negative integer back into a positive one
                this.set('onDisplay', Math.abs(this.onDisplay));
            } else {
                this.set('onDisplay', '-' + this.onDisplay);
            }
            // alert('Plus/Minus, I currently do not work');
        },
        
        // I did found a bug in this one!
        percent() {
            alert('Percent, I currently do not work');
        },
    }
});
