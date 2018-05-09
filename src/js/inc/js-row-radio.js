$(".js-row-radio").on("click", function () {
    $(".js-row-radio").removeClass("row__input-radio--active");
    $(".row__radio-button").removeClass("row__radio-button--active");
    $(".row__radio-value").removeClass("row__radio-value--active");
    $(".row__question").removeClass("row__question--active");
    $(this).addClass("row__input-radio--active");
    $(this).find(".row__radio-button").addClass("row__radio-button--active");
    $(this).find(".row__radio-value").addClass("row__radio-value--active");
    $(this).find(".row__question").addClass("row__question--active");
})