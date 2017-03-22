'use strict';

angular.module('myApp')

.controller('IndexNoteCtrl', function () {
})

.controller('CreateNoteCtrl', function($scope, NoteResource){
  $scope.title = "Create Note";
  $scope.button = "Save";
  $scope.Note = {};
  $scope.saveNote = function(){
    //console.log($scope.Note);
    NoteResource.save($scope.Note);
  };
});
