'use strict';

var app = angular.module('rtfmApp');

app.controller('ThreadsCtrl', function($scope, threadsrefm $routeProvider) {

	$scope.threads = threadsRef.$asArray();

	$scope.threads = threadsRef.$asArray();

    $scope.threads.$loaded().then(function (threads) {
      console.log(threads);
    });

    $scope.createThread = function (username, title) {
      $scope.threads.$add({
        username: username,
        title: title
      });
    }

	$routeProvider
	.when('/threads', {
		templateUrl: 'views/threads.html',
		controller: 'ThreadsCtrl',
		resolve: {
		threadsRef: function (ThreadService) {
				return ThreadService.getThreads();
			}
		}
	})



});