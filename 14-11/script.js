const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const message1 = document.querySelector('#alert-primary');
const message2 = document.querySelector('#alert-secondary');
const message3 = document.querySelector('#alert-success');

function showAlert1() {
    message1.classList.add('alert-1');
}
btn1.addEventListener('click', () => {
    message1.classList.remove('alert-1');
    setInterval(showAlert1, 2000);
})


function showAlert2() {
    message2.classList.add('alert-2');
}
btn2.addEventListener('click', () => {
    message2.classList.remove('alert-2');
    setInterval(showAlert2, 2000);
})


function showAlert3() {
    message3.classList.add('alert-3');
}
btn3.addEventListener('click', () => {
    message3.classList.remove('alert-3');
})
setInterval(showAlert3, 2000);