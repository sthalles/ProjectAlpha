(function() {
  angular.module('app.sprint', []);

  // Inject the $routeParams service in order to get the url id param
  // TODO: also inject the $resource service to make calls,
  // using that id, and get the sprints from that project
  angular.module('app.sprint')
      .controller('SprintsController', 
                  ['$scope', 'Sprints', function($scope, Sprints) {
        $scope.sprints = Sprints.query();
                    
        $('.collapsible').collapsible({
          accordion: false
        });
      }]);
})();
