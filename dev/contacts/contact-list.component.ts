import {Component} from 'angular2/core'
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {OnInit} from "angular2/core";
import {CONTACTS} from "./mock-contact";

@Component({
    selector: 'contact-list',
    template: `
    <ul>
    <li [class.clicked]="selectedContact === contact" *ngFor="#contact of contacts" (click)="onSelect(contact)">
        {{contact.firstName}} {{contact.lastName | uppercase}}
    </li>
    </ul>
    <contact *ngIf="selectedContact !== null" [contact]="selectedContact"></contact>
    `,
    directives: [ContactComponent],
    providers: [ContactService],
    styleUrls: ["../src/css/contact-list.css"]
})
export class ContactListComponent implements OnInit {
    public contacts:Contact[];
    public selectedContact = null;

    ngOnInit():any {
        debugger
        this.getContacts();
    }

    constructor(private _contactService:ContactService) {

    }

    onSelect(contact) {
        this.selectedContact = contact;
    }

    getContacts() {
        this._contactService.getContacts().then((contacts:Contact[]) =>
            this.contacts = contacts);
    }
}
