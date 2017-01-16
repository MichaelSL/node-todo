System.config({
    baseURL: '/js',
    paths: {
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require(['angular', 'controllers/main.js', 'services/todos.js'], function(angular) {
    'use strict';
    angular.module('scotchTodo', ['todoController', 'todoService']);    
});