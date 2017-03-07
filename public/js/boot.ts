import 'reflect-metadata';
import {NgModule, Component} from '@angular/core';
import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import {HelloAngular2} from './components/hello-angular2';
import {TimeZonesService} from './services/timezones';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import 'Zone';
import * as angular from 'angular';
import 'js/controllers/main.js';
import 'js/services/todos.js';


angular.module('scotchTodo', ['todoController', 'todoService']);
angular.module('scotchTodo').directive('helloAngular2', downgradeComponent({ component: HelloAngular2}));
angular.module('scotchTodo').factory('timeZones', downgradeInjectable(TimeZonesService));   

@NgModule({
 declarations: [HelloAngular2],
 entryComponents: [HelloAngular2],
 imports: [BrowserModule, UpgradeModule],
 providers: [TimeZonesService]
})
class MyNg2Module {
    ngDoBootstrap() {};
}

platformBrowserDynamic().bootstrapModule(MyNg2Module).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['scotchTodo']);
});