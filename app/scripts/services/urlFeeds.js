'use strict';

angular.module('500techtest')
.service('urlFeeds',function($rootScope,$location,rssUrl,historyLogger){
    var urls = null;
    var selectedUrl = null;
    var reorderUrls = function(){
        for(var i = 0; i < urls.length; i++){
            urls[i].id = i
        }
    }
    return{
        setUrls: function(data){            
            urls = data;
        },
        setSelectedUrl: function(data){            
            selectedUrl = data;
        },
        getUrls: function(){
            return urls;
        },
        getSelectedUrl: function(){
            //todo do something if urls/selectedUrl doesnt exist
            if(typeof selectedUrl !== null){
                return urls[selectedUrl].value;
            }
            return false
        },
        addUrl: function(url,callback){
            var id = urls.length
            var newUrl = {'id':id,'value':url}
            urls.push(newUrl);
            historyLogger.addToLog('url added',url)
            this.selectUrl(id,callback)
        },
        removeUrl: function(url,callback){
           //todo do something if url.length = 1.
           var index = urls.indexOf(url);
            if (index !== -1) {
                urls.splice(index, 1);
            }
            reorderUrls();
            historyLogger.addToLog('url removed',url.value)
            this.selectUrl(urls.length-1,callback)
        },
        selectUrl: function(id,callback){
            
            if(typeof selectedUrl !== null){
                if(urls[selectedUrl]){
                    urls[selectedUrl].selected = false 
                }
            }
            urls[id].selected = true;
            $location.path(rssUrl+id)
            
            this.setSelectedUrl(id)
            localStorage.setItem('selectedId', id);
            
            return callback(urls)
        }
    }
    
})
