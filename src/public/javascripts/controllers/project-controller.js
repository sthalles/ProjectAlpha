(function() {
  angular.module('app.project', []);

  angular.module('app.project')
      .controller('ProjectsController', ['$scope', 'Project',
        function($scope, Project) {
          // TODO: make the proper GET request to fetch projects data
          $scope.projects = Project.query();
        }]);

})();
