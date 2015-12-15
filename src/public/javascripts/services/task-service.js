// Provide access for fetching Sprint data from the server
(function() {
  angular.module('app.services')
      .factory('Tasks', ['$resource', function($resource) {
        return $resource('/tasks/:id');
      }]);
})();
