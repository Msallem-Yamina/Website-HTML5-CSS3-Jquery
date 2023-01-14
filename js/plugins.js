$(document).ready(function(){
    // Trigger Nice Scroll Plugin
        // $('html').niceScroll();
    // change header height
    $('header').height($(window).height());
    // Scroll to Features
    $('main .arrow i').click (function (){
        $('html, body').animate({
            scrollTop : $('.features').offset().top
        }, 800);
    });
    // Show hidden items from works
    $('.works .show-more').click(function () {
       if ($('.work').hasClass('hidden')){
            $('.work').removeClass('hidden');
            $('.work.hidden').fadeIn(1000); 
       }
        $(this).css({
                'cursor': ' no-drop',
                'background-color': 'rgb(144 144 144 / 28%)',
                'border-color':'rgb(144 144 144 / 28%)',
                'color':'rgb(144 144 144 / 85%)'
        });
    });

    let right = $('.Testimonials i.right'),
        left = $('.Testimonials i.left');
    // Check Testimonials
    function checkClient() {
        $('.client:first').hasClass('active') ? left.fadeOut() : left.fadeIn();
        $('.client:last').hasClass('active') ? right.fadeOut() : right.fadeIn();
    }
    checkClient();
    $('.Testimonials main>i').click(function () {
        if ($(this).hasClass('right')) {
            // remove active client and set next client
            $('.Testimonials .active').fadeOut(400, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClient();
            });
        }else {
            $('.Testimonials .active').fadeOut(400, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClient();
            });
        }
    });
    $(this).scroll(function(){
       let x = $(this).scrollTop(),
           feat = $('.features').offset().top,
           win = $(window).innerWidth();
        $('.ligne').css({
            'width': x / 2
        });
       if(x >= 625){
         $('.top').fadeIn(500);
       }else {
        $('.top').fadeOut(500);
       }
       if ( x >= (feat-300)){
        $('.feat:nth-child(2)').fadeIn(900, function(){
            $('.feat:nth-child(3)').fadeIn(900, function(){
                $('.feat:nth-child(4)').fadeIn(900);
            });
        });
       }
    });
    $('.top').click(function(){
        $('html, body').animate({ scrollTop: "0" },1500);
    });
    $('nav .links i').click(function(e) {
        e.stopPropagation();
        $('ul').toggleClass('visible');
    })
    $('ul').click(function(e){e.stopPropagation();})
    $(this).click(function(e){
        if (e.target !== $('nav .links i') && e.target !== $('ul')) {
            if($('ul').hasClass('visible')){$('ul').removeClass('visible')}
        }
    });
    
});