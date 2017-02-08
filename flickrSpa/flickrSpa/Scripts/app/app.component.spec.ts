describe('component: app', () => {
    var scope: ng.IScope, element: ng.IRootElementService;

    beforeEach(() => {

        angular.mock.module('app');

        angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
            scope = $rootScope.$new();
            element = angular.element('<app></app>');
            element = $compile(element)(scope);
            scope.$apply();
        });
    });

    it('should render a div element with ui-view directive', () => {
        var childrenNodes = element.children('div');

        expect(childrenNodes[0].attributes['ui-view']).toBeDefined();
    });
});