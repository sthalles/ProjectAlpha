(function() {
  /* Services */

  angular.module('app.services', ['ngResource']);

  angular.module('app.services')
      .factory('Project', ['$resource',
        /**
     * Provide access to the projects data from the server
     * @param   {object} $resource Service that provides a way of
     *                           interating with RAESTful APIs
     * @return {object} A resource "class" object with methods for
     *                  the default set of resource actions optionally
     *                  extended with custom actions. see:
     *                  https://docs.angularjs.org/api/ngResource/service/$resource
     *                  in the 'Return' section.
     */
        function($resource) {
          return $resource('/projects/:id');
        }]);
})();
