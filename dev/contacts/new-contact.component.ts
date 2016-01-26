///<reference path="../../node_modules/angular2/src/core/linker/interfaces.d.ts"/>
import {Component} from 'angular2/core'
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {FormBuilder} from "angular2/common";
import {Validators} from "angular2/common";

@Component({
    template: `
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
         <div>
            <label for="first-name">First name</label>
            <input type="text" id="first-name"
            [ngFormControl]="myForm.controls['firstName']"
            >
            <span *ngIf="!myForm.controls['firstName']">Not valid</span>
            <!--<span *ngif="!firstName.valid">Not valid</span>-->
        </div>
        <div>
            <label for="last-name">Last name</label>
            <input type="text" id="last-name"
            [ngFormControl]="myForm.controls['lastName']">
        </div>
        <div>
            <label for="phone">Phone</label>
            <input type="text" id="phone"
            [ngFormControl]="myForm.controls['phone']">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="text" id="email"
            [ngFormControl]="myForm.controls['email']">
        </div>
        <button type="submit" [disabled]="!myForm.valid">Create Contact</button>
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

    myForm:ControlGroup


    ngOnInit():any {
        //this.newContact = {lastName: this._routeParams.get('lastName'),
        //firstName:'', phone:'', email:''};
        this.myForm = this._formBuilder.group({
            'firstName': ['', Validators.required],
            'lastName': [this._routeParams.get('lastName'), Validators.required],
            'phone': ['', Validators.required],
            'email': ['', Validators.required]
        });
    }

    constructor(private _contactService:ContactService, private _router:Router,
                private _routeParams:RouteParams, private _formBuilder:FormBuilder) {
    }

    onSubmit(value) {
        //this._contactService.insertContact(this.newContact)
        this._contactService.insertContact(value)
        this._router.navigate(['Contacts'])
    }
}
