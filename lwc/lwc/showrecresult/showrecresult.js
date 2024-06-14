import { LightningElement,wire } from 'lwc';
import mymethod from '@salesforce/apex/accountRecord.mymethod';
export default class Showrecresult extends LightningElement {
    @wire(mymethod) lwcacclist;
}