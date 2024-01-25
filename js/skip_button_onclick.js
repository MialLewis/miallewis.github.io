let myButton = document.getElementById('NZ_skip_button');
var clickListenerActive = false;
myButton.addEventListener('click', function() {
    myButton.style.display = 'none';
    clickListenerActive = true;
});

