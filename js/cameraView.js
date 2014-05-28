function CameraView() {
  this.cameraButtonSelector = 'camera_button';
}

CameraView.prototype = {
  getCameraButtonSelector: function() {
    return document.getElementById(this.cameraButtonSelector)
  }
}