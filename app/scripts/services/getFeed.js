'use strict';


angular.module('500techtest')
.factory('FeedLoader', function ($resource,googleFeedApi) {
    return $resource(googleFeedApi, {}, {
        fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
    });
})
.service('getFeed', function (FeedLoader, $q) {
    return{
        get: function(feedUrl) {
            //todo add error handler
            var deferred= $q.defer();      
            var feedSource = feedUrl;
            FeedLoader.fetch({q: feedSource, num: 10}, {}, function (data) {
                //check for errors!
                var feed = data.responseData.feed;
                deferred.resolve(feed);
            });

            return deferred.promise;
        }
    }
});
