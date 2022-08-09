$(function() {

    /* Menu Navigation */
    $("#menu_btn").on("click", function(event) {
        event.preventDefault();

        $("#nav_block").toggleClass("active");
    });


});