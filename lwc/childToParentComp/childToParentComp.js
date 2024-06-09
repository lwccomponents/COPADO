import { LightningElement } from 'lwc';
export default class ChildToParentComp extends LightningElement {
textValue = '';

handleChange(event){
    this.textValue = event.target.value;
    console.log(this.textValue);
    const productDetails = new CustomEvent('sendinginvoicedetails',{
     detail:this.textValue
    });
	
	
    this.dispatchEvent(productDetails);
}
}