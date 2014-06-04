SugarSnap = {
	initialize: function() {
		navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure.bind(this))
	},
	getCoordinatesSuccess: function(position) {
		var firebaseController = new FirebaseController(position, FirebaseConnection.getGeo())
		var photoController = new PhotoController(new PhotoView())
		firebaseController.subscribeListenerForInitialPhotos(photoController)
		firebaseController.subscribeListenerForLivePhotoUpdates(photoController)
		new CameraController(new CameraView()).bindCameraListener()
		InfiniteScroller.checkScrollThreshold(photoController)
	},
	getCoordinatesFailure: function() {
		navigator.notification.alert("We're sorry we couldn't find you! We'll keep searching...", this.initialize)
	}
}
