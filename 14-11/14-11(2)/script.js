const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const notification = document.querySelector('#notification');

const showNotification = (options) => {
    notification.classList.add(options.class);
    setTimeout(deleteNotification, 1500)
}
btn1.addEventListener('click', () => {
    showNotification({
        class:'primary',
        text: 'A simple primary alert—check it out!'
    })
})

btn2.addEventListener('click', () => {
    showNotification({
        class:'secondary',
        text: 'A simple secondary alert—check it out!'
    })
})

btn3.addEventListener('click', () => {
    showNotification({
        class:'success',
        text: 'A simple success alert—check it out!'
    })
})

const deleteNotification = () => {
    notification.classList.remove('primary', 'secondary', 'success' );
}