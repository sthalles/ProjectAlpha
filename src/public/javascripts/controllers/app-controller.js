(function() {

  angular.module('app')
      .controller('AddButtonController',
      function($scope, $location, $mdDialog) {

        $scope.showAdd = function(ev) {
          $mdDialog.show({
            //        controller: DialogController,
            template: '<md-dialog aria-label="Form"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="user.lastName"> </md-input-container> </div> <md-input-container flex> <label>Message</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
            targetEvent: ev,
          })
              .then(function(answer) {
                $scope.alert = 'You said the information was "' + answer + '".';
              }, function() {
                $scope.alert = 'You cancelled the dialog.';
              });
        };


      });

  // controller for handling the topbar logic
  angular.module('app')
      .controller('TopMenuBarController', function($scope) {

      });

  // Controller for handling the left sidenav logic
  angular.module('app')
      .controller('LeftSideNaveController',
                  function($scope, $location) {

        $scope.loadPage = function(path) {
          $location.path(path);
          console.log(path);
        };

        $scope.menu = [
          {
            link: '/projects',
            title: 'Projects',
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
})();
