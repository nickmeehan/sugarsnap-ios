function PhotoController(view) {
    this.view = view;
    this.scrollPhotos = [];
}

PhotoController.prototype = {
    initializeFeed: function(photoArray) {
        var photoUrls = this.extractInitialPhotos(photoArray);
        this.appendPhotosToFeed(photoUrls)
    },
    initializeInfiniteScroll: function(photoArray) {
        this.scrollPhotos = PhotoHandler.getCachedPhotos(photoArray);
    },
     appendExtraPhotosOnScrollEvent: function() {
    var extraScrollPhotos = PhotoHandler.getNextSetOfScrollPhotos(this.scrollPhotos)
    PhotoHandler.extractPhotoUrls(extraScrollPhotos)
    this.appendPhotosToFeed(extraScrollPhotos)
  },
    extractInitialPhotos: function(photoArray) {
        var initialPhotos = PhotoHandler.getFirstPhotos(photoArray);
        var photoUrls = PhotoHandler.extractPhotoUrls(initialPhotos);
        return photoUrls;
    },
    appendPhotosToFeed: function(photoUrls) {
        for (var i = 0; i < photoUrls.length; i++) {
            this.view.appendPhoto(photoUrls[i])
        };
    },
    updatePhotoFeed: function(photoArray) {
        var photoUrlToPrepend = PhotoHandler.getLatestPhoto(photoArray)
        this.view.prependNewPhoto(photoUrlToPrepend)
    }
}