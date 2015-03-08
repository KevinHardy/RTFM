var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'loginController'
	})
	.when('/threads', {
		templateUrl: 'threads.html',
		controller: 'threadsCtrl',
		resolve: {
    		threadsRef: function (ThreadService) {
      			return ThreadService.getThreads();
    		}
  		}
	})
	.when('/threads/:threadId', {
		//templateUrl:
		//controller:
	})
	.otherwise({
		redirectTo: '/login'
	})

});

app.run(function($rootScope, $location, EnvironmentService) {

	$rootScope.$on($routeChangeStart, function() {
		if (!EnvironmentService.getUserName()) {
			$location.path('/login');
		} else {
			return $rootScope.getUserName();
		}
	})

});