
module App.Flickr {

    angular.module('flickr')
        .config([
            '$stateProvider', '$urlRouterProvider', '$locationProvider',($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider:any) => {

                $urlRouterProvider.otherwise('/Home/PhotoStream/landing');

                var states: Array<{ name: string, config: angular.ui.IState }> = getStates();
                states.forEach(state => {
                    $stateProvider.state(state.name, state.config);
    });
                $locationProvider.html5Mode(true);
            }
        ]);

    function getStates(): Array<{ name: string, config: angular.ui.IState }> {
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
}  