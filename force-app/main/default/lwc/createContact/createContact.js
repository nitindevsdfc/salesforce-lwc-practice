import { LightningElement } from 'lwc';

export default class CreateContact extends LightningElement {

    _leadSource;
    _primaryContact;
    _firstName;
    _lastName;
    _email;
    _phone;


    _options = [
        {label : 'Call', value : 'Call'},
        {label : 'Phone Inquiry', value : 'PhoneInquiry'},
        {label : 'Email', value : 'email'},
        {label : 'External Resource', value : 'externalResource'},
        {label : 'Campaign', value : 'campaign'},
        {label : 'Other', value : 'Other'}
    ]

    handleFirstName(event){
         console.log('handleFirstName');
         console.log(event);
         console.log(event.target);
         console.log(event.target.value);
         console.log(event.target.name);
         console.log(event.target.variant);
         console.log(event.target.label);
         console.log('--------------------');
         this._firstName = event.target.value;
    }

    handleLastName(event){
        console.log('handleLastName');
         console.log(event);
         console.log(event.target);
         console.log(event.target.value);
         console.log('--------------------');
         this._lastName = event.target.value;
    }

    handleEmail(event){
         console.log('handleEmail');
         console.log(event);
         console.log(event.target);
         console.log(event.target.value);
         console.log('--------------------');
         this._email = event.target.value;
    }

    handlePhone(event){
        console.log('handlePhone');
         console.log(event);
         console.log(event.target);
         console.log(event.target.value);
         console.log('--------------------');
         this._phone = event.target.value;
    }

    handleLeadSource(event){
        console.log('handleLeadSource');
         console.log(event);
         console.log(event.target);
         console.log(event.target.value);
         console.log('--------------------');
         this._leadSource = event.target.value;
    }

    handlePrimary(event){
         console.log('handlePrimaryContact');
         console.log(event);
         console.log(event.target);
         console.log(event.target.checked);
         console.log('--------------------');
         this._primaryContact = event.target.checked;
    }

    handleMouseOver(event){
        alert('Mouse Over');
    }

    handleEnterKey(event){
        console.log(event.key);
    }

    handleCreateContact(event){
        console.log('Handle Contact Creation');
        console.log(this._firstName);
        console.log(this._lastName);
        console.log(this._email);
        console.log(this._leadSource);
        console.log(this._phone);
        console.log(this._primaryContact);
    }

    handleCancel(event){
        
    }


}