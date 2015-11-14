'use strict';

angular.module('500techtest', ['ngResource','ngRoute'])

    .constant('version', 'v0.1.0')
    .constant('rssUrl', '/rss/')
    .constant('googleFeedApi', 'http://ajax.googleapis.com/ajax/services/feed/load')
    
    .config(function($locationProvider,$routeProvider) {

      $locationProvider.html5Mode(false);
      $routeProvider
        .when('/rss/:urlId', {
            templateUrl: 'views/content.html',
            controller: 'rssFeedCtrl'
        })
        .otherwise({
            template: 'Please feed me with url'
        });

    })
    .run(function($location,urlFeeds,rssUrl){
        var savedUrls =  localStorage.getItem('urls');
        var urls = savedUrls ? JSON.parse(savedUrls) : [];
        urlFeeds.setUrls(urls)
        
        var selectedUrl = localStorage.getItem('selectedId') || null;
        urlFeeds.setSelectedUrl(selectedUrl)
        if(typeof selectedUrl !== 'undefined'){
            $location.path(rssUrl+selectedUrl)
        }else{
            $location.path('/selecturl')
        }
    })    