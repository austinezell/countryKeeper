var app = angular.module('passportTest');


app.controller('privateCtrl', function($scope, Auth, $state, Countries) {
  if(!Auth.isLoggedIn()){
    $state.go('home')
  }

  $scope.user = Auth.currentUser()

  $scope.getBlurb = function(country){
    Countries.lookup(country)
  }
});
