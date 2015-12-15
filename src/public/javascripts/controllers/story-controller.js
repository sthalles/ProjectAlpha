(function() {
  angular.module('app.story', []);

  // Inject the $routeParams service in order to get the url id param
  // TODO: also inject the $resource service to make calls,
  // using that id, and get the sprints from that project
  angular.module('app.story')
      .controller('StoriesController', 
                  ['$scope', 'Stories', function($scope, Stories) {
        $scope.stories = Stories.query();
                    
        $('.collapsible').collapsible({
          accordion: false
        });
      }]);
})();
