import { clickListenerActive } from "./js/skip_button_onclick.js";
document.addEventListener('scroll', function() {
    var myButton = document.getElementById('NZ_skip_button');
    var referenceObj = document.getElementById('NZ_START');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var hideAtPosition = referenceObj.offsetTop; // Change this value based on your requirement
    if ( clickListenerActive.bool == false ) {
        if (scrollPosition > hideAtPosition) {
            myButton.style.display = 'none';
        } else {
            myButton.style.display = 'block';
        }
    
    } else {
        clickListenerActive.bool = false;
    }
});
