import { LightningElement, api, wire, track } from 'lwc';
import ProfileImage from '@salesforce/resourceUrl/MyImages';

export default class PersonalProfileCard extends LightningElement {

    firstName = 'Nitin';
    lastName = 'Kumar';
    fullName = this.firstName + this.lastName;
    jobTitile = 'Senior Software Engineer';
    email = 'nitin.bw.kumar@gmail.com';
    phone = '9523121825';
    bio = 'My Name is Nitin, I have Completed my Engineering From Pune University in 2019 in COmputer Science Engineering';
    logo = ProfileImage;

    @api accountname = 'SBI'
}