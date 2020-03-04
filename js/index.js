$("ul li a").click(function() {
    $("ul li a.active").removeClass("active");
    $(this).addClass("active");
});