var App;
(function (App) {
    var Flickr;
    (function (Flickr) {
        var Landing;
        (function (Landing) {
            var LandingComponent = (function () {
                function LandingComponent() {
                    this.templateUrl = 'Scripts/app/flickr/landing/landing.component.html';
                    this.controller = ['FlickrService', Landing.FlickrController];
                    this.bindings = {};
                }
                return LandingComponent;
            }());
            Landing.LandingComponent = LandingComponent;
            angular.module(App.Flickr.Landing.moduleName).component('landing', new LandingComponent());
        })(Landing = Flickr.Landing || (Flickr.Landing = {}));
    })(Flickr = App.Flickr || (App.Flickr = {}));
})(App || (App = {}));
//# sourceMappingURL=landing.component.js.map