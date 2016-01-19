import {Component} from 'angular2/core';
import {Router} from "angular2/router";
import {Contact} from "./contact";

@Component({
    selector: 'contact',
    template: `
    <div>
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
        <button (click)="onCreateNew() ">Create new Contact from this contact</button>
    </div>
    `,
    inputs: ["contact"],
    styles: [`
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
    public contact: Contact = <Contact>{};

    constructor(private _router: Router){

    }

    onCreateNew() {
        this._router.navigate(['NewContactFromContact',{lastName: this.contact.lastName}])
    }
}