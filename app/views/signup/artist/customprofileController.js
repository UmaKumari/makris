app.controller('customprofileController', function($scope, $rootScope, APIService, ngToast, $location) {
    $scope.signupArtist = function(ar){
        var artist = {
            artist_name : ar.artist_name,
            name : ar.name,
            email : ar.email,
            password : ar.password
        }
        APIService.createArtist(artist).success(function(data){
            if(data){
                ngToast.create({
                  className: 'success',
                  content: $rootScope.lang.signupsuccessful
                });
                $location.path('/signin');
            }
        });
    }
});