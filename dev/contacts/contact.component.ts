import {Component} from 'angular2/core';

@Component({
    selector: 'contact',
    template: `
        <div>
            <label for="">First name</label>
            <input [(ngModel)]="contact.firstName" type="text">
        </div>
        <div>
            <label for="">Last name</label>
            <input [(ngModel)]="contact.lastName" type="text">
        </div>
        <div>
            <label for="">Phone</label>
            <input [(ngModel)]="contact.phone" type="text">
        </div>
        <div>
            <label for="">Email</label>
            <input [(ngModel)]="contact.email" type="text">
        </div>
    `,
    inputs: ["contact"],
    styles:[`
        label {
            display: inline-block;
            width: 140px;
        }
        input {
            width: 250px;
        }
    `]
})
export class ContactComponent {
    public contact = {};
}