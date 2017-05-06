(function ($) {
    $(document).ready(function() {
        
        $('.code-select li:first, .code-block:first').addClass('active');
        $('.code-block:not(:first)').addClass('hidden');
        
        $('.code-select li a').click( function() {
            
            event.preventDefault();
            
            $('.code-select li, .code-block').removeClass('active');
            $('.code-block').addClass('hidden');
            
            $(this).parent('li').addClass('active');
            $( $(this).attr('href') ).addClass('active').removeClass('hidden');
            
        });

    });
})(jQuery);