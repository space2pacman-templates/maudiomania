$(".js-section-filter").each(function (i, item) {
    var $item = $(item);
    var $select = $item.find(".section__select");
    var $options = $select.parents('.js-section-filter').find(".section__options");
    var $buttonHide = $(this).find(".section__hide-list");

    $select.on("click", function () {
        $select.slideToggle();
        $options.slideToggle();
    });

    $buttonHide.on("click", function () {
        $select.slideToggle();
        $options.slideToggle();
    });
});