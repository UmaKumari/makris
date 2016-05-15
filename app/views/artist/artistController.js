app.controller('artistController', function($scope, $rootScope, $routeParams, APIService, DataService, ngToast, Upload) {
    // create a message to display in our view
    $rootScope.header = true;
    DataService.initController();
    $scope.images = [];
    APIService.getArtist($routeParams.aid).success(function(data){
       console.log(JSON.stringify(data));
       $scope.artist = data; 
       APIService.getArtworksByArtist($scope.artist._id).success(function(data){
           $scope.images = data;
           console.log(JSON.stringify(data));
       });
    });
    $scope.showPreview = function(image){
        $scope.curri = image;
        $('#imagePreview').modal('show');
    };
    $scope.addWishlist = function(image){
        DataService.addWishlist(image);
    };
    $scope.showUploadModal = function() {
        $('#imageUpload').modal('show');
    };
    $scope.follow = function(artist) {
        APIService.followArtist(artist).success(function(data){
            ngToast.create({
                  className: 'success',
                  content: data.message
            });
        });
    }
    $scope.updateStory = function() {
        APIService.updateArtist({ story : $scope.artist.story }).success(function(data){
            $scope.editstory = false;
            ngToast.create({
                  className: 'success',
                  content: data.message
            });
        });
    };
    $scope.uploadProfilePic = function (file) {
        Upload.upload({
            url: $rootScope.config.uploadProfileURL,
            data: {
                    file: file, 
                    name: $scope.artist._id
            }
        }).then(function (resp) {
            $('#imageUpload').modal('hide');
            APIService.getArtworksByArtist($scope.artist._id).success(function(data){
               $scope.images = data;
           });
            ngToast.create({
                  className: 'success',
                  content: $rootScope.lang.uploadsuccessful
            });
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
    $scope.uploadArtwork = function (file) {
        Upload.upload({
            url: $rootScope.config.uploadURL,
            data: {
                    file: file, 
                    title: $scope.img.title, 
                    user : $rootScope.user._id, 
                    height :  $scope.img.height,
                    width :  $scope.img.width,
                    price :  $scope.img.price,
                    type: $scope.img.type,
                    genre : $scope.img.genre,
                    availability : $scope.img.availability,
                    story : $scope.img.story
            
                }
        }).then(function (resp) {
            $('#imageUpload').modal('hide');
            APIService.getArtworksByArtist($scope.artist._id).success(function(data){
               $scope.images = data;
           });
            ngToast.create({
                  className: 'success',
                  content: $rootScope.lang.uploadsuccessful
            });
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
});