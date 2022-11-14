const images = document.querySelectorAll('#images img');
const qwerty = [];
const button = document.querySelector('#but');
for (let i = 0; i < images.length; i++) {
    images[i].onclick = () => {
        if (images[i].alt){
            qwerty.push(images[i].alt);
        }else{
            alert('тут пусто');
        }
    }
}
button.onclick = () => {
    console.log(qwerty);
}
