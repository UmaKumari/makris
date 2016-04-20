var app = angular.module('makris', ['ngRoute']);
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

			// route for the portfolio
			.when('/portfolio/:pid', {
				templateUrl : 'views/portfolio/portfolio.html',
				controller  : 'portfolioController'
			})
        
            // route for the wishlist
			.when('/wishlist', {
				templateUrl : 'views/wishlist/wishlist.html',
				controller  : 'wishlistController'
			})
            .when('/signup', {
				templateUrl : 'views/signup/signup.html',
				controller  : 'signupController'
			})
            .when('/signin', {
				templateUrl : 'views/signin/signin.html',
				controller  : 'signinController'
			})
        ;
});
app.run(function($rootScope, $http){
    //$rootScope.baseURL = 'http://grind.scrummy.org/api/v1';
    localStorage.setItem('uid', '1');
    $rootScope.loading = false;
    $rootScope.uid = '1';
    $rootScope.langCode = "en_EN";
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
    $rootScope.wishlist = [];
    $rootScope.setLang = function(langcode){
        $http.get('../lang/' + langcode + '.json').success(function(data) {
           $rootScope.lang = data;
        });
    };
    $rootScope.setLang($rootScope.langCode);
});
