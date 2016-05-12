app.controller('adminController', function($scope, $rootScope, DataService, APIService) {
        $scope.adminmenu = 'messages';
        $scope.messages = [];
        $scope.approvalartists = [];
        
        APIService.getMessages().success(function(data){
            $scope.messages = data;
        });
        APIService.aprrovalArtists().success(function(data){
            $scope.approvalartists = data;
        });
});
