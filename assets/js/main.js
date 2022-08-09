$(function() {

    var header = $("#header"),
        introH = 100;
        scrollOffset = $(window).scrollTop();
        
    
    /* Header fixing */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else { 
            header.removeClass("fixed");
        }
    }


    /* Menu Navigation */
    $("#menu_btn").on("click", function(event) {
        event.preventDefault();

        $("#nav_block").toggleClass("active");
    });


});