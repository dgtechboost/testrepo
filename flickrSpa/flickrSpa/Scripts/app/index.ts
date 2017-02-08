
module App {

    var moduleDepenciesToCheck: Array<string> = ['core', 'flickr', 'photoStream'];
    var appModuleDependencies: Array<string> = [];

    moduleDepenciesToCheck.forEach(moduleName => {
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
            '$logProvider', '$httpProvider', '$provide', ($logProvider: ng.ILogProvider, $httpProvider: ng.IHttpProvider, $provide: ng.IModule) => {
            }
        ]);

}