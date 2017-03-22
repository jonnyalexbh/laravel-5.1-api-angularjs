'use strict';

angular.module('myApp')
.factory('NoteResource', function($resource) {
  return $resource("http://localhost:8000/notes/:id", {
    id: "@id"
  }, {
    update: {
      method: "PUT"
    }
  });
});
