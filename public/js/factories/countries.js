'use strict';

var app = angular.module('passportTest');

app.factory('Countries', function($http, $window, Auth){
  var countries = {}

  $http.defaults.headers.common.Authorization = 'Bearer '+ Auth.getToken()

  countries.addCountry = function (country){
    country.name = country.name.charAt(0).toUpperCase() + country.name.slice(1)

    $http.post('/countries/addCountry', country)
    .then(function(data){
      console.log(data);
    })
  }

  countries.lookup = function (country){
    $http.jsonp("https://en.wikipedia.org//w/api.php?action=query&prop=extracts&format=json&exintro=&exsectionformat=raw&callback=JSON_CALLBACK&titles="+country.name.toLowerCase())
    .then(function(data){
      var keys = Object.keys(data.data.query.pages);
      var extract = data.data.query.pages[keys[0]].extract;
      if(extract){
        country.about = extract
        countries.addCountry(country)
      } else {
        alert('could not find this country')
      }
    })
  }

  countries.getCountries = function (){
    return $http.get('/countries')
  }


  return countries
})
