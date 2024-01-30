$(function(){
    $('.home-link').click(function(){
        let homeLink = $('.home-link');
        homeLink.text('RESUME');
        homeLink.on('click', function() {
            window.location = 'resume.html';
        });
        $('.sep-placeholder').text('/');
        $('.travel-placeholder').text('TRAVEL');
        $('.header').width('55%');
        let baseBg = $('.base-bg');
        baseBg.on('animationend', function() {
            window.location = 'index.html';
        });
        baseBg.addClass('fade-bg');
    });
});
