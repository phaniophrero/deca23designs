// Modal Left
$("#modalLeft_btn").click(function () {
    $("#modalLeft").css("display", "block");
});

$(".close").click(function () {
    $("#modalLeft").css("display", "none");
    $("#modalRight").css("display", "none");
});

$(document).click(function (event) {
    if (!$(event.target).closest(".details-certificate,#modalLeft_btn").length) {
        $("body").find("#modalLeft").css("display", "none");
    }
});

// Modal Right
$("#modalRight_btn").click(function () {
    $("#modalRight").css("display", "block");
});

$(document).click(function (event) {
    if (!$(event.target).closest(".details-certificate,#modalRight_btn").length) {
        $("body").find("#modalRight").css("display", "none");
    }
});
