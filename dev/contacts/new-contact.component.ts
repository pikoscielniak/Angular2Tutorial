///<reference path="../../node_modules/angular2/src/core/linker/interfaces.d.ts"/>
import {Component} from 'angular2/core'
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";

@Component({
    template: `
    <form #myForm="ngForm" (ngSubmit)="onSubmit()">
         <div>
            <label for="">First name</label>
            <input type="text"
            ngControl="firstName"
            required
            [(ngModel)]="newContact.firstName"
            #firstName="ngForm"
            >
            <span *ngIf="!firstName.valid">Not valid</span>
        </div>
        <div>
            <label for="">Last name</label>
            <input type="text"
            ngControl="lastName"
            required
            [(ngModel)]="newContact.lastName"
            >
        </div>
        <div>
            <label for="">Phone</label>
            <input type="text"
            ngControl="phone"
            required
            [(ngModel)]="newContact.phone"
            >
        </div>
        <div>
            <label for="">Email</label>
            <input type="text"
            ngControl="email"
            required
            [(ngModel)]="newContact.email"
            >
        </div>
        <button type="submit" [disabled]="!myForm.form.valid">Create Contact</button>
        </form>
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
        .ng-invalid {
            border: 1px solid red;
        }
    `]
})

export class NewContactComponent implements OnInit {

    public newContact:Contact;

    ngOnInit():any {
        this.newContact = {lastName: this._routeParams.get('lastName'),
        firstName:'', phone:'', email:''};
    }

    constructor(private _contactService:ContactService, private _router:Router,
                private _routeParams:RouteParams) {

    }

    onSubmit(){
        this._contactService.insertContact(this.newContact)
        this._router.navigate(['Contacts'])
    }
}
