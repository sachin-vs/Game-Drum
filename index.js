
var htmlAudioMap = {
    'w': 'sounds/tom-4.mp3', 'a': 'sounds/tom-3.mp3', 's': 'sounds/tom-2.mp3', 'd': 'sounds/tom-1.mp3',
    'j': 'sounds/snare.mp3', 'k': 'sounds/kick-bass.mp3','l': 'sounds/crash.mp3'
}
function onClick() {
    var audio = new Audio(htmlAudioMap[this.innerHTML]);
    audio.play();

}
var len = document.querySelectorAll('.drum').length
for (var i = 0; i < len; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', onClick);
}

function onPress(event) {

    var audio = new Audio(htmlAudioMap[event.key]);
    audio.play();
}
document.addEventListener('keydown', onPress);