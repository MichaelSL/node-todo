System.register(['reflect-metadata', '@angular/upgrade', '@angular/platform-browser', '@angular/core', './components/hello-angular2', 'Zone', 'angular', 'js/controllers/main.js', 'js/services/todos.js'], function(exports_1, context_1) {
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
    var upgrade_1, platform_browser_1, core_1, hello_angular2_1;
    var adapter, app, MyNg2Module;
    return {
        setters:[
            function (_1) {},
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
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
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {}],
        execute: function() {
            adapter = new upgrade_1.UpgradeAdapter(core_1.forwardRef(function () { return MyNg2Module; }));
            app = angular.module('scotchTodo', ['todoController', 'todoService']);
            app.directive('helloAngular2', adapter.downgradeNg2Component(hello_angular2_1.HelloAngular2));
            MyNg2Module = (function () {
                function MyNg2Module() {
                }
                MyNg2Module = __decorate([
                    core_1.NgModule({
                        declarations: [hello_angular2_1.HelloAngular2],
                        imports: [platform_browser_1.BrowserModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyNg2Module);
                return MyNg2Module;
            }());
            adapter.bootstrap(document.body, ['scotchTodo']);
        }
    }
});
//# sourceMappingURL=boot.js.map