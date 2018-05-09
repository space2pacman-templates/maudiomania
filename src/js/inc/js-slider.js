$(".js-box").each(function () {

    var count = $(this).find(".box__product-item").length;
    var $parent = $(this).closest(".js-box");
    var owl = $(".box__product");
    var index = 0;
    
    // Инициализация плагина
    owl.owlCarousel({
        items: 1,
        margin: 20
    });

    // Событие на изменение позиции слайдера
    $parent.find(owl).on('changed.owl.carousel', function (event) {
        $parent.find(".box__count--bold").html(event.item.index + 1);
        // index = event.item.index;
    })
    
    // Кнопка вправо
    $parent.find(".box__arrows--right").on("click", function () {
        $parent.find(".owl-next").click();
        
        if (index == count) {
            $parent.find(owl).trigger('to.owl.carousel', 0);
            index = 1;
        } else {
            index++;
        }
        console.log(index)

    })

    // Кнопка влево
    $parent.find(".box__arrows--left").on("click", function () {
        $parent.find(".owl-prev").click();
        
        if (index == 0) {
            $parent.find(owl).trigger('to.owl.carousel', count - 1);
            index = count - 1;
        } else {
            index--;
        }
        console.log(index)

    })

    // Выводим на страницу сразу текущие значения
    $parent.find('.box__count--bold').html($parent.find(".owl-item.active").index() + 1)
    $parent.find('.box__count--thin').html("из " + count)
});