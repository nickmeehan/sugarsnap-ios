SugarSnap = {
	initialize: function() {
		alert("initialized")
		navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure.bind(this))		
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

		new CameraController(new CameraView()).bindCameraListener()
	},
	getCoordinatesFailure: function() {
		navigator.notification.alert("We're sorry we couldn't find you! We'll keep searching...", this.initialize)
	}
}
