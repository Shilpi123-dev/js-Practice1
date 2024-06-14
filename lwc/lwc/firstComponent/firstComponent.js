import { LightningElement } from 'lwc';

export default class FirstComponent extends LightningElement {

    name ='Anki';   //property or like global var
    totalMarks=0;
    showresult = false;
    message = '';

    acclist =[

        {
            "Name":"Shilpi",
            "NumberOfEmployees":23

        },

        {
            "Name":"sumit",
            "NumberOfEmployees":24

        }


    ]

     funFunction(){

        this.name='Rohan';
        var mathMrks = this.template.querySelector('[data-id="math"]').value;
        var sciMrks = this.template.querySelector('[data-id="science"]').value;
        this.totalMarks= parseInt(mathMrks) + parseInt(sciMrks);
        if(this.totalMarks>100){
            this.showresult=true;
            this.message='Pass';
        }
        else{
            this.showresult=true;
            this.message='Fail';
        }

    }

}