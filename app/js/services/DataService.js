angular.module('makris')
.factory('DataService', function($rootScope) {
		return {
            initWishlist : function() {
                if(JSON.parse(localStorage.getItem('wishlist'))){
                    $rootScope.wishlist = JSON.parse(localStorage.getItem('wishlist'));
                }else{
                    $rootScope.wishlist = [];
                }
            },
            addWishlist : function(pic) {
                $rootScope.wishlist.push(pic);
                localStorage.setItem('wishlist', JSON.stringify($rootScope.wishlist));
            },
            setUserdata : function(userdata) {
                $rootScope.user = userdata;
                localStorage.setItem('user', JSON.stringify(userdata));
            },
            initController : function() {
                if(JSON.parse(localStorage.getItem('user'))){
                    $rootScope.user = JSON.parse(localStorage.getItem('user'));
                }
            }
        }
});