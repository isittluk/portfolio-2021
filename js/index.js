$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
   console.log("document is ready");
     
   $( '.lightbox' ).each(function( index ) {
     $(this).click(function(){
           var imgSrc = $(this).children("img").attr("data-img");
         console.log(imgSrc);
         $('body').append( '<div id="lightbox-modal" class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog" style="margin:0;"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body p-0"><img src="' + imgSrc + '" class="img-responsive w-100"></div></div></div></div>' );
           $('#lightbox-modal').modal({show:true});
   
         $('#lightbox-modal').on('hidden.bs.modal', function (e) {
           $(this).remove();
         })
         return false;
     });
   });
      
      
   // document ready  
   });



   // full screen button

   function toggleFullScreen(elem) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}