import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contact-list.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {NewContactComponent} from "./contacts/new-contact.component";
import {HTTPTestComponent} from "./http-test.component";
import {resolve} from "url";

@Component({
    selector: 'app',
    template: `
        <header>
            <nav>
                <a [routerLink]="['Contacts']">Contacts</a>
                <a [routerLink]="['NewContact']">New Contact</a>
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
            <http-test></http-test>
           <div class="pipes">
                <h2>Date Pipe</h2>
                <div>
                    {{date | date}}
                </div>
                 <div>
                    {{date | date:'y-m-d'}}
                </div>
                <div>
                    {{date | date:'short'}}
                </div>
                <div>
                    {{date | date:'fullDate'}}
                </div>
                <h2>Number Pipe</h2>
                <div>
                    {{4.566 | number:'1.2-2'}}
                </div>
                <h2>Currency Pipe</h2>
                <div>
                    {{15.99 | currency}}
                </div>
                <div>
                    {{15.99 | currency:'EUR'}}
                </div>
                <div>
                    {{15.99 | currency:'EUR':true}}
                </div>
                <div>
                    {{15.99 | currency:'EUR':true:'1.4-4'}}
                </div>
                <h2>Stateful Pipe</h2>
                <div>
                    {{ randomData | async}}
                </div>
           </div>
        </div>
    `,
    directives: [ContactListComponent, HTTPTestComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
    {path: '/newcontact', name: 'NewContact', component: NewContactComponent},
    {path: '/newcontact/:lastName', name: 'NewContactFromContact', component: NewContactComponent}
])
export class AppComponent {
    date = new Date();
    randomData = new Promise((resolve, reject)=> {
        setTimeout(() => resolve("Random data!"), 1000);
    });
}