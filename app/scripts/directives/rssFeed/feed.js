'use strict';

angular.module('500techtest')

  .directive('feed', function($compile) {

    return {
      restrict: 'E',
      scope: true,
      link: function (scope, elem, attrs) {
        var html= '<div class="feed-block"><div class="feed-title">'+attrs.title+' - '+attrs.date+'</div>'+'\n\
        <div>'+attrs.content+'</div></div>'
        elem.html(html);

        $compile(elem.contents())(scope);
      }
    };

  });
