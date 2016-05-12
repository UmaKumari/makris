app.controller('headerController', function($scope, $rootScope, DataService, APIService, $location) {
        DataService.initController();
        //initialize tooltips
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
        $scope.logout = function(){
            APIService.logout().success(function(data){
               if(data.code == 200){
                   localStorage.clear();
                   $rootScope.user = {};
                   $location.path('/');
               } 
            });
        }
        $rootScope.currFilter = [];
        $scope.filters = [
            {
                name: "S",
                type: "size",
                dbfilter: { height: { $lt: 50 } }
            },
            {
                name: "M",
                type: "size",
                dbfilter: { height: { $lt: 100 } }
            },
            {
                name: "L",
                type: "size",
                dbfilter: { height: { $lt: 150 } }
            },
            {
                name: "XL",
                type: "size",
                dbfilter: { height: { $gt: 150 } }
            },
            {
                name: "< 100",
                type: "price",
                dbfilter: { price: { $lt: 100 } }
            },
            {
                name: "< 300",
                type: "price",
                dbfilter: { price: { $lt: 300 } }
            },
            {
                name: "< 600",
                type: "price",
                dbfilter: { price: { $lt: 600 } }
            },
            {
                name: "< 1000",
                type: "price",
                dbfilter: { price: { $lt: 1000 } }
            },
            {
                name: "> 1000",
                type: "price",
                dbfilter: { price: { $gt: 1000 } }
            }
        ];
        $scope.addToFilter = function(f){
            $rootScope.currFilter.push(f);
            var index = $scope.filters.indexOf(f);
            $scope.filters.splice(index, 1); 
        }
        $scope.removefromfilter = function(f){
            $scope.filters.push(f);
            var index = $rootScope.currFilter.indexOf(f);
            $rootScope.currFilter.splice(index, 1); 
        }
        $scope.showContact = function() {
            $("#contact").modal('show');
        }
        $scope.sendFeedback = function() {
            $scope.ct.to = $rootScope.contactemail;
            if($rootScope.user.email){
                $scope.ct.from = $rootScope.user.email;
            }
            APIService.sendMessage($scope.ct).success(function(data){
                if(data.code == 200){
                    $("#contact").modal('hide');
                    ngToast.create({
                      className: 'success',
                      content: 'Message sent!'
                    });
                }else{
                    ngToast.create({
                      className: 'warning',
                      content: 'An error occured'
                    });
                }
            });
        }
});
