///<reference path="../../node_modules/angular2/src/core/linker/interfaces.d.ts"/>
import {Component} from 'angular2/core'
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";

@Component({
    template: `
         <div>
            <label for="">First name</label>
            <input type="text" #firstName>
        </div>
        <div>
            <label for="">Last name</label>
            <input type="text" #lastName value="{{passedLastName}}">
        </div>
        <div>
            <label for="">Phone</label>
            <input type="text" #phone>
        </div>
        <div>
            <label for="">Email</label>
            <input type="text" #email>
        </div>
        <button (click)="onAddContact(firstName.value, lastName.value, phone.value, email.value)">Create Contact</button>
    `,
    providers: [ContactService],
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

export class NewContactComponent implements OnInit {
    public passedLastName = "";

    ngOnInit():any {
        this.passedLastName = this._routeParams.get('lastName');
    }

    constructor(private _contactService:ContactService, private _router:Router,
                private _routeParams:RouteParams) {

    }

    onAddContact(firstName, lastName, phone, email) {
        let contact:Contact = {firstName: firstName, lastName: lastName, phone: phone, email: email};
        this._contactService.insertContact(contact);
        this._router.navigate(['Contacts'])
    }
}
