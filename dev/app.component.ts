import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contact-list.component";

@Component({
    selector: 'app',
    template: `
    <contact-list></contact-list>
        <input [(ngModel)]="selectedContact.firstName" type="text">
        <div>
            Phone number: {{selectedContact.phone}}<br/>
            Email: {{selectedContact.email}}
        </div>
    `,
    directives: [ContactListComponent]
})
export class AppComponent {
}