'use strict';

angular.module('myApp',['ngResource','ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/notes',{
    templateUrl: 'views/note/index.html',
    controller: 'IndexNoteCtrl'
  })
  .when('/notes/new',{
    templateUrl: 'views/note/create.html',
    controller: 'CreateNoteCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
