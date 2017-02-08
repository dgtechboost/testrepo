module App.Flickr.PhotoStream.Services {

    import FlickrJsonp = App.Flickr.Models.FlickrJsonp;

    export interface IPhotoStreamService {
        getViewModel(): any;
    }

    export class PhotoStreamService implements IPhotoStreamService {

        private apiBaseUri = 'http://api.flickr.com/services/feeds/photos_public.gne'

        constructor(private $http: ng.IHttpService) { }

        getViewModel(): angular.IPromise<FlickrJsonp> {

            var apiCall = this.apiBaseUri + "?jsoncallback=JSON_CALLBACK"
                + "&tags=" + encodeURIComponent('angularjs')
                + "&tagmode=" + 'all'
                + "&format=json";

            // send AJAX query to Flickr API
            return this.$http.jsonp(apiCall)
                .success(function (data, status, headers, config) {
                    if (data != null) {
                        return data;
                    } else {
                        alert('There is no data returned');
                    }
                })
        }
    }
}