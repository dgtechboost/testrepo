module App.Flickr.Models {

    export class Flickr {
        description: string;
        generator: string;
        items: PhotoDetails[];
        link: string;
        modified: string;
        title: string
    }

    export class PhotoDetails {
        author: string;
        author_id: string;
        date_taken: string;
        description: string;
        link: string;
        media: MediaDetails;
        published: string;
        tags: string;
        title: string
    }

    export class MediaDetails {
        m: string;
    }

    export class FlickrJsonp {
        data: { items: PhotoDetails[]};
    }

}