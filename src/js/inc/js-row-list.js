$(document).on("click", ".js-row-list", function () {
    $(this).next().slideToggle();
    $(this).find(".row__arrow").toggleClass("row__arrow--down").toggleClass("row__arrow--up");
});