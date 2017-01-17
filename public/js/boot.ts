import 'reflect-metadata';
import {UpgradeAdapter} from '@angular/upgrade';
import { BrowserModule } from '@angular/platform-browser';
import {NgModule, forwardRef} from '@angular/core';
import {HelloAngular2} from './components/hello-angular2';
import 'Zone';
//import 'js/core.js';
import 'angular';
import 'js/controllers/main.js';
import 'js/services/todos.js';

var adapter = new UpgradeAdapter(forwardRef(() => MyNg2Module));


var app = angular.module('scotchTodo', ['todoController', 'todoService']);    


app.directive('helloAngular2', adapter.downgradeNg2Component(HelloAngular2));

@NgModule({
 declarations: [HelloAngular2],
 imports: [BrowserModule]
})
class MyNg2Module {
}


adapter.bootstrap(document.body, ['scotchTodo']);