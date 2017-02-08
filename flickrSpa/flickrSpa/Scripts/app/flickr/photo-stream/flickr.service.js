var App;
(function (App) {
    var Flickr;
    (function (Flickr) {
        var Landing;
        (function (Landing) {
            var Services;
            (function (Services) {
                var FlickrService = (function () {
                    function FlickrService($http) {
                        this.$http = $http;
                        // private apiBaseUri = 'http://api.flickr.com/services/feeds/photos_public.gne';
                        // private apiBaseUri = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=ea931761dda5f33c5bfb3fb7229bd111&photoset_id=72157641825659515&extras=url_q%2C+url_z%2Curl_l%2Ctags&format=json&nojsoncallback=1 ';
                        // private apiBaseUri = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
                        // private apiBaseUri = 'https://api.flickr.com/services/feeds/photos_public.gne?method=flickr.photosets.getPhotos&api_key=ea931761dda5f33c5bfb3fb7229bd111&tags=trees&format=json&nojsoncallback=1';
                        this.apiBaseUri = 'http://api.flickr.com/services/feeds/photos_public.gne';
                    }
                    FlickrService.prototype.getViewModel = function () {
                        var apiCall = this.apiBaseUri + "?jsoncallback=JSON_CALLBACK"
                            + "&tags=" + encodeURIComponent('trump')
                            + "&tagmode=" + 'all'
                            + "&format=json";
                        //return this.$http.get(this.apiBaseUri, 'trump')
                        //    .then((response: ng.IHttpPromiseCallbackArg<any>): any => {
                        //        if (response.data != null) {
                        //            return response.data;
                        //        }
                        //        //here call toaster.js to show pop out to the user
                        //    });
                        // send AJAX query to Flickr API
                        return this.$http.jsonp(apiCall)
                            .success(function (data, status, headers, config) {
                            if (data != null) {
                                //for (var property in data) {
                                //    if (data.hasOwnProperty(property)) {
                                //        // do stuff
                                //        if (data[property] == 'items') {
                                //            for (var i = 0; i < data[property].length;i++) {
                                //                data[property][i].author
                                //            }
                                //        }
                                //    }
                                //}
                                return data;
                            }
                        });
                    };
                    return FlickrService;
                }());
                Services.FlickrService = FlickrService;
            })(Services = Landing.Services || (Landing.Services = {}));
        })(Landing = Flickr.Landing || (Flickr.Landing = {}));
    })(Flickr = App.Flickr || (App.Flickr = {}));
})(App || (App = {}));
//# sourceMappingURL=flickr.service.js.map