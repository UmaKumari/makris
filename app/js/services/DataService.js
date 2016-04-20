app.factory('DataService', function($scope, $rootScope, $routeParams, filterFilter) {
		return {
            initWishlist : function() {
                if(JSON.parse(localStorage.getItem('wishlist')).length > 0){
                    $rootScope.wishlist = JSON.parse(localStorage.getItem('wishlist'));
                }else{
                    $rootScope.wishlist = [];
                }
            },
            addWishlist : function(pic) {
                $rootScope.wishlist.push(pic);
                localStorage.setItem('wishlist', JSON.stringify($rootScope.wishlist));
            } 
        }
});