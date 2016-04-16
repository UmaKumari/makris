app.controller('artistController', function($scope, $rootScope, $routeParams, filterFilter) {
		// create a message to display in our view
        $rootScope.header = true;
        $scope.images = [];
		$scope.imageList = [
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
                "id" : 5,
                "name" : "Lai da spira",
                "url" : "img/malik/1.jpg",
                "price" : "1400",
                "currency" : "CHF",
                "availability" : "0",
                "height" : "80",
                "width" : "100",
                "artist" : "2"
            },
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
            }
        ];
     $scope.artists =  [
        {
             "id" : 1,
             "name" : "Fabian Koch",
             "email" : "florentin@basler.io",
             "origin" : "Schweiz",
             "avatar_url" : "https://secure.gravatar.com/avatar/de9b11d0f9c0569ba917393ed5e5b3ab?s=140&r=g&d=mm",
             "nickname" : "Fabian Koch",
             "story" : "Hallo Mein Name ist Florentin Basler ich bin Kunststudent und fok....",
             "level" : 2
        },
        {
             "id" : 2,
             "name" : "Malik",
             "email" : "florentin@basler.io",
             "origin" : "Schweiz",
             "avatar_url" : "https://secure.gravatar.com/avatar/de9b11d0f9c0569ba917393ed5e5b3ab?s=140&r=g&d=mm",
             "nickname" : "Malik",
             "story" : "",
             "level" : 2
        }
    ];
    angular.forEach($scope.artists, function(key, value){
        if(key.id == $routeParams.aid){
            $scope.artist = key;
        }
    });
    angular.forEach($scope.imageList, function(key, value){
        if(key.artist == $routeParams.aid){
            $scope.images.push(key);
        }
    });
    $scope.showPreview = function(image){
        $scope.curri = image;
        $('#imagePreview').modal('show');
    };
    $scope.addWishlist = function(image){
        $rootScope.wishlist.push(image);
    }
});