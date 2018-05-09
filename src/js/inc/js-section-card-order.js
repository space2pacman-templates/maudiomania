$(".js-section-card-order").each(function () {
    var close = $(this).find(".js-section-close");
    var section = $(this);

    close.on("click", function () {
        section.slideUp();
    })

})