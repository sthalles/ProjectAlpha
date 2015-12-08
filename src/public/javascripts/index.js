(function() {
  angular.module('app',
      ['ngMaterial',
       'ngRoute',
       'ngMdIcons',
       'app.project',
       'app.services',
       'app.sprint',
       'app.directives']);

  angular.module('app').config(function($routeProvider) {
    $routeProvider
        // when the user is at root (/) assign the
        // mainController as the default controller
        .when('/projects', { // adds a new route definition to the $routeProvider service
          templateUrl: 'pages/projects/projects.html',
          controller: 'ProjectsController',
          controllerAs: 'projCtrl'
        })
        .when('/projects/:id', { // defines a route parameter for projects
          templateUrl: 'pages/sprints/sprints.html',
          controller: 'ShowSprintsController',
          controllerAs: 'sprintCtrl'
        })
        .when('/', { // if no other route definition is matched
          redirectTo: '/projects'
        })
        // for any other path, redirect to /projects
        .otherwise({redirectTo: '/projects'});
  });
})();
