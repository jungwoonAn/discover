$(function(){
    $('.search_li').click(function(){
        $(this).addClass('active');
        $('.search_li').not(this).removeClass('active');
    });
});