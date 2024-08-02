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
    resetLink('travel-placeholder', 'travel-link', 'TRAVEL', 'travel/public/travel.html');
    $('.header').width('55%');
};

function fadeElement(element) {
    let opacity = element.css('opacity');
    let stepTime = 600 / (opacity / 0.05);
    let interval = setInterval(function() {
       if (opacity > 0) {
          opacity -= 0.05;
          element.css('opacity', opacity);
       } else {
          clearInterval(interval);
       }
    }, stepTime);
 }
 
$(function(){
    $('.home-link').click(function(){
        resetHeader();
        let baseBg = $('.base-bg');
        let baseBgOpacity = baseBg.css('opacity');
        $('html').css('--bg-opacity', baseBgOpacity);
        baseBg.on('animationend', function() {
            window.location = '/index.html';
        });
        $('.container').each(function() {
            fadeElement($(this));
        });
        $('.container-anim').each(function() {
            fadeElement($(this));
        });
        baseBg.addClass('fade-bg');
    });
});
