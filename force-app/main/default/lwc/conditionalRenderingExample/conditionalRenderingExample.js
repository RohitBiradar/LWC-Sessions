import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track displayDiv;
    @track cityName = ['Bidar',  'Gulbarga', 'Bijapur', 'Raichur'];
    showDivHandler (event) {
        this.displayDiv = event.target.checked;
    }
} 