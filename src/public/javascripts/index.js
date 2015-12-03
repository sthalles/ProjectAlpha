(function() {
  var app = angular.module('app-name',
      ['ngMaterial', 'ngRoute', 'ngMdIcons', 'projects']);

  app.config(function($routeProvider) {
    $routeProvider
        // when the user is at root (/) assign the
        // mainController as the default controller
        .when('/projects', {
          templateUrl: 'projects/projects.html',
          controller: 'ProjectsController',
          controllerAs: 'projctrl'
        });
  });

  app.controller('MainController', function($scope, $location) {
    $scope.loadPage = function(path) {
      $location.path(path);
      console.log(path);
    };

    $scope.menu = [
      {
        link: '/projects',
        title: 'Projectss',
        icon: 'menu'
      },
      {
        link: '/settings',
        title: 'Option 1',
        icon: 'home'
      },
      {
        link: '/users',
        title: 'Option 2',
        icon: 'menu'
      }];
  });

  app.controller('ToolbarController', function() {

  });

})();
