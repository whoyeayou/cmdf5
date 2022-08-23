
//
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