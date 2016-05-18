app.controller('homeController', function($scope, $rootScope, DataService, APIService) {
        console.log("HALLO WELT");
		// create a message to display in our view
		$scope.message = 'home';
        $scope.list = {
            "name" : ""
        };
        //$("#newsletterModal").modal('show');
        if(!JSON.parse(localStorage.getItem('newsletter')) && !JSON.parse(localStorage.getItem('user'))){
            $("#newsletterModal").modal('show');
        }
        $scope.imageList = [];
        APIService.getArtworks().success(function(data){
            $scope.imageList = data;
        });
        $scope.images = [];
		$scope.imageList1 = [
            {
                "id" : 7,
                "name" : "Lai da spira",
                "url" : "img/malik/4.jpg",
                "price" : "1400",
                "currency" : "CHF",
                "availability" : "1",
                "height" : "80",
                "width" : "100",
                "artist" : "2",
                "love" : false
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
                "artist" : "2",
                "love" : false
            },
            {
                "id" : 4,
                "name" : "Lai da spira",
                "url" : "img/fabiankoch/4.jpg",
                "price" : "1400",
                "currency" : "CHF",
                "availability" : "1",
                "height" : "80",
                "width" : "100",
                "artist" : "1", 
                "love" : false
            },
            {
                "id": 19,
                "name": "Signs",
                "url": "img/flo/1.jpg",
                "price": "600",
                "currency": "CHF",
                "availability": "1",
                "height": "80",
                "width": "50",
                "artist": "3",
                "love" : false
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
                "artist" : "2",
                "love" : false
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
                "artist" : "2",
                "love" : false
            },
            {
                "id": 20,
                "name": "Signs to Signs",
                "url": "img/flo/2.jpg",
                "price": "500",
                "currency": "CHF",
                "availability": "1",
                "height": "80",
                "width": "50",
                "artist": "3",
                "love" : false
            },
            {
                "id" : 1,
                "name" : "Falke",
                "url" : "img/fabiankoch/1.jpg",
                "price" : "400",
                "currency" : "CHF",
                "availability" : "0",
                "height" : "30",
                "width" : "40",
                "artist" : "1",
                "love" : false
            },
            {
                "id": 21,
                "name": "No Signs",
                "url": "img/flo/3.jpg",
                "price": "700",
                "currency": "CHF",
                "availability": "1",
                "height": "90",
                "width": "50",
                "artist": "3",
                "love" : false
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
                "artist" : "1",
                "love" : false
            },
            {
                "id" : 4,
                "name" : "Lai da spira",
                "url" : "img/fabiankoch/4.jpg",
                "price" : "1400",
                "currency" : "CHF",
                "availability" : "1",
                "height" : "80",
                "width" : "100",
                "artist" : "1",
                "love" : false
            },
            {
                "id" : 2,
                "name" : "Widder",
                "url" : "img/fabiankoch/2.jpg",
                "price" : "400",
                "currency" : "CHF",
                "availability" : "0",
                "height" : "30",
                "width" : "40",
                "artist" : "1",
                "love" : false

            }
        ];
        $scope.addWishlist = function(image){
            DataService.addWishlist(image);
        }
        $scope.signupNewsletter = function(nl){
            APIService.addNewsletter(nl).success(function(data){
                if(data.code == '200'){
                    localStorage.setItem('newsletter', JSON.stringify(nl));
                    $("#newsletterModal").modal('hide');
                }
            });
        }
});
