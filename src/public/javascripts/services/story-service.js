// Provide access for fetching Sprint data from the server
(function() {
  angular.module('app.services')
      .factory('Stories', ['$resource', function($resource) {
        return $resource('/stories/:id');
      }]);
})();
