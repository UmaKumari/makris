app.controller('wishlistController', function($scope, $rootScope, $routeParams, filterFilter) {
		// create a message to display in our view
        $rootScope.header = true;
        $scope.showPreview = function(image){
            $scope.curri = image;
            $('#imagePreview').modal('show');
        };
        $scope.addWishlist = function(image){
            $rootScope.wishlist.push(image);
        }
});