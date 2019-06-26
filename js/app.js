var player = new Audio();


$(document).on('click', '.fig_audio', function() {
    $(".fig_audio").removeClass("play");
    $(".col_audio").removeClass("play");
    $(this).addClass("play");
    var src = $(this).attr("url");
    player.src = src;
    player.play();
});


$(document).on('click', '.col_audio', function() {
    $(".fig_audio").removeClass("play");
    $(".col_audio").removeClass("play");
    $(this).addClass("play");
    var src = $(this).attr("url");
    player.src = src;
    player.play();
});


$(document).on('click', '.tab', function() {
    $(".tab").removeClass("on");
    $(this).addClass("on");
    var id = $(this).attr("id");
    $(".content").css("display", "none");
    if (id == "tab1") {
        $("#content1").css("display", "block");
    } else if (id == "tab2") {
        $("#content2").css("display", "block");
    } else if (id == "tab3") {
        $("#content3").css("display", "block");
    } else if (id == "tab4") {
        $("#content4").css("display", "block");
    } else if (id == "tab5") {
        $("#content5").css("display", "block");
    }
});






