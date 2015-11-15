'use strict';

angular.module('500techtest')
.controller('rssFeedCtrl',function($scope,$routeParams,getFeed,urlFeeds){
    
    var init = function(){
        var url = urlFeeds.getUrls();
        if(url.length > 0){
            var selectedUrl = url[$routeParams.urlId].value
            getFeeds(selectedUrl)
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
