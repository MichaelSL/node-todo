require(['angular', 'js/controllers/main.js', 'js/services/todos.js'], function(angular) {
    'use strict';
    var app = angular.module('scotchTodo', ['todoController', 'todoService']);    
});