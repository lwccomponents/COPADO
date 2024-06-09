import { LightningElement } from 'lwc';
export default class ChildToParentCompWithParent extends LightningElement {

valueOfInv;
handleMessage(event){
    this.valueOfInv=event.detail;
    console.log(this.valueOfInv);
}
}