import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

totalmarks;

    calculate(){

        var x = this.template.querySelector('[data-id="math"]').value;
        var y = this.template.querySelector('[data-id="science"]').value;   
        this.totalmarks= parseInt(x) + parseInt(y);

     }
    
   
    
}