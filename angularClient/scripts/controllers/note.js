'use strict';

angular.module('myApp')

.controller('IndexNoteCtrl', function ($scope, NoteResource, $location, $timeout) {
  $scope.Notes = NoteResource.query();
  $scope.removeNote = function(id) {
    NoteResource.delete({
      id: id
    });
    Materialize.toast('Deleted Note.', 5000, 'green accent-4');
    $timeout(function() {
      $location.path('/notes');
    }, 1000);
  };
})

.controller('CreateNoteCtrl', function($scope, NoteResource, $location, $timeout){
  $scope.title = "Create Note";
  $scope.button = "Save";
  $scope.Note = {};
  $scope.saveNote = function(){
    NoteResource.save($scope.Note);
    Materialize.toast('Note Created.',5000,'green accent-4');
    $timeout(function(){
      $location.path('/notes');
    },1000);
  };
})

.controller('EditNoteCtrl', function($scope, NoteResource, $location, $timeout, $routeParams){
  $scope.title="Edit Note";
  $scope.button="Update";
  $scope.Note=NoteResource.get({
    id: $routeParams.id
  });

  $scope.saveNote = function(){
    NoteResource.update($scope.Note);
    Materialize.toast('Nota Actualizada.',5000,'green accent-4');
    $timeout(function(){
      $location.path('/notes');
    },1000);
  }

});
