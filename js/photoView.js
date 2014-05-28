function PhotoView () {
	this.feed = 'feed';
	this.photoTemplate = 'img'
}

PhotoView.prototype = {
	appendPhoto: function(photoUrl) {
		var initialPhoto = this.createPhotoTemplate(photoUrl)
		this.returnFeedSelector().appendChild(initialPhoto)
	},
	createPhotoTemplate: function(photoUrl) {
		var photo = document.createElement(this.photoTemplate);
		photo.setAttribute('src', photoUrl);
		return photo
	},
	prependNewPhoto: function(photoUrl) {
		var newPhoto = this.createPhotoTemplate(photoUrl);
		var photoFeed = this.returnFeedSelector()
		photoFeed.insertBefore(newPhoto, photoFeed.firstChild)
	},
	returnFeedSelector: function() {
		return document.getElementById(this.feed)
	}
}
