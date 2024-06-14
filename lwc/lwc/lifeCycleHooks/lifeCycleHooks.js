import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {

    showspinner = true;

constructor(){
   super();
       console.log('Constructor Called ');
    }

    connectedCallback(){
        console.log('Connected callback Called ');
    }
    
    renderedCallback(){
        
        setTimeout(() => {
            this.showspinner= false;
            
        }, 5000);
        console.log('Rendered callback Called ');
    }

    disconnectedCallback(){
        console.log('disConnected callback Called ');
    }
}