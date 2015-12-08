// Provide access for fetching Sprint data from the server
(function() {
  angular.module('app.services')
      .factory('Sprint', ['$resource', function($resource) {
        return $resource('/sprints/:id');
      }]);
})();
