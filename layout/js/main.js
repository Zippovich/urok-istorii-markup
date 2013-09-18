$(function() {
    function sameHeight($_els) {
        $_els.css('height', 'auto');
        var maxHeight = 0;
        $_els.each(function() {
            var elHeight = $(this).height();
            if (elHeight > maxHeight) {
                maxHeight = elHeight;
            }
        });
        $_els.each(function() {
            var $_this = $(this),
                elPaddingTop = parseInt($_this.css('padding-top')),
                elPaddingBottom = parseInt($_this.css('padding-bottom'));
            $_this.height(maxHeight - elPaddingTop - elPaddingBottom);
        });
    }
    
    function headerHeight() {
        var bodyWidth = $('body').width();
        if (bodyWidth > 1200 || bodyWidth < 768) {
            $('.header-main > div').css('height', 'auto');
        }
        else {
            sameHeight($('.header-main > div'));
        }
    }
    
    $(window).resize(function() {
        headerHeight();
    });
    
    headerHeight();
});
