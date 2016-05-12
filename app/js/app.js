var app = angular.module('makris', ['ngRoute', 'angular.filter', 'ngToast', 'ngFileUpload', 'bootstrap-tagsinput']);
/**
 * Configure the Routes
 */
app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'views/home/home.html',
				controller  : 'homeController'
			})

			// route for the artist profile
			.when('/artist/:aid', {
				templateUrl : 'views/artist/artist.html',
				controller  : 'artistController'
			})
        
            // route for the wishlist
			.when('/wishlist', {
				templateUrl : 'views/wishlist/wishlist.html',
				controller  : 'wishlistController'
			})
            .when('/signup', {
				templateUrl : 'views/signup/artist/signup.html',
				controller  : 'signupController'
			})
            .when('/signin', {
				templateUrl : 'views/signin/signin.html',
				controller  : 'signinController'
			})
            .when('/admin', {
				templateUrl : 'views/admin/admin.html',
				controller  : 'adminController'
			})
            .otherwise('/')
        ;
});
app.run(function($rootScope, $http, DataService){
    //$rootScope.baseURL = 'http://grind.scrummy.org/api/v1';
    $http.get('../config/config.json').success(function(data){
        $rootScope.config = data;
    });
    localStorage.setItem('uid', '1');
    $rootScope.loading = false;
    $rootScope.uid = '1';
    $rootScope.langCode = "en_EN";
    $rootScope.baseURL = 'http://localhost:8080/api'
    $rootScope.langs = [
            {
                "name" : "English",
                "locale" : "en_EN"
            },
            {
                "name" : "Deutsch",
                "locale" : "de_DE"
            }
    ];
    $rootScope.inArray = function (item, array) {
        return (-1 !== array.indexOf(item));
    };
    DataService.initWishlist();
    $rootScope.setLang = function(langcode){
        $http.get('../lang/' + langcode + '.json').success(function(data) {
           $rootScope.lang = data;
        });
    };
    $rootScope.setLang($rootScope.langCode);
});
