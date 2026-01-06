import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    welcomeMessage = 'Hello World This is my First LWC.';
    introduction = 'Hey My Name is Nitin Kumar';
    educationQualification = "I am BE Graduate from Savitri Phule Pune University(SPPU).";
    website = 'www.nitinEnterprises.com';
    person = {
        // name : "Nitin Kumar",
        // age : 26,
        // address : {
        //     city : "Delhi",
        //     state : 'Delhi',
        //     country : 'India',
        //     pincode : '895622'
        // }
    }

    employess = [
        {id : '01', name : 'ABC', age : 45},
        {id : '02', name : 'XYZ', age : 54},
        {id : '03', name : 'LMN', age : 44}
    ];

    fruits = ['Apple', 'Grapes', 'Mango', 'Guava', 'Avocado', 'Kiwi'];


}