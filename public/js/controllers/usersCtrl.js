var app = angular.module('passportTest');

app.controller('usersCtrl', function($scope, $state, Auth) {
  $scope.currentState = $state.current.name.split('.')[1].charAt(0).toUpperCase() + $state.current.name.split('.')[1].slice(1);

  if($scope.currentState.toUpperCase() === 'REGISTER'){
    $scope.submit = function(user){
      Auth.register(user)
    }
  }

  if($scope.currentState.toUpperCase() === 'LOGIN'){
    $scope.submit = function(user){
      Auth.logIn(user)
    }
  }
});
