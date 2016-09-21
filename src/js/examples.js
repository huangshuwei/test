

$(function () {
    $(".tabContainer").each(function() {
        $('<pre class="prettyprint"></pre>').text($.trim($(this).next().html())).hide().appendTo($(this));
    });

    $(".tabs a").click(function() {
        $(this).parent().siblings().removeClass('active').end().addClass('active');

        $(this).parents('ul').next().children().hide().eq($(this).parent().index()).show();
    });

    prettyPrint();

})