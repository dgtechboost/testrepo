describe('component: app', function () {
    var scope, element;
    beforeEach(function () {
        angular.mock.module('app');
        angular.mock.inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
            element = angular.element('<app></app>');
            element = $compile(element)(scope);
            scope.$apply();
        });
    });
    it('should render a div element with ui-view directive', function () {
        var childrenNodes = element.children('div');
        expect(childrenNodes[0].attributes['ui-view']).toBeDefined();
    });
});
//# sourceMappingURL=app.component.spec.js.map