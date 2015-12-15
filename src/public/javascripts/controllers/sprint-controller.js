(function() {
  angular.module('app.sprint', []);

  // Inject the $routeParams service in order to get the url id param
  // TODO: also inject the $resource service to make calls,
  // using that id, and get the sprints from that project
  angular.module('app.sprint')
      .controller('SprintsController',
                  ['$scope', 'Sprints', '$routeParams', function($scope, Sprints, $routeParams) {

        // get the project id
        var projId = $routeParams.id;

        // TODO: use the project id to get the sprints
        $scope.sprints = Sprints.query();

        $('.collapsible').collapsible({
          accordion: false
        });
      }]);
})();
