var App;
(function (App) {
    var moduleDepenciesToCheck = ['core', 'flickr', 'photoStream'];
    var appModuleDependencies = [];
    moduleDepenciesToCheck.forEach(function (moduleName) {
        try {
            if (angular.module(moduleName)) {
                appModuleDependencies.push(moduleName);
            }
        }
        catch (e) {
        }
    });
    angular.module('app', appModuleDependencies)
        .config([
        '$logProvider', '$httpProvider', '$provide', function ($logProvider, $httpProvider, $provide) {
        }
    ]);
})(App || (App = {}));
//# sourceMappingURL=index.js.map