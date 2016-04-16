app.controller('artistController', function($scope, $rootScope) {
		// create a message to display in our view
        $rootScope.header = true;
		$scope.images = [
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
            }
        ];
     $scope.artist =  {
         "id" : 1,
         "name" : "Fabian Koch",
         "email" : "florentin@basler.io",
         "origin" : "Schweiz",
         "avatar_url" : "https://secure.gravatar.com/avatar/de9b11d0f9c0569ba917393ed5e5b3ab?s=140&r=g&d=mm",
         "nickname" : "Fabian Koch",
         "story" : "Hallo Mein Name ist Florentin Basler ich bin Kunststudent und fok....",
         "level" : 2
     };
    $scope.showPreview = function(image){
        $scope.curri = image;
        $('#imagePreview').modal('show');
    }
});