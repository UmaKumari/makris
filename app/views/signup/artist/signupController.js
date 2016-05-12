app.controller('signupController', function($scope, $rootScope, DataService, APIService, ngToast, $location) {
    $scope.step = 1;
    $scope.gotoStep = function(step){
            if(step == 2){
                if($scope.artist.first_name && $scope.artist.last_name && $scope.artist.email 
                    && $scope.artist.password){
                    APIService.existArtist({email : $scope.artist.email}).success(function(data){
                        console.log(JSON.stringify(data));
                        if(data.message == true){
                            ngToast.create({
                              className: 'warning',
                              content: 'Artist with this email already exists !'
                            });
                        }else{
                            $scope.step = step;
                        }
                    });
                }
            }else if(step == 3){
                $scope.step = step;
            }
    }
    $scope.signupArtist = function(ar){
        APIService.addNewsletter({email : ar.email}).success(function(data){
            console.log(JSON.stringify(ar));
            APIService.createArtist(ar).success(function(data){
               console.log(data);
               APIService.login({ email : ar.email, password : ar.password }).success(function(data){
                   console.log(data);
                   if(data._id){
                       DataService.setUserdata(data);
                       $location.path('/artist/' + data._id);
                   }
               });
            });
        });
        
    }
});