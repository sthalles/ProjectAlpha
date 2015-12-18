(function() {
  angular.module('app',
      ['ngMaterial',
       'ngRoute',
       'ngMdIcons',
       'app.project',
       'app.services',
       'app.sprint',
       'app.story',
       'app.task',
       'app.directives',
       'app.auth',
       'ngResource']);

  angular.module('app').config(function($routeProvider) {
    // adds a new route definition to the $routeProvider service
    $routeProvider
        // when the user is at root (/) assign the
        // mainController as the default controller
        .when('/login', {
          templateUrl: 'pages/authenticate/login.html',
          controller: 'AuthController',
          controllerAs: 'loginCtrl'
        })
        //the signup display
        .when('/register', {
          templateUrl: 'pages/authenticate/register.html',
          controller: 'AuthController',
          controllerAs: 'loginCtrl'
        })
        .when('/projects', {
          templateUrl: 'pages/projects/projects.html',
          controller: 'ProjectsController',
          controllerAs: 'projCtrl'
        })
        // TODO: handle request to an specific project
        .when('/projects/:id', { // defines a route parameter for projects
          templateUrl: '',
          controller: '',
          controllerAs: ''
        })
        .when('/project/sprints/:id', { // defines a route parameter for sprints
          templateUrl: 'pages/sprints/sprints.html',
          controller: 'SprintsController',
          controllerAs: 'sprintCtrl'
        })
        .when('/stories/:id', { // defines a route parameter for sprints
          templateUrl: 'pages/tasks/tasks.html',
          controller: 'TasksController',
          controllerAs: 'TaskCtrl'
        })
        .when('/', { // if no other route definition is matched
          redirectTo: '/projects'
        });
    // for any other path, redirect to /projects
    //.otherwise({redirectTo: '/projects'});
  });
})();
