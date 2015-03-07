var app = angular.module('rtfmApp');

app.controller('LoginController', function(EnvironmentService, $scope, $location) {

	$scope.env = EnvironmentService;

	$scope.logMeIn = function(username) {
		alert(username);
	}

	$scope.$apply(function(){
    	$location.path('/threads')
	});
});