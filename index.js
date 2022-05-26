var keys = document.querySelectorAll('#keys');
var aud = document.querySelectorAll('audio');

var num = [65, 83, 68, 70, 71, 72, 74, 75, 76];

console.log(window.getComputedStyle(keys[0]).borderRadius)


document.body.addEventListener('keydown', function(e) {
    var val = e.keyCode;

    for(var i = 0; i < num.length; i++) {
        if(val == num[i]) {
            keys[i].classList.add('show');
            keys[i].style.border = '0';
            aud[i].play();
            aud[i].currentTime = 0;
        }
    }
})

document.body.addEventListener('keyup', function(e) {
    for(var i = 0; i < keys.length; i++) {
        keys[i].classList.remove('show');
        keys[i].style.border = '';
    }
})