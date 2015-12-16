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
       'ngResource'])
      .run(function($rootScope, $http, $location) {
        // define authetication variables that will be accessible to
        // the controllers
        $rootScope.authenticated = false;
        $rootScope.current_user = '';

        /**
         * Handles Logout/Signout action
         */
        $rootScope.signout = function() {
          $http.get('/auth/signout');
          $rootScope.authenticated = false;
          $rootScope.current_user = '';
          console.log('Action: Logout!');
          $location.path('/login'); // redirect to the login page
        };
      });

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
        })
        // for any other path, redirect to /projects
        .otherwise({redirectTo: '/projects'});
  });

  angular.module('app').controller('AuthController',
      function($scope, $http, $rootScope, $location) {
        $scope.user = {username: '', password: ''};
        $scope.error_message = '';

        /**
         * Handle log in action
         */
        $scope.login = function() {
          $http.post('/auth/login', $scope.user).success(function(data) {
            if (data.state == 'success') {
              console.log('Action: Logged in!');
              $rootScope.authenticated = true;
              $rootScope.current_user = data.user.username;
              $location.path('/');
            }
            else {
              $scope.error_message = data.message;
            }
          });
        };

        /**
         * Handle Signup/Register in action
         */
        $scope.register = function() {
          $http.post('/auth/signup', $scope.user).success(function(data) {
            if (data.state == 'success') {
              $rootScope.authenticated = true;
              $rootScope.current_user = data.user.username;
              console.log('Action: Signed in!');
              $location.path('/index');
            }
            else {
              $scope.error_message = data.message;
            }
          });
        };
      });
})();
