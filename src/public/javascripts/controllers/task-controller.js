(function() {
  angular.module('app.task', []);

  // Inject the $routeParams service in order to get the url id param
  // TODO: also inject the $resource service to make calls,
  // using that id, and get the sprints from that project
  angular.module('app.task')
      .controller('TasksController', 
                  ['$scope', 'Tasks', function($scope, Tasks) {
        $scope.tasks = Tasks.query();
                    
        $('.collapsible').collapsible({
          accordion: false
        });
      }]);
})();
