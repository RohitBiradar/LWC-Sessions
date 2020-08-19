import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track previousResults = [];
    @track showPreviousResults = false;
    firstNumber;
    secondNumber;

    numberChangeHandler (event) {
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber') {
            this.firstNumber = event.target.value;
        } else {
            this.secondNumber = event.target.value;
        }
    }

    addHandler (event) {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `Result of ${firstN} + ${secondN} is ${firstN + secondN}`;
        this.previousResults.push(this.currentResult);
    }

    subHandler (event) {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `Result of ${firstN} - ${secondN} is ${firstN - secondN}`;
        this.previousResults.push(this.currentResult);
    }

    multiplyHandler (event) {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `Result of ${firstN} * ${secondN} is ${firstN * secondN}`;
        this.previousResults.push(this.currentResult);
    }

    divisionHandler (event) {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `Result of ${firstN} / ${secondN} is ${firstN / secondN}`;
        this.previousResults.push(this.currentResult);
    }
    showPreviousResultsHandler (event) {
        this.showPreviousResults = event.target.checked;
    }
}