import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api
    totalSum = 0;
    
}