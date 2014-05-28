SugarSnap = {
	initialize: function() {
		alert("initialized")
		new CameraController(new CameraView()).bindCameraListener()
		navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure)		
	},
	getCoordinatesSuccess: function(position) {
		// start spinner here
		alert('position.coords.latitude')
		console.log("here we are")
		var firebaseController = new FirebaseController(position, FirebaseConnection.getGeo())
		alert(firebaseController.latitude)
		var photoController = new PhotoController(new PhotoView())
		firebaseController.subscribeListenerForInitialPhotos(photoController)
		firebaseController.subscribeListenerForLivePhotoUpdates(photoController)

		// infinite scroll needs to be added

	},
	getCoordinatesFailure: function() {
		alert("failed")
		navigator.notification.alert("We're sorry we couldn't find you! We'll keep searching...", console.log("oh boy"))
	}
}
