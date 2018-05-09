var options = {
    onComplete: function (val, e, element) {
        element.removeClass("error").addClass("valid")
    },
    onChange: function (val, e, element) {
        element.removeClass("valid").addClass("error")
    }
};

$('.js-mask-phone').mask('0 (000) 000-00-00', options);