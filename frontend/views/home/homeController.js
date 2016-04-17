app.controller('homeController', function($scope, $rootScope, filterFilter) {
        $rootScope.header = false;
        console.log("HALLO WELT");
		// create a message to display in our view
		$scope.message = 'home';
        $scope.list = {
            "name" : ""
        };
        $scope.images = [];
		$scope.imageList = [
            {
                "id" : 6,
                "name" : "Lai da spira",
                "url" : "img/malik/2.jpg",
                "price" : "1400",
                "currency" : "CHF",
                "availability" : "0",
                "height" : "80",
                "width" : "100",
                "artist" : "2"
            },
            {
                "id" : 4,
                "name" : "Lai da spira",
                "url" : "img/fabiankoch/4.jpg",
                "price" : "1400",
                "currency" : "CHF",
                "availability" : "0",
                "height" : "80",
                "width" : "100",
                "artist" : "1"
            },
            {
                "id" : 7,
                "name" : "Lai da spira",
                "url" : "img/malik/3.jpg",
                "price" : "1400",
                "currency" : "CHF",
                "availability" : "0",
                "height" : "80",
                "width" : "100",
                "artist" : "2"
            },
            {
                "id" : 7,
                "name" : "Lai da spira",
                "url" : "img/malik/4.jpg",
                "price" : "1400",
                "currency" : "CHF",
                "availability" : "0",
                "height" : "80",
                "width" : "100",
                "artist" : "2"
            },
            {
                "id" : 1,
                "name" : "Falke",
                "url" : "img/fabiankoch/1.jpg",
                "price" : "400",
                "currency" : "CHF",
                "availability" : "1",
                "height" : "30",
                "width" : "40",
                "artist" : "1"
                
            },
            {
                "id" : 2,
                "name" : "Widder",
                "url" : "img/fabiankoch/2.jpg",
                "price" : "400",
                "currency" : "CHF",
                "availability" : "1",
                "height" : "30",
                "width" : "40",
                "artist" : "1"
            },
            {
                "id" : 3,
                "name" : "Tango",
                "url" : "img/fabiankoch/3.jpg",
                "price" : "1400",
                "currency" : "CHF",
                "availability" : "1",
                "height" : "100",
                "width" : "100",
                "artist" : "1"
            }
        ];
        $scope.addWishlist = function(image){
            $rootScope.wishlist.push(image);
        }
});
