System.register(['@angular/upgrade', './components/hello-angular2'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var upgrade_1, hello_angular2_1;
    var adapter;
    return {
        setters:[
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
            },
            function (hello_angular2_1_1) {
                hello_angular2_1 = hello_angular2_1_1;
            }],
        execute: function() {
            adapter = new upgrade_1.UpgradeAdapter();
            app.directive('helloAngular2', adapter.downgradeNg2Component(hello_angular2_1.HelloAngular2));
            adapter.bootstrap(document.body, ['scotchTodo']);
        }
    }
});
//# sourceMappingURL=boot.js.map