var App;
(function (App) {
    var Flickr;
    (function (Flickr) {
        var Landing;
        (function (Landing) {
            var FlickrController = (function () {
                function FlickrController(flickrService) {
                    this.flickrService = flickrService;
                }
                FlickrController.prototype.$onInit = function () {
                    this.search();
                };
                FlickrController.prototype.search = function () {
                    var _this = this;
                    this.flickrService.getViewModel().then(function (flickrViewModel) {
                        _this.flickrViewModel = flickrViewModel;
                        if (_this.flickrViewModel != null && _this.flickrViewModel.data != null) {
                            for (var i = 0; i < _this.flickrViewModel.data.items.length; i++) {
                                //remove quotes frome title
                                var author = _this.flickrViewModel.data.items[i].author;
                                var removeQuotes = author.slice(author.indexOf('(') + 1, author.indexOf(')'));
                                _this.flickrViewModel.data.items[i].author = removeQuotes.replace(/^"(.*)"$/, '$1');
                                //remove html tags and keywords
                                var description = _this.flickrViewModel.data.items[i].description;
                                var mainTitle = description.toString().slice(description.toString().indexOf('" title="') + 1, description.toString().indexOf('"><img'));
                                var result = _this.flickrViewModel.data.items[i].description = description.replace(/<[^>]*>/g, '') + mainTitle.replace('title="', '');
                            }
                        }
                    });
                };
                return FlickrController;
            }());
            Landing.FlickrController = FlickrController;
        })(Landing = Flickr.Landing || (Flickr.Landing = {}));
    })(Flickr = App.Flickr || (App.Flickr = {}));
})(App || (App = {}));
//# sourceMappingURL=landing.controller.js.map