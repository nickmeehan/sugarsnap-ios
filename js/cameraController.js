function CameraController(view) {
  this.view = view;
  this.cameraOptions = {
  	quality: 49,
  	destinationType: Camera.DestinationType.FILE__URI,
  	encodingType: Camera.EncodingType.PNG,
  	targetWidth: 320,
  	targetHeight: 320
  }
}

CameraController.prototype = {
  bindCameraListener: function() {
    var photoButton = this.view.getCameraButtonSelector()
    photoButton.addEventListener('click', this.beginCamera.bind(this), false)
  },
  beginCamera: function(event) {
  	event.preventDefault();
  	navigator.camera.getPicture(this.cameraSuccess, this.cameraError, this.cameraOptions)
  },
  cameraSuccess: function(imageURI) {
    // alert(imageURI.toString())
    // filepicker.setKey('AKLyleYaOTvmXB21gue4Dz');
    // var userImage = 
    // filepicker.store(
    //   imageURI,
    //   { mimetype: 'image/png', location: 'S3', access: 'public' }, 
    //   function(inkBlob) {
    //     alert(inkBlob.url)
    //   }, function(error) {
    //     alert('shit is fucked')
    //   }, function(progress) {alert('progress')});
    alert("We're still working on getting images to upload. We'll let you know as soon as we can about getting photos uploaded!")
  },
  cameraError: function() {
  	navigator.notification.alert("You should head to the genius bar, something went wrong.", console.log(''))
  }
}

