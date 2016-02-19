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
        $("#nav").toggleClass("displayNav");
    });
    
    // sermons - hover title to load audio
    $("#sermons li span").hover(function() {
        $("#sermons li span").removeClass("selected");
        $(this).addClass("selected");
        $("#audio h3").text($(this).attr("data-title"));
        $("#audio .date").text($(this).attr("data-datefull"));
        $("#audio .series").text("Series: " + $(this).attr("data-series"));
        
        datenum = $(this).attr("data-datenum");
        $("#audio source").attr("src", "sermons/" + datenum + ".m4a");
        $("#audio param[name='flashvars']").attr("value", "file=sermons/" + datenum + ".m4a");
        $("#audio .downloadlink").attr("href", "sermons/" + datenum + ".m4a");
    });
}); })(jQuery);