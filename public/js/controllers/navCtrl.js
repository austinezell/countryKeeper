var app = angular.module('passportTest');


app.controller('navCtrl', function($scope, Auth, $state) {
  $scope.logout = function (){
    Auth.logOut()
    $state.go('home')
  }
});
