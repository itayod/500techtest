'use strict';

angular.module('500techtest')
.controller('rssFeedCtrl',function($scope,getFeed,urlFeeds){
    
    var init = function(){
        console.log('hi')
        var url = urlFeeds.getSelectedUrl();
        if(url){
            getFeeds(url)
        }
    }
    var getFeeds = function(url){
        var promise = getFeed.get(url)
        promise.then(function(feeds){
            getFeedsList(feeds);
        })
    }
    var getFeedsList = function(feeds){
        $scope.entries = feeds.entries
    }
    
    init();
})