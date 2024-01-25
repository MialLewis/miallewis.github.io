function passableBool(bool_val) {
    this.bool = bool_val;
}

export var clickListenerActive = new passableBool(false);
var myButton = document.getElementById('NZ_skip_button');
myButton.addEventListener('click', function() {
    myButton.style.display = 'none';
    clickListenerActive.bool = true;
});
