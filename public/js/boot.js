System.register(['reflect-metadata', '@angular/upgrade/static', '@angular/platform-browser', '@angular/core', './components/hello-angular2', './services/timezones', '@angular/platform-browser-dynamic', 'Zone', 'angular', 'js/controllers/main.js', 'js/services/todos.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var static_1, platform_browser_1, core_1, hello_angular2_1, timezones_1, platform_browser_dynamic_1, static_2;
    var MyNg2Module;
    return {
        setters:[
            function (_1) {},
            function (static_1_1) {
                static_1 = static_1_1;
                static_2 = static_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hello_angular2_1_1) {
                hello_angular2_1 = hello_angular2_1_1;
            },
            function (timezones_1_1) {
                timezones_1 = timezones_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {}],
        execute: function() {
            angular.module('scotchTodo', ['todoController', 'todoService']);
            angular.module('scotchTodo').directive('helloAngular2', static_1.downgradeComponent({ component: hello_angular2_1.HelloAngular2 }));
            angular.module('scotchTodo').factory('timeZones', static_1.downgradeInjectable(timezones_1.TimeZonesService));
            MyNg2Module = (function () {
                function MyNg2Module() {
                }
                MyNg2Module.prototype.ngDoBootstrap = function () { };
                ;
                MyNg2Module = __decorate([
                    core_1.NgModule({
                        declarations: [hello_angular2_1.HelloAngular2],
                        entryComponents: [hello_angular2_1.HelloAngular2],
                        imports: [platform_browser_1.BrowserModule, static_2.UpgradeModule],
                        providers: [timezones_1.TimeZonesService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyNg2Module);
                return MyNg2Module;
            }());
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(MyNg2Module).then(function (platformRef) {
                var upgrade = platformRef.injector.get(static_2.UpgradeModule);
                upgrade.bootstrap(document.documentElement, ['scotchTodo']);
            });
        }
    }
});
//# sourceMappingURL=boot.js.map