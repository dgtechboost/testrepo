var App;
(function (App) {
    var Flickr;
    (function (Flickr) {
        var PhotoStream;
        (function (PhotoStream) {
            var PhotoStreamComponent = (function () {
                function PhotoStreamComponent() {
                    this.templateUrl = 'Scripts/app/flickr/photo-stream/photo-stream.component.html';
                    this.controller = ['PhotoStreamService', PhotoStream.PhotoStreamController];
                    this.bindings = {};
                }
                return PhotoStreamComponent;
            }());
            PhotoStream.PhotoStreamComponent = PhotoStreamComponent;
            angular.module(App.Flickr.PhotoStream.moduleName).component('photoStream', new PhotoStreamComponent());
        })(PhotoStream = Flickr.PhotoStream || (Flickr.PhotoStream = {}));
    })(Flickr = App.Flickr || (App.Flickr = {}));
})(App || (App = {}));
//# sourceMappingURL=photo-stream.component.js.map