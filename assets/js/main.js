/*========== MENU NAVBAR ==========*/
$(function() {

    /* Menu Navigation */
    $("#nav-more").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#navbarSupportedContent").toggleClass("show");
    });

    /* Menu Hiding */
    window.addEventListener("orientationchange", function() {
    	jQuery("#nav-more").removeClass("active");
        jQuery("#navbarSupportedContent").removeClass("show");
    }, false);

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scrollup").style.display = "block";
    } else {
        document.getElementById("scrollup").style.display = "none";
    }
}

var scrollToTopBtn = document.getElementById("scrollup")
var rootElement = document.documentElement

function topFunction() {
    
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
}
scrollToTopBtn.addEventListener("click", scrollToTop)