;'use strict';

angular.module('ui-multi-gravatar', [])
  .directive('multiAvatar', ['md5', function (md5) {
    return {
      restrict: 'E',
      link:function(scope, element, attrs) {

        var facebookId = attrs.facebookId;
        var githubUsername = attrs.githubUsername;
        var email = attrs.email;

        var tag = '';
        if ((facebookId !== null) && (facebookId !== undefined) && (facebookId !== '')) {
          tag = '<img src="http://graph.facebook.com/' + facebookId + '/picture?width=200&height=200" class="img-responsive"/>'
        } else if ((githubUsername !== null) && (githubUsername !== undefined) && (githubUsername !== '')){
          tag = '<img src="https://identicons.github.com/' + githubUsername + '.png" style="width:200px; height:200px" class="img-responsive"/>';
        } else { 
          var hash = ""
          if ((email !== null) && (email !== undefined) && (email !== '')){
            var hash = md5.createHash(email.toLowerCase());
          }
          var src = 'https://secure.gravatar.com/avatar/' + hash + '?s=200&d=mm'
          tag = '<img src=' + src + ' class="img-responsive"/>'
        }

        element.append(tag);
      }
    };
  }]);
