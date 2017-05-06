(function ($) {
    $(document).ready(function() {
        
        $(document).on('scroll', document, function() {
            if (window.pageYOffset || document.documentElement.scrollTop > 10) {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        });

    });
})(jQuery);