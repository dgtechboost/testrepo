var App;
(function (App) {
    var Flickr;
    (function (Flickr) {
        angular.module('flickr')
            .config([
            '$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $urlRouterProvider.otherwise('/Home/PhotoStream/landing');
                var states = getStates();
                states.forEach(function (state) {
                    $stateProvider.state(state.name, state.config);
                });
                $locationProvider.html5Mode(true);
            }
        ]);
        function getStates() {
            return [
                {
                    name: 'photoStream',
                    config: {
                        url: '/Home/PhotoStream',
                        template: '<photo-stream></photo-stream>'
                    }
                }
            ];
        }
    })(Flickr = App.Flickr || (App.Flickr = {}));
})(App || (App = {}));
//# sourceMappingURL=flickr.route.js.map