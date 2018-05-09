$(".shutter-link").on("click", function (e) {
    var shutter = $($(this).attr("href"));
    var container = $(".container");

    e.preventDefault();

    shutter.addClass("active");
    shutter.animate({ "right": "0px" });
    container.animate({ "left": "-310px" });
    container.addClass("active");
    $("body").addClass("shadow");
})

$(".shutter__close").on("click", function () {
    var container = $(".container");
    var thisShutter = $(this).closest(".shutter ");

    thisShutter.removeClass("active");
    thisShutter.animate({ "right": "-310px" });
    container.animate({ "left": "0px" });
    container.removeClass("active");
    $("body").removeClass("shadow");
})