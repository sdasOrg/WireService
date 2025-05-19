import { LightningElement,api,track,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class WireServiceAsMethod extends LightningElement {
    @api recordId;
    @track record;
    @track error;

    @wire(getRecord, {recordId: '$recordId' , fields : ['Account.Name']})
    wiredAccount({error,data}){
        if(data){
            this.record = data;
            console.log('Getting Data ' + data);
        }
        else if(error){
            this.error = error;
            console.log('Getting Error ' + error.body.message);
        }
    }

}