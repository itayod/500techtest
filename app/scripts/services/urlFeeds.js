'use strict';

angular.module('500techtest')
.service('urlFeeds',function($rootScope){
    var urls = [];
    var reorderUrls = function(){
        for(var i = 0; i < urls.length; i++){
            urls[i].id = i
        }
    }
    return{
        addUrl: function(url,callback){
            var newUrl = {'id':urls.length,'value':url}
            urls.push(newUrl);
            $rootScope.$broadcast('url-change', { action:'add',value:url });
            return callback(urls);
        },
        removeUrl: function(url){
           var index = urls.indexOf(url);
            if (index !== -1) {
                urls.splice(index, 1);
            }
            reorderUrls();

        },
        getUrls: function(){
            return urls;
        }
        //selectUrl?
    }
})
