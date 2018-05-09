$(".js-show-city-list").on("click", function () {
    $(this).closest(".js-city").next().slideToggle();
})