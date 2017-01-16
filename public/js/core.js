require.config({
    baseUrl: 'js',
    paths: {
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require(['angular', 'controllers/main', 'services/todos'], function(angular) {
    'use strict';
    angular.module('scotchTodo', ['todoController', 'todoService']);    
});