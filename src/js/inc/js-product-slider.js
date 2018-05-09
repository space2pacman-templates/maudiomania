$(".js-product-slider").owlCarousel({
    items: 1
});

$(".product__arrow--right").on("click", function () {
    $(this).closest(".product__slider").find(".owl-next").click();
})

$(".product__arrow--left").on("click", function () {
    $(this).closest(".product__slider").find(".owl-prev").click();
})

$(".product__plus").on("click", function () {
    $(".js-product-slider .owl-stage-outer").height($(".js-product-slider .owl-item.active img").height());
    $(".js-product-slider .owl-stage-outer").prepend($(".js-product-slider .owl-item.active img").clone().addClass("product--draggable"));
    $(".js-product-slider .owl-stage").hide();
    $(".product--draggable").draggable();
    $(".product--draggable").draggable("enable");
    $(".product__nav").addClass("product__nav--disabled");
    $(".js-product-slider .owl-dots").addClass("product__nav--disabled");
    $(".product__minus").addClass("product__minus--enabled");
})

$(".product__minus").on("click", function () {
    $(".js-product-slider .owl-stage").show();
    $(".product--draggable").draggable("disable");
    $(".product--draggable").remove();
    $(".product__nav").removeClass("product__nav--disabled");
    $(".js-product-slider .owl-dots").removeClass("product__nav--disabled");
    $(".product__minus").removeClass("product__minus--enabled");
})