var App;
(function (App) {
    var AppComponent = (function () {
        function AppComponent() {
            this.bindings = {};
            this.template = "<div ui-view></div>";
        }
        return AppComponent;
    }());
    App.AppComponent = AppComponent;
    angular.module('app').component('app', new AppComponent());
})(App || (App = {}));
//# sourceMappingURL=app.component.js.map