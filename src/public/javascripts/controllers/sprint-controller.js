(function() {
  angular.module('app.sprint', []);

  // Inject the $routeParams service in order to get the url id param
  // TODO: also inject the $resource service to make calls, using that id, and get the sprints from that project
  angular.module('app.sprint')
      .controller('ShowSprintsController',
                  ['$routeParams', 'Project', function($routeParams, Project) {
                    this.projectId = $routeParams.id;

      }]);
})();
