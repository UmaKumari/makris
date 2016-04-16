app.controller('homeController', function($scope, $rootScope) {
        $rootScope.header = false;
        console.log("HALLO WELT");
		// create a message to display in our view
		$scope.message = 'home';
});