'use strict';

angular.module('500techtest')
.service('urlFeeds',function($rootScope,$location,rssUrl){
    var urls = [];
    var selectedUrl = '';
    var reorderUrls = function(){
        for(var i = 0; i < urls.length; i++){
            urls[i].id = i
        }
    }
    return{
        addUrl: function(url,callback){
            var id = urls.length
            var newUrl = {'id':id,'value':url}
            urls.push(newUrl);
            this.selectUrl(id,callback)
        },
        removeUrl: function(url,callback){
           //todo do something if url.length = 1.
           var index = urls.indexOf(url);
            if (index !== -1) {
                urls.splice(index, 1);
            }
            reorderUrls();
            this.selectUrl(urls.length-1,callback)
        },
        getUrls: function(){
            return urls;
        },
        selectUrl: function(id,callback){
            
            if(typeof selectedUrl === 'number'){
                if(urls[selectedUrl]){
                    urls[selectedUrl].selected = false 
                }
            }
            urls[id].selected = true;
            $location.path(rssUrl+id)
            selectedUrl = id;
            console.log(urls)
            return callback(urls)
        }
    }
    
})
