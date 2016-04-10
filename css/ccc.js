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
    $("nav a").click(function(){
        $("#nav-toggle").removeClass("active");
        $("nav").removeClass("displayNav");
    });
    
    // sermons - hover title to load audio
    $("#sermons li span").hover(function() {
        $("#sermons li span").removeClass("selected");
        $(this).addClass("selected");
        datenum = $(this).attr("data-datenum");
        $("#audio .selected").removeClass("selected");
        $("#audio [data-date='" + datenum + "']").addClass("selected");
    });

    // display forms
    function displayForm(formID) {
        $("body").addClass("formOpen");
        $(formID).show();
    }
    $(".infoLink").click(function(){
        displayForm("#info-form");
        return false;
    })
    $(".prayerLink").click(function(){
        displayForm("#prayer-form");
        return false;
    })

    // close when clicking outside form or hitting escape
    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
            $(".overlayForm").hide();
            $("body").removeClass("formOpen");
        }
    });
    $(".closeOverlay").click(function(){
        $(".overlayForm").hide();
        $("body").removeClass("formOpen");
    });

    // form submission validation
    $(".overlayForm input[type='submit']").click(function(){
        if ($(this).siblings("input[name='name']").val() == "") {
            window.alert("Please enter your name");
            return false;
        } else if ($(this).siblings("textarea[name='prayer_request']").val() == "") {
            window.alert("Please enter your prayer request");
            return false;
        } else if ($(this).siblings("textarea[name='comments']").val() == "") {
            window.alert("Please enter your questions or comments");
            return false;
        }

    });
}); })(jQuery);