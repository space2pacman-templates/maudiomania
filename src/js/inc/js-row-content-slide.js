$(".js-row-content-slide").on("click", function () {
    $(this).find(".row__content").slideToggle();
    $(this).find(".row__arrow").toggleClass("row__arrow--down").toggleClass("row__arrow--up");
})