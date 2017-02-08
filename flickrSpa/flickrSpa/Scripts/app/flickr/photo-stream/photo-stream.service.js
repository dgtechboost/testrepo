var App;
(function (App) {
    var Flickr;
    (function (Flickr) {
        var PhotoStream;
        (function (PhotoStream) {
            var Services;
            (function (Services) {
                var PhotoStreamService = (function () {
                    function PhotoStreamService($http) {
                        this.$http = $http;
                        this.apiBaseUri = 'http://api.flickr.com/services/feeds/photos_public.gne';
                    }
                    PhotoStreamService.prototype.getViewModel = function () {
                        var apiCall = this.apiBaseUri + "?jsoncallback=JSON_CALLBACK"
                            + "&tags=" + encodeURIComponent('angularjs')
                            + "&tagmode=" + 'all'
                            + "&format=json";
                        // send AJAX query to Flickr API
                        return this.$http.jsonp(apiCall)
                            .success(function (data, status, headers, config) {
                            if (data != null) {
                                return data;
                            }
                            else {
                                alert('There is no data returned');
                            }
                        });
                    };
                    return PhotoStreamService;
                }());
                Services.PhotoStreamService = PhotoStreamService;
            })(Services = PhotoStream.Services || (PhotoStream.Services = {}));
        })(PhotoStream = Flickr.PhotoStream || (Flickr.PhotoStream = {}));
    })(Flickr = App.Flickr || (App.Flickr = {}));
})(App || (App = {}));
//# sourceMappingURL=photo-stream.service.js.map