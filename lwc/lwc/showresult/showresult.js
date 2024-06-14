import { LightningElement } from 'lwc';

export default class Showresult extends LightningElement {

    resultfromchild=0;
    getvalue(){

       this.template.querySelector('c-getinchild').calculate();
       this.resultfromchild=this.template.querySelector('c-getinchild').totalmarksObtain;
    }
}