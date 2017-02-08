var App;
(function (App) {
    var Flickr;
    (function (Flickr) {
        var PhotoStream;
        (function (PhotoStream) {
            var PhotoStreamService = App.Flickr.PhotoStream.Services.PhotoStreamService;
            PhotoStream.moduleName = 'photoStream';
            angular.module(PhotoStream.moduleName, ['core'])
                .service('PhotoStreamService', PhotoStreamService);
        })(PhotoStream = Flickr.PhotoStream || (Flickr.PhotoStream = {}));
    })(Flickr = App.Flickr || (App.Flickr = {}));
})(App || (App = {}));
//# sourceMappingURL=index.js.map