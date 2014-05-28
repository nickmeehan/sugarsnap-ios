SugarSnap = {
	initialize: function() {
		navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure)
	},
	getCoordinatesSuccess: function(position) {
		var firebaseController = new FirebaseController(position, FirebaseConnection.getGeo())
		var photoController = new PhotoController(new PhotoView())
		firebaseController.subscribeListenerForInitialPhotos(photoController)
		firebaseController.subscribeListenerForLivePhotoUpdates(photoController)
		InfiniteScroller.checkScrollThreshold(photoController)
		new CameraController(new CameraView()).bindCameraListener()
	},
	getCoordinatesFailure: function() {
		navigator.notification.alert("We're sorry we couldn't find you! We'll keep searching...", this.initialize)
	}
}
