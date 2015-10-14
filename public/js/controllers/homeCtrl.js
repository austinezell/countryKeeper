var app = angular.module('passportTest');


app.controller('homeCtrl', function($scope, Countries) {
  $scope.getCountries = function(){
    Countries.getCountries().then(function(data){
      $scope.countries = data.data
    })
  }

  $scope.test = "<p><b>India</b>, officially the <b>Republic of India</b> (<i><span lang=\"inc-Latn\">Bh\u0101rat Ga\u1e47ar\u0101jya</span></i>), is a country in South Asia."
  $scope.getCountries()
});
