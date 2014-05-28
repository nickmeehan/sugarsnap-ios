var InfiniteScroller = (function() {
  var _informControllerOfScrollPosition = function(photoController) {
    window.onscroll = function() {
      if (document.body.scrollTop >= window.innerHeight) {
        photoController.appendExtraPhotosOnScrollEvent()
      }
    };
  }
  return {
    checkScrollThreshold: function(photoController) {
      _informControllerOfScrollPosition(photoController)
    }
  }
})();
