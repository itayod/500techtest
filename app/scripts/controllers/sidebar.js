'use strict';

angular.module('500techtest')
.controller('sidebarCtrl',function($scope,urlFeeds){
    $scope.urls = []
    $scope.addUrl = function(url){
        urlFeeds.addUrl(url,updateUrls)
    }
    $scope.removeUrl = function(url){
        urlFeeds.removeUrl(url,updateUrls)
    }
    $scope.selectUrl = function(id){
        urlFeeds.selectUrl(id,updateUrls)
    }
    var updateUrls = function(urls){
        $scope.urls = urls;
    }

})

