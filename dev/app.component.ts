import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
    <ul><li *ngFor="#contact of contacts" (click)="onSelect(contact)"
        [class.clicked]="selectedContact === contact"
        >{{contact.firstName}} {{contact.lastName}}
    </li></ul>
        <input [(ngModel)]="selectedContact.firstName" type="text">
        <div>
            Phone number: {{selectedContact.phone}}<br/>
            Email: {{selectedContact.email}}
        </div>
    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
    public contacts = [{
        firstName: "Max",
        lastName: "Schwartz",
        phone: '0137 1350 928',
        email: 'info@schwartz.com'
    }, {
        firstName: "Chris",
        lastName: "Alloy",
        phone: '0137 555 928',
        email: 'info@alloy.com'
    }, {
        firstName: "Michael",
        lastName: "Galah",
        phone: '0137 3333 928',
        email: 'info@galah.com'
    }, {
        firstName: "Indira",
        lastName: "Raches",
        phone: '0137 2222 928',
        email: 'info@raches.com'
    }];

    public selectedContact = {};

    onSelect(contact) {
        this.selectedContact = contact;

    }
}