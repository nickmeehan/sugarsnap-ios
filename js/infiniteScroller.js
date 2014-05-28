
var InfiniteScroller = (function() {
  var _informControllerOfScrollPosition = function(controller) {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= ($(document).height() - 200) - $(window).height()) {
        controller.appendExtraPhotosOnScrollEvent()
      }
    });
  }
  return {
    checkScrollThreshold: function(controller) {
      _informControllerOfScrollPosition(controller)
    }
  }
})();
