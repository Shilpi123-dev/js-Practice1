import { LightningElement,api } from 'lwc';

export default class Getinchild extends LightningElement {
    
    @api
    totalmarksObtain = 0;

    @api
    calculate(){

        var x = this.template.querySelector('[data-id="math"]').value;
        var y = this.template.querySelector('[data-id="science"]').value;
        this.totalmarksObtain= parseInt(x)+parseInt(y);

    }

}