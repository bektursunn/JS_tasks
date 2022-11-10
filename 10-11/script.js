const mona_liza = document.getElementById('MonaLiza');
const djeki_chan = document.getElementById('DjekiChan');

const showDjeki = (text) => {
    alert(text);
}

mona_liza.addEventListener('click',event => {
    showDjeki( 'MONA LIZA')
});

djeki_chan.addEventListener('click',event => {
    showDjeki('DJEKI CHAN')
});

const youtube = document.getElementById('YouTube');
const Blue = document.getElementById('blue');
const showYoutube = () => {
    alert('YouTube');
}
const showBlue = () => {
    alert('Habr');
}
youtube.onmouseover = showYoutube;
Blue.onmouseover = showBlue;


const arguments = ['amir', 'good boy', 'ailytanai', 'good girl'];
function showArguments() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr += arguments[i];
    }
    return arr;
}

console.log(showArguments(arguments));




