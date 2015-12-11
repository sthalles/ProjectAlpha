// Provide access for fetching Sprint data from the server
(function() {
  angular.module('app.services')
      .factory('Sprints', ['$resource', function($resource) {
        return $resource('/sprints/:id');
      }]);
})();
