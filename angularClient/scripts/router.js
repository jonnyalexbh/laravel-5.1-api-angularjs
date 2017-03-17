'use strict';

angular.module('myApp',['ngResource','ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/notes',{
    templateUrl: 'views/note/index.html',
    controller: 'IndexNoteCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
