import {Component} from '@angular/core';

@Component({
    selector: 'hello-angular2',
    template: '<h2>{{someText}}</h2>'
})
export class HelloAngular2 {
    someText: string;
    
    constructor() {
        this.someText = "Hello from Angular 2"
    }
}