$(function(){

    if (! flux.browser.supportsTransitions) {
        $('#warn').text('Flux Slider requires a browser that supports CSS3 transitions').show();
    }

    window.mf = new flux.slider('#slider', {
        autoplay: true,
        pagination: true,
        delay: 5000
    });

    $('.transitions').bind('click', function(event) {
        event.preventDefault();

        if ($(event.target).closest('ul').is('ul#trans3d') && ! flux.browser.supports3d) {
            $('#warn').text("The '"+event.target.innerHTML+"' transition requires a browser that supports 3D transforms");
            $('#warn').animate({ 
              opacity: 'show' 
            }, 1000, '', function() {
                $(this).animate({opacity: 'hide'}, 1000);
            });
            return;
        }

        window.mf.next(event.target.id);
    });

    $('#controls').bind('click', function(event) {
        event.preventDefault();

        var command = 'window.mf.'+event.target.id+'();';
        eval(command);
    });
});