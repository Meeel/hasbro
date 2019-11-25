
//loader
$(window).load(function() {
    setTimeout(function(){
        $('#preloader').fadeOut('slow');
        $('body').css({'overflow':'visible'});
    },1500);
})
//demo 01
$("#modal01").animatedModal();
//demo 02
$("#demo02").animatedModal({
    animatedIn:'lightSpeedIn',
    animatedOut:'bounceOutDown',
    color:'#3498db',
    // Callbacks
    beforeOpen: function() {
        console.log("The animation was called");
    },
    afterOpen: function() {
        console.log("The animation is completed");
    },
    beforeClose: function() {
        console.log("The animation was called");
    },
    afterClose: function() {
        console.log("The animation is completed");
    }
});
$(document).ready(function() {

            /*Menu Móvil*/
             $('#btn-open-2').click(function(){
                $('#menu-movil').removeClass('animated fadeOutDown delay-menu');
                $('#menu-movil').addClass('animated fadeInUp delay-menu');
                $('#menu-movil').show();
            });
            $('#btn-open-3').click(function(){
                    $('#menu-movil').removeClass('animated fadeInUp delay-menu');
                    $('#menu-movil').addClass('animated fadeOutDown delay-menu');
            });
            /*-----------Desktop-----------*/
            // Btn up
            $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('.scrollup').fadeIn();
                } else {
                    $('.scrollup').fadeOut();
                }
            });
  
            $('.scrollup').click(function(){
                $("html, body").animate({ scrollTop: 0 }, 1000);
                return false;
            });
            //scroll down
            $(window).scroll(function(){
                if ($(this).scrollTop() < 100) {
                    $('.scrolldown').fadeIn();
                } else {
                    $('.scrolldown').fadeIn();
                }
            });
            $('.scrolldown').click(function(){
                $("html, body").animate({ scrollTop: 600}, 1000);
                return false;
            });
            //scroll down work
            $(window).scroll(function(){
                if ($(this).scrollTop() < 60) {
                    $('.scrolldown2').fadeIn();
                } else {
                    $('.scrolldown2').fadeIn();
                }
            });
            $('.scrolldown2').click(function(){
                $("html, body").animate({ scrollTop: 600}, 1000);
                return false;
            });

          
});

