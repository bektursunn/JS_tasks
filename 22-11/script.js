const btn = document.querySelectorAll('.btn');
const modal = document.querySelector('#modal');
const container = document.querySelector('#container');

const showNotification = (options) => {
    modal.innerHTML = `<div id="notification" class="${options.className}" >${options.text}
    <button id="icon" class="icon ">&#10006</button>
    <hr>
    <button id="btn-close" class="btn-close">Close</button>
    <button id="btn-save-changes" class="btn-save-changes">Save changes</button>
</div>`;

    container.classList.add('container');

    hideNotification()
}

const hideNotification = () => {
    const  timeID = setTimeout(() => {
        modal.innerHTML = '';
        container.classList.remove('container');
    }, 2000)

    document.querySelector('#btn-close').addEventListener('click', () => {
        modal.innerHTML = '';
        container.classList.remove('container');
    })

    document.querySelector('#icon').addEventListener('click', () => {
        modal.innerHTML = '';
        container.classList.remove('container');
        clearTimeout(timeID)
    })

    container.addEventListener('click', () => {
        container.classList.remove('container');
        clearTimeout(timeID);
        modal.innerHTML = '';
    })
}


btn.forEach(item => {
    item.addEventListener('click', () => {
        showNotification({
            className:item.dataset.class,
            text:item.dataset.text
        })
    })
})



