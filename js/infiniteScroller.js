
// var InfiniteScroller = (function() {
//   var _informControllerOfScrollPosition = function(controller) {
//     $(window).scroll(function() {
//       if ($(window).scrollTop() >= ($(document).height() - 200) - $(window).height()) {
//         controller.appendExtraPhotosOnScrollEvent()
//       }
//     });
//   }
//   return {
//     checkScrollThreshold: function(controller) {
//       _informControllerOfScrollPosition(controller)
//     }
//   }
// })();



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
