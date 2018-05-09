$(".js-increment").each(function () {

    var plus = $(this).find(".js-increment-plus");
    var minus = $(this).find(".js-increment-minus");
    var count = $(this).find(".js-increment-count");
    var countStatic = Number(count.html());

    function increment(newCount) {
        if (newCount < 1) return
        countStatic = newCount;
        count.html(countStatic);
    }

    plus.on("click", function () {
        increment(countStatic + 1);
    })

    minus.on("click", function () {
        increment(countStatic - 1);
    })

})