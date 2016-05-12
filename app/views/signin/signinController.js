app.controller('signinController', function($scope, $rootScope, APIService, DataService, $location, ngToast) {
    $scope.login = function(logindata){
        APIService.login(logindata).success(function(data){
            if(data.email){
                DataService.setUserdata(data);
                ngToast.create({
                  className: 'success',
                  content: $rootScope.lang.loginsuccessful
                });
                $location.path('/');
            }else{
                ngToast.create({
                  className: 'warning',
                  content: $rootScope.lang.wronglogindata
                });
            }
        });
    }
});