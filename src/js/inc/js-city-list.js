$(".js-city-list").each(function () {
    var templateStart = '<div class="row row__list-item"><div class="row__text"><div class="row__value">';
    var templateEnd = '</div></div></div>';

    for (var i = 0; i < city_master.length ; i++) {
        for (city in city_master[i]) {
            $(this).append(templateStart + city_master[i][city] + templateEnd)
        }
    }
    $(this).find(".row__list-item").on("click", function () {
        var index = $(this).index()
        var thisCity = $(this).find(".row__value").html();

        for (cityIndex in city_master[index]) {
            if (city_slave[cityIndex] != undefined) {
                showListTwo(city_slave[cityIndex])
            }
            $(this).closest(".js-row-box").find(".js-row-item").html(thisCity)
            $(this).closest(".js-city-list").slideUp();
            $(this).closest(".js-return-arrow").prev().find(".row__arrow").toggleClass("row__arrow--down").toggleClass("row__arrow--up");
            console.log("user select delivery city id = " + cityIndex);
        }
        
    })

})

$(document).on("click", ".js-row-region", function () {
    $(this).next().slideToggle();
    $(this).find(".row__arrow").toggleClass("row__arrow--down").toggleClass("row__arrow--up");
});

function showListTwo(regionList) {
    var templateStart = '<div class="row row__list-item"><div class="row__text"><div class="row__value">';
    var templateEnd = '</div></div></div>';
    var thisCity = $(this).find(".row__value").html();
    
    $(".js-row-region").show();
    $(".js-city-region").each(function () {

        for (var i = 0; i < regionList.length ; i++) {
            for (region in regionList[i]) {
                $(this).append(templateStart + regionList[i][region] + templateEnd)
            }
        }

        $(this).find(".row__list-item").on("click", function () {
            var thisCity = $(this).find(".row__value").html();

            $(this).closest(".js-row-box").find(".js-row-region-caption").html(thisCity);
            $(this).closest(".js-city-region").slideUp();
            $(this).closest(".js-return-arrow").prev().find(".row__arrow").toggleClass("row__arrow--down").toggleClass("row__arrow--up");
            console.log("user select delivery region id = " + Object.keys(regionList[$(this).index()])[0]); 
        })
    })
}