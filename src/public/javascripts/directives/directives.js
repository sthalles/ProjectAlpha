(function() {
  angular.module('app.directives', []);

  // Custom directive for the topnav bar
  angular.module('app.directives')
      .directive('topMenuBar', function() {
        return {
          restrict: 'E',
          scope: true,
          controller: 'TopMenuBarController',
          controllerAs: 'topMenuCtrl',
          templateUrl: 'pages/angular_templates/top-menu-bar.html'
        };
      });
})();
