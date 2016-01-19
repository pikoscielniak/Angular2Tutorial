import {Component} from 'angular2/core'
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {OnInit} from "angular2/core";

@Component({
    selector: 'contact-list',
    template: `
    <ul>
    <li *ngFor="#contact of contacts" (click)="onSelect(contact)"
        [class.clicked]="selectedContact === contact"
        >{{contact.firstName}} {{contact.lastName}}
    </li>
    </ul>
    <contact [contact]="selectedContact"></contact>
    `,
    directives: [ContactComponent],
    providers: [ContactService],
    styleUrls: ["../src/css/app.css"]
})
export class ContactListComponent implements OnInit {

    ngOnInit():any {
        this.getContacts();
    }

    public contacts:Contact[];

    constructor(private _contactService:ContactService) {

    }

    public selectedContact = {};

    onSelect(contact) {
        this.selectedContact = contact;

    }

    getContacts() {
        this._contactService.getContacts().then((contacts:Contact[]) =>
            this.contacts = contacts);
    }
}
