(function($) { $(function() {
    // fixed nav 
    var $w = $(window);
    $w.scroll(function() {
        if ($w.scrollTop() > 312) {
            $("nav").css("position", "fixed");
        } else {
            $("nav").css("position", "relative");
        }
    });
    
    // mobile - display navigation/search when toggle button is clicked
    $("#nav-toggle").click(function(){
        $(this).toggleClass("active");
        $("nav").toggleClass("displayNav");
    });
    
    // sermons - hover title to load audio
    $("#sermons li span").hover(function() {
        $("#sermons li span").removeClass("selected");
        $(this).addClass("selected");
        datenum = $(this).attr("data-datenum");
        $("#audio .selected").removeClass("selected");
        $("#audio [data-date='" + datenum + "']").addClass("selected");
    });
}); })(jQuery);