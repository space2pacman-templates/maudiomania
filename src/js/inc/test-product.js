var article;
var pidArray = [];
var itemArray = [];
var templateStart = '<div class="row row__list-item"><div class="row__text"><div class="row__value">';
var templateEnd = '</div><div class="row__value-desc">за 50 000 Р</div></div></div>';
var templateReset = '<div class="row js-product-list-reset"><div class="row__text"><div class="row__value">Выбрать</div></div></div>';
var itemKey = function (keyD) {
    return varnames[article][keyD][d[article][pidArray[x]][keyD]];
};
var templateRowList = '<div class="row js-row-list">' +
            '<div class="row__text">' +
                '<div class="row__caption row--inline">Цвет: </div>' +
                '<div class="row__value row--inline js-row-item">Выбрать</div>' +
                '<div class="row__arrow row__arrow--down"></div>' +
            '</div>' +
        '</div>' +
        '<div class="row__list wrapper__in--small js-return-arrow js-product-list-slide">' +
        templateReset +
            '<div class="js-product-list"></div>' +
        '</div>';
var templateListItem = [];

for (var articlekey in d) {
    article = articlekey;
}

for (var i = 0; i < d[article].length; i++) {
    if (d[article][i] == undefined) continue
    pidArray.push(i)
}

for (var i = 0; i < varnames_sort[article].length; i++) {
    itemArray[varnames_sort[article][i]] = [];
    for (var x = 0; x < pidArray.length; x++) {
        itemArray[varnames_sort[article][i]].push(d[article][pidArray[x]][varnames_sort[article][i]])
    }
}

for (var i = 0; i < varnames_sort[article].length; i++) {
    templateListItem.push(i)
    templateListItem[i] = [];

    for (var x = 0; x < varnames[article][varnames_sort[article][i]].length ; x++) {
        templateListItem[i].push(templateStart + varnames[article][varnames_sort[article][i]][x] + templateEnd);
    }
    $(".js-product").find(".js-row-box").prepend(templateRowList);
}

function rebuildList(index, thisRowListItem) {
    var thisIndex = varnames_sort[article][index];

    alert("KEY " + thisIndex + " ID: " + thisRowListItem);
    $(".js-row-box").find(".row__list-item").removeClass("js-active-row");
    for (var i = 0; i < pidArray.length; i++) {
        if (d[article][pidArray[i]][thisIndex] == thisRowListItem) {
            console.log(pidArray[i]);
            for (var j = 0; j < varnames_sort[article].length; j++) {
                var nextProductList = $(".js-row-box").find(".js-product-list").eq(j);

                for (var z = 0; z < varnames[article][varnames_sort[article][j]].length; z++) {
                    var valueInHtml = $(".js-row-box").find(".js-product-list").eq(j).find(".row__value").eq(z).html();
                    var valueInArray = varnames[article][varnames_sort[article][j]][d[article][pidArray[i]][varnames_sort[article][j]]];
                    
                    if (valueInHtml == valueInArray || index == j) {
                        nextProductList.find(".row__list-item").eq(z).addClass("js-active-row").closest(".js-product-list-slide").slideUp();
                    }
                }

                
            }
        }
    }

    for (var j = 0; j < varnames_sort[article].length; j++) {

        if (index != j && $(".js-row-box").find(".js-product-list").eq(j).find(".js-active-row").length <= 1) {
            var valueToCaption = $(".js-row-box").find(".js-product-list").eq(j).find(".js-active-row").find(".row__value").eq(0).html();
            alert("key: " + varnames_sort[article][j] + " index: " + $(".js-row-box").find(".js-product-list").eq(j).find(".js-active-row").index())
            
            $(".js-product").find(".js-row-box").find(".js-row-list").eq(j).find(".js-row-item").html(valueToCaption);
        }
        if (index != j) {
            var productList = $(".js-row-box").find(".js-product-list").eq(j);
            var activeRowProductList = productList.find(".js-active-row");
            var boolResult = false;

            productList.find(".row__list-item").hide();
            productList.find(".row__list-item.js-active-row").show();
            for (var i = 0; i < activeRowProductList.length; i++) {
                if (activeRowProductList.eq(i).find(".row__value").html() == $(".js-product").find(".js-row-box").find(".js-row-list").eq(j).find(".js-row-item").html()) {
                    boolResult = true;
                    break;
                } else {
                    boolResult = false;
                }
            }
            if (boolResult == false) {
                $(".js-product").find(".js-row-box").find(".js-row-list").eq(j).find(".js-row-item").html("Выбрать");
            }
        }
    }
}

for (var i = 0; i < varnames_sort[article].length; i++) {
    $(".js-row-box").find(".js-product-list").eq(i).append(templateListItem[i])
}
////////////////////////// Сортировка ключей
var newDKEY = [];
for (var i = 0; i < d[article].length; i++) {
    if (d[article][i] == undefined) continue;
    newDKEY.push(d[article][i]["23"]);
}
var superNewPid = [];
for (var i = 0; i < pidArray.length; i++) {
    superNewPid[newDKEY[i]] = pidArray[i];
}

$(".js-product-list-reset").on("click", function () {
    $(this).closest(".js-product-list-slide").slideUp();
    $(this).closest(".js-return-arrow").prev().find(".row__arrow").toggleClass("row__arrow--down").toggleClass("row__arrow--up");
    $(this).closest(".js-row-box").find(".js-product-list").find(".row__list-item").show();
    $(this).closest(".js-product").find(".js-row-box").find(".js-row-list").find(".js-row-item").html("Выбрать");
})

/////////////////////////
$(".js-product-list").each(function (index, item) {
    $(this).find(".row__list-item").on("click", function () {
        var thisRowListItem = $(this).index();
        
        if (window.groups == undefined) {
            var thisValue = $(this).find(".row__value").html();

            rebuildList(index, thisRowListItem);
            $(this).closest(".js-product").find(".js-row-box").find(".js-row-list").eq(index).find(".row__value").html(thisValue);
            $(this).closest(".js-return-arrow").prev().find(".row__arrow").toggleClass("row__arrow--down").toggleClass("row__arrow--up");
        } else {
            for (var n = 0; n < groups[article].length; n++) {
                if (groups[article][n]["pid"] == superNewPid[$(this).index()]) {
                    $(".js-product-slider").owlCarousel('destroy');
                    $(".js-product").find(".js-row-list").find(".js-row-item").html($(item).children().eq($(this).index()).find(".row__value").html());
                    $(".js-product-slider img").each(function (index, item) {
                        $(item).attr("src", "http://img.avcafe.ru" + groups[article][n]["images"][index]["path"]);
                    })
                    $(".js-product-list-slide").slideUp();
                    $(this).closest(".js-return-arrow").prev().find(".row__arrow").toggleClass("row__arrow--down").toggleClass("row__arrow--up");
                    $(".js-product-slider").owlCarousel({
                        items: 1
                    });
                }
            }
        } 
    })
})