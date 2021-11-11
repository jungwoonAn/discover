var w = window.innerWidth;

function prev() {
    $('.slide li:last').prependTo('.slide');
    $('.slide').css({ marginLeft: -w });
    $('.slide').stop().animate({ marginLeft: 0 }, 1000);
}

function next() {
    $('.slide').stop().animate({ marginLeft: -w }, 1000, function () {
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({ marginLeft: 0 });
    });
}

function slide() {
    $('.slide').stop().animate({ marginLeft: -w }, 1000, function () {
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({ marginLeft: 0 });
    });
}

// setInterval(slide, 5000);

$(function(){
    $('.prev').click(function () {
        prev();
    });
    
    $('.next').click(function () {
        next();
    });
});
