const btn = document.querySelectorAll('button');
const modal = document.querySelector('#modal');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        modal.innerHTML = `<div id="notification" >${btn[i].dataset.text}<button id="icon" class="icon ">&#10006</button></div>`;
        document.querySelector('#notification').classList.add(btn[i].dataset.class);
        showNotification()
    })
}

const showNotification = () => {
    setTimeout(() => {
        modal.innerHTML = '';
    }, 2000)

    document.querySelector('#icon').addEventListener('click', () => {
        modal.innerHTML = '';
    })
}


