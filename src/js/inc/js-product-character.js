$(".js-product-character").each(function () {
    $(this).on("click", function (e) {
        e.preventDefault();
        $(this).find(".product__character").slideToggle();
    });
    $(this).find("js-product-character-slide-up").on("click", function (e) {
        e.preventDefault()
        $(this).closest(".product__character").slideUp();
    })
})