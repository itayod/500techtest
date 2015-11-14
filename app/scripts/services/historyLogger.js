'use strict';

angular.module('500techtest')
.service('historyLogger',function($rootScope){
    var log = [];
    
    return{
        addToLog: function(action,value){
            var newLog = {action:action,value:value}
            log.push(newLog)
            $rootScope.$broadcast('log')
        },
        getLogString: function(){
            var logString = ''
            for(var i = 0; i < log.length; i++){
                if(i === 0){
                    logString += log[i].action+' : '+log[i].value
                }else{
                    logString += ' | then '+log[i].action+' : '+log[i].value
                }
            }
            return logString
        }
    }
})
