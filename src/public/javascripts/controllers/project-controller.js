(function() {
  angular.module('app.project', []);

  angular.module('app.project')
      .controller('ProjectsController', ['$scope', 'Project',
        function($scope, Project) {
          $scope.projects = Project.query();
          $scope.getSprints = function(projectId) {
            alert(projectId);
          };
        }]);
})();
