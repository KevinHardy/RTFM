var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'loginController'
	})
	.when('/threads', {
		templateUrl:
		controller:
	})
	.when('/threads/:threadId', {
		templateUrl:
		controller:
	})
	.otherwise({
		redirectTo: '/login'
	})

});