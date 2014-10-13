var routes = angular.module('routes', []);

routes.config(['$routeProvider',
 function($routeProvider) {
 $routeProvider
 	.when('/', {
 		templateUrl: 'partials/index-page.html',
 		controller: 'AppCtrl'
 	})
 	.when('/:id/:oldname', {
 		templateUrl: 'partials/todo-page.html',
 		controller: 'EditCtrl'
 	})
 	.otherwise({
 		redirectTo: '/'
 	});
 }]);
