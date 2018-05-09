$(".js-navigate").each(function () {
    $(this).find(".js-nav-link").on("click", function () {
        var index = $(this).index();
        var parent = $(this).closest(".js-navigate");
        var findContent = parent.find(".js-nav-content");
        
        findContent.slideUp();
        
        if (findContent.eq(index).hasClass("active") == true) {
            findContent.eq(index).removeClass("active");
            findContent.removeClass("active");
            findContent.eq(index).slideUp();
        } else {
            findContent.removeClass("active");
            findContent.eq(index).addClass("active");
            findContent.eq(index).slideDown();
        }
        
    })
})