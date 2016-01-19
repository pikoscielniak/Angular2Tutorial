import {Component} from 'angular2/core';

@Component({
    selector: 'contact',
    template: `
        <input [(ng Model)]="contact.firstName" type="text">
        <div>
            Phone number: {{contact.phone}}<br/>
            Email: {{contact.email}}
        </div>
    `,
    inputs: ["contact"]
})
export class ContactComponent {
    public contact = {};
}