$(function() {

    /* Menu Navigation */
    $("#menu_btn").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav_block").toggleClass("active");
    });

    /* Menu Hiding */
    window.addEventListener("orientationchange", function() {
    	jQuery("#menu_btn").removeClass("active");
        jQuery("#nav_block").removeClass("active");
    }, false);



});