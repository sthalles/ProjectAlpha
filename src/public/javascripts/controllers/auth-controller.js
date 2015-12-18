(function() {

  angular.module('app.auth', []);

  //  Defines the signout function within the global scope
  //  so that it can be accessed from any controller
  angular.module('app').run(function($rootScope, $http, $location) {
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

  angular.module('app.auth').controller('AuthController',
      function($scope, $http, $rootScope, $location) {
        $scope.user = {
          username: '',
          password: ''
        };
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
              $location.path('/projects');
            } else {
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
              $location.path('/projects');
            } else {
              $scope.error_message = data.message;
            }
          });
        };
      });
})();
