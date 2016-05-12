angular.module('makris')
.factory('APIService', function($http, $rootScope) {
    me = this;
    me.getSID = function() {
        if(JSON.parse(localStorage.getItem('user'))){
            var u = JSON.parse(localStorage.getItem('user'));
            return u.sid;
        }else{
            return 0;
        }
    }
    this.baseURL = $rootScope.config.baseURL;
    me.GET = function(url){
        console.log(this.baseURL +  url + "?sid=" + this.getSID());
        return $http.get(this.baseURL +  url + "?sid=" + this.getSID());
    }
    me.POST = function(url, jsondata){
        console.log(url + "?sid=" + this.getSID());
        console.log(JSON.stringify(jsondata));
        return $http({ 
            method: 'POST', 
            url: this.baseURL +  url + "?sid=" + this.getSID(), 
            data: jsondata, 
            headers: {'Content-Type': 'application/json; charset=utf-8'} 
        });
    }
    return {
        //GET DATA
        //ARTISTS
        createArtist : function(jsondata) {
            console.log("Info");
            return me.POST('/artists', jsondata);
        },
        getArtist : function(uid) {
            return me.GET('/artist/' + uid);
        },
        followArtist : function(data) {
            return me.POST('/artist/follow', data);  
        },
        updateArtist : function(data) {
            return me.POST('/artist/update', data);  
        },
        aprrovalArtists : function () {
            return me.GET('/artists/approval');
        },
        existArtist : function (jsondata) {
            return me.POST('/artist/exists', jsondata);
        },
        //Artwork
        getArtworks : function() {
            return me.GET('/artwork');  
        },
        getArtworksByArtist : function(user) {
            return me.GET('/artwork/' + user);  
        },
        //Newsletter
        addNewsletter : function(jsondata) {
            console.log("Info");
            return me.POST('/newsletter', jsondata);
        },
        getNewsletterSignups : function(jsondata) {
            return me.GET('/newsletter');
        },
        //LOGIN / LOGOUT
        login : function(jsondata) {
            return me.POST('/login', jsondata);
        },
        logout : function() {
            return me.GET('/logout');
        },
        //Messages
        sendMessage : function(jsondata) {
            return me.POST('/message', jsondata);
        },
        getMessages : function() {
           return me.GET('/message');  
        },
        //SESSIONS
        getActiveSessions : function () {
            return me.GET('/session');
        }
    }
});