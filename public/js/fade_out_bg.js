function resetHeader(){
    let homeLink = $('.home-link');
    homeLink.text('RESUME');
    homeLink.on('click', function() {
        window.location = 'resume.html';
    });

    $('.sep-placeholder').text('/');

    let travelLink = $('.travel-placeholder');
    travelLink.text('TRAVEL');
    travelLink.on('click', function() {
        window.location = 'travel.html';
    });

    $('.header').width('55%');
};

$(function(){
    $('.home-link').click(function(){
        resetHeader();
        let baseBg = $('.base-bg');
        baseBg.on('animationend', function() {
            window.location = 'index.html';
        });
        baseBg.addClass('fade-bg');
    });
});
