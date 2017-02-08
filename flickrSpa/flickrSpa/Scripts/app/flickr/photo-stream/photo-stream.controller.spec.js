describe("component's controller: photoStream", function () {
    var $componentController, $rootScope, scope, photoStreamService, $q;
    var mockObject;
    beforeEach(function () {
        angular.mock.module('photoStream');
        angular.mock.inject(function (PhotoStreamService, _$rootScope_, _$componentController_, _$q_) {
            photoStreamService = PhotoStreamService;
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            $componentController = _$componentController_;
            $q = _$q_;
        });
        mockObject = {
            description: 'testObject',
            generator: 'testGenerator',
            items: App.Flickr.Models.PhotoDetails[0],
            link: 'testLink',
            modified: 'testModified',
            title: 'testTitle'
        };
    });
    it('controller should be attached to the scope', function () {
        var controller = $componentController('photoStream', { $scope: scope }, {});
        expect(scope.$ctrl).toBe(controller);
    });
    it('should setup service object on initialisation', function () {
        var controller = $componentController('photoStream', { $scope: scope }, {});
        controller.$onInit();
        expect(controller.photoStreamViewModel.data.items).toBeDefined();
        expect(controller.photoStreamViewModel.data.items.length).toBe(0);
    });
    it('should call photoStreamService getViewModel() on initialization', function () {
        var controller = $componentController('photoStream', { $scope: scope }, {});
        controller.$onInit();
        var photoStreamServiceSearchSpy = spyOn(photoStreamService, 'getViewModel').and.callFake(function () {
            var deferred = $q.defer();
            deferred.resolve({ data: mockObject });
            return deferred.promise;
        });
        controller.getViewModel();
        expect(photoStreamServiceSearchSpy).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=photo-stream.controller.spec.js.map