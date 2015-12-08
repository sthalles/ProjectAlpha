(function() {
  angular.module('app.project', []);

  angular.module('app.project')
      .controller('ProjectsController', ['$scope', 'Project',
        function($scope, Project) {
          // TODO: make the proper GET request to fetch projects data
          // $scope.projects = Project.query();

          // FIXME: remove this line and get the real data from the server
          $scope.projects = [
            {name: 'Project 1'},
            {name: 'Project 2'},
            {name: 'Project 3'},
            {name: 'Project 4'},
            {name: 'Project 5'}];
        }]);

})();
