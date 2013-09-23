AngularJS Multi Avatar Directive
================================

How to Use
----------

Ruleset:

0. Will use facebook image first
0. Will user github image if no facebook ID, but has a github username
0. Will fallback to gravatar image (which itself will fallback to a blank user image)

In your HTML, use the following. Depending on what your user has defined, it'll
display an avatar:

```
<div ng-app='YourApp' ng-controller='UsersController'>
  <multi-avatar data-facebook-id='' data-github-username='' data-email=''>
</div>
```

In your Javascript (coffee):

```
YourApp = angular.module("Centrifuge", ["multi-avatar"]);
YourApp.controller "UsersController", ($scope, 'multi-avatar')
```


Find More Information
---------------------

TODO: fill in link to published article

TODO
----

* Integration with Bower

License
-------
MIT License, See LICENSE.txt

