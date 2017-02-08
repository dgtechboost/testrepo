module App.Flickr.PhotoStream {

    import PhotoStreamService = App.Flickr.PhotoStream.Services.PhotoStreamService;

    export var moduleName = 'photoStream';
    angular.module(moduleName, ['core'])
        .service('PhotoStreamService', PhotoStreamService);
} 