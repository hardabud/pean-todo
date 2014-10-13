'use strict';
/* App Module */

var app = angular.module("app",  [
	'ngRoute',
	'routes'
]);

app.controller("AppCtrl", function($http) {
	var app = this;
	$http.get("http://localhost:3000/api")
		.success(function(data) {
			app.todos = data;		
		})
	app.addTodo = function(todo) {
		$http.post("http://localhost:3000/api", todo)
			.success(function(data) {
				app.todos = data;
				app.todo = '';
			})
	}
	app.delTodo = function(todo) {
		$http.post("http://localhost:3000/api/del/" + todo.id, todo)
			.success(function(data) {
				app.todos = data;
			})
	}
})

app.controller("EditCtrl", function($http, $routeParams) {
	var id = $routeParams.id;
	var oldname = $routeParams.oldname;
	var app = this;
	$http.get("http://localhost:3000/api/" + id)
		.success(function(data) {
			app.todo = data;
			app.oldname = oldname;		
		})
	app.editTodo = function(todo) {
		$http.post("http://localhost:3000/api/edit/" + todo.id, todo)
			.success(function(data) {
				app.todos = data;
			})
	}
})
