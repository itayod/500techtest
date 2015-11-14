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
    .run(function($location){
        $location.path('/selecturl')
    })    