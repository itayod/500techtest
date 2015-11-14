'use strict';

angular.module('500techtest')

  .controller('MainCtrl', function($scope,$location,version,rssUrl,historyLogger) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;
    $scope.rssUrl = rssUrl;
    $scope.log = 'initial state';
    $scope.$on('log',function(){
        //check that log is not empty
        var logString = historyLogger.getLogString();
        if(historyLogger.getLogString()){
            $scope.log = historyLogger.getLogString();
        }
    })
    
  });
