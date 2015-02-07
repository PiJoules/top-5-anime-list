// Smooth scrolling
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000, function(){
                    // Animation complete
                });
                return false;
            }
        }
    });
});


$(function(){
    $(document).on( 'scroll', function(){
        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
    $('.scroll-top-wrapper').on('click', scrollToTop);
});
function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 500);
};

$('a[rel=popover]').popover({
  html: true,
  trigger: 'hover',
  content: function () {
    return '<img style="width: 100%;" src="' + $(this).attr("href") + '" />';
  }
});

$(window).load(function(){
    if (sessionStorage.getItem("init") === null){
        $('#myModal').modal('show');
        sessionStorage.setItem("init", "1");
    }
});