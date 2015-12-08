// Provide access for fetching Sprint data from the server
(function() {
  angular.module('sprintService', []);

  angular.module('sprintService')
      .factory('Sprint', ['$resource', function($resource) {
        return $resource('/api/sprints/:id');
      }]);
})();
