import { LightningElement,api,wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import kWh_Average_Field from '@salesforce/schema/SolarBot__c.All_Time_kWh_Average__c';
import kWh_Roll_Up_Field from '@salesforce/schema/SolarBot__c.kWh_Roll_Up__c';

const FIELDS = [kWh_Average_Field, kWh_Roll_Up_Field];

export default class WireServiceOnCustomObject extends LightningElement {
    @api recordId;
    @wire (getRecord, {recordId : '$recordId' , fields : FIELDS}) record;
    get kWh(){
        return getFieldValue(this.record.data, kWh_Average_Field);
    }
    get rollUp(){
        return getFieldValue(this.record.data, kWh_Roll_Up_Field);
    }
}