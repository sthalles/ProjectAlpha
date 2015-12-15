(function() {
  angular.module('app.project', []);

  angular.module('app.project')
      .controller('ProjectsController', ['$scope', 'Project', '$location',
        function($scope, Project, $location) {
          $scope.projects = Project.query();


          /**Get the selected project and redirects the user to the
           * sprint page passing the project id
           * @param {object} project Clicked project
           */
          $scope.getSprints = function(project) {
            var sprintPage = '/sprints/' + project._id;
            $location.path(sprintPage);
          };
        }]);
})();
