import {Component,EventEmitter} from "angular2/core";
import {Output} from "angular2/core";

@Component({
    selector: 'child',
    template: `
        <h2>Child</h2>
        <p>Value entered in parent component: {{parentValue}}</p>
        <input type="text" #childInput (keyup)="onChange(childInput.value)">
    `,
    inputs: ['parentValue:passedValue']
    // outputs: ['childChanged'] //to ways to do the same, it's also possible with input
})
export class ChildComponent {
    parentValue:string;
    @Output() childChanged = new EventEmitter<string>();

    onChange(value:string) {
        this.childChanged.emit(value);
    }
}