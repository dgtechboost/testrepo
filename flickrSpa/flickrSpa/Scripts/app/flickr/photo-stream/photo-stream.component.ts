
module App.Flickr.PhotoStream {

    import PhotoStreamService = App.Flickr.PhotoStream.Services.PhotoStreamService;

    export class PhotoStreamComponent implements ng.IComponentOptions {
        bindings: { [binding: string]: string };
        templateUrl = 'Scripts/app/flickr/photo-stream/photo-stream.component.html';
        controller = ['PhotoStreamService', PhotoStreamController];

        constructor() {
            this.bindings = {};
        }
    }

    angular.module(App.Flickr.PhotoStream.moduleName).component('photoStream', new PhotoStreamComponent());
} 