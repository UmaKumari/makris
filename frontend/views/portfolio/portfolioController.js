app.controller('portfolioController', function($scope) {
		// create a message to display in our view
		$scope.images = [
            {
                "name" : "the hill",
                "url" : "http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_52d09387ae003_1.JPG",
                "price" : "1200",
                "currency" : "CHF",
                "availability" : "3"
            },
            {
                "name" : "sandburg",
                "url" : "http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_52cd36aac6bed_1.JPG",
                "price" : "1200",
                "currency" : "CHF",
                "availability" : "3"
            },
            {
                "name" : "Licht",
                "url" : "http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_52cf9489095e8_1.JPG",
                "price" : "1200",
                "currency" : "CHF",
                "availability" : "0"
            }
        ]
});