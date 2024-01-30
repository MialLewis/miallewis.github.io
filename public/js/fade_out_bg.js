function resetLink(removeClass, newClass, newText, newUrl){
    let link = $('.' + removeClass);
    link.text(newText);
    link.on('click', function() {
        window.location = newUrl;
    });
    link.removeClass(removeClass);
    link.addClass(newClass);
}

function resetHeader(){
    resetLink('home-link', 'cv-link', 'RESUME', 'resume.html');
    $('.sep-placeholder').text('/');
    resetLink('travel-placeholder', 'travel-link', 'TRAVEL', 'travel.html');
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
