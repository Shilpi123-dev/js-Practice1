import { LightningElement } from 'lwc';

export default class App extends LightningElement {
 ready = false;
 
    name ='Electra X4';
    description ='A sweet Bike build for comfort.';
    category='Mountain';
    material='Steel';
    price='$2700';
    pictureurl='https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';

    
    connectedCallback(){
        setTimeout(()=>{
            this.ready= true;
            },5000) 
    }
}