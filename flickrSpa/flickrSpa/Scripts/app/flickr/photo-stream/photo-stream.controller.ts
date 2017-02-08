module App.Flickr.PhotoStream {

    import PhotoStreamService = App.Flickr.PhotoStream.Services.IPhotoStreamService;
    import FlickrJsonp = App.Flickr.Models.FlickrJsonp;
    import Flickr = App.Flickr.Models.Flickr;

    export interface IPhotoStreamController extends ng.IComponentController {
        getViewModel();
        photoStreamViewModel: FlickrJsonp;
    }

    export class PhotoStreamController implements IPhotoStreamController {

        photoStreamViewModel: FlickrJsonp;

        constructor(private photoStreamService: PhotoStreamService) { }

        $onInit() {
            this.photoStreamViewModel = {
                data: { items: [] }
            }
            this.getViewModel();
        }

        getViewModel() {
            this.photoStreamService.getViewModel().then(
                (photoStreamViewModel: FlickrJsonp): void => {
                    this.photoStreamViewModel = photoStreamViewModel;
                    if (this.photoStreamViewModel != null && this.photoStreamViewModel.data != null) {
                        for (var i = 0; i < this.photoStreamViewModel.data.items.length; i++) {
                            //remove quotes frome title, a bit excessive
                            var author = this.photoStreamViewModel.data.items[i].author;
                            var removeQuotes = author.slice(author.indexOf('(') + 1, author.indexOf(')'));
                            this.photoStreamViewModel.data.items[i].author = removeQuotes.replace(/^"(.*)"$/, '$1');
                            //remove html tags and keywords
                            var description = this.photoStreamViewModel.data.items[i].description;
                            var mainTitle = description.toString().slice(description.toString().indexOf('" title="') + 1, description.toString().indexOf('"><img'));
                            var result = this.photoStreamViewModel.data.items[i].description = description.replace(/<[^>]*>/g, '') + mainTitle.replace('title="', '');
                        }
                    } else {
                        alert('There is no data returned');
                    }
                }
            );
        }
    }
}