import { LightningElement,api } from 'lwc';
import firsttemplate from './renderparent.html';
import secondtemplate from './renderchild.html';
export default class Renderparent extends LightningElement {

  @api  temp='temp1';
   @api onchange(){
        if (this.temp=='temp1') {
            this.temp='temp2';
        } else {
            this.temp='temp1';
        }
    }
    render() {
        console.log("Inside render");
        if (this.temp=='temp1') {
            return firsttemplate;
        } else {
            return secondtemplate;
        }
    }
    renderedCallback(){
        console.log("Inside rendered callback");
    }
}