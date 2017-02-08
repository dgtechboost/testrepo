import IPhotoStreamController = App.Flickr.PhotoStream.IPhotoStreamController;

describe("component's controller: photoStream", () => {

    var $componentController: ng.IComponentControllerService, $rootScope, scope: any, photoStreamService, $q;

    var mockObject: App.Flickr.Models.Flickr;

    beforeEach(() => {

        angular.mock.module('photoStream');

        angular.mock.inject((PhotoStreamService, _$rootScope_: ng.IRootScopeService, _$componentController_: ng.IComponentControllerService, _$q_) => {
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

    it('controller should be attached to the scope', () => {
        var controller = $componentController<IPhotoStreamController, {}>('photoStream', { $scope: scope }, {});
        expect(scope.$ctrl).toBe(controller);
    });

    it('should setup service object on initialisation', () => {
        var controller = $componentController<IPhotoStreamController, {}>('photoStream', { $scope: scope }, {});
        controller.$onInit();
        expect(controller.photoStreamViewModel.data.items).toBeDefined();
        expect(controller.photoStreamViewModel.data.items.length).toBe(0);
    });


    it('should call photoStreamService getViewModel() on initialization', () => {
        var controller = $componentController<IPhotoStreamController, {}>('photoStream', { $scope: scope }, {});
        controller.$onInit();

        var photoStreamServiceSearchSpy = spyOn(photoStreamService, 'getViewModel').and.callFake(() => {
            var deferred = $q.defer();
            deferred.resolve({ data: mockObject });
            return deferred.promise;
        });
        controller.getViewModel();
        expect(photoStreamServiceSearchSpy).toHaveBeenCalledTimes(1);
    });
});
