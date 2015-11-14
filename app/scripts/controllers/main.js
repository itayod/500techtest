'use strict';

angular.module('500techtest')

  .controller('MainCtrl', function($scope, $location, version,rssUrl) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;
    $scope.rssUrl = rssUrl;
    
  });
