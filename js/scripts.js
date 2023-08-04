$(document).ready(function() {
    function scrollHandler() {
        let bottomEdge = window.innerHeight + window.scrollY - 100
        if (bottomEdge >= window.innerHeight + 100) {
            $(".back-to-top").addClass("active");
        } else {
            $(".back-to-top").removeClass("active");
        };
        $(".hide").each(function(i, elem) {
            let elementOffset = $(elem).offset().top;
            if (bottomEdge > elementOffset) {
                $(elem).addClass("scroll-top").removeClass("hide");

            };
        });
    }
    scrollHandler();
    $(window).scroll(scrollHandler);
    $(".icon-play").click(function() {
        $(".video-image").addClass("hide");
        $(".icon-play").addClass("hide");
        $(".video").get(0).play();
    });
});
