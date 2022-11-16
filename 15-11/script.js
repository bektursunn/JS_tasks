const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const notification = document.querySelector('#notification');
const icon = document.querySelector('#icon');
const qwerty = document.getElementById('qwerty');

const showNotification = (options) => {
    notification.classList.remove('d-none');
    notification.classList.add(options.class);
    setTimeout(deleteNotification, 3000);
}
const showIcon = (x) => {
    icon.classList.remove('d-none');
    icon.classList.add(x.class);
    setTimeout(deleteNotification, 3000);
}

btn1.addEventListener('click', () => {
    showNotification({class:'primary'});
    showIcon({class:'icon'});
    notification.textContent ='A simple primary alert—check it out!';
})

btn2.addEventListener('click', () => {
    showNotification({class:'secondary'});
    showIcon({class:'icon'});
    notification.textContent = 'A simple secondary alert—check it out!';
})

btn3.addEventListener('click', () => {
    showNotification({class:'success'});
    showIcon({class:'icon'});
    notification.textContent = 'A simple success alert—check it out!';
})

icon.addEventListener('click', () => {
    deleteNotification()
})

const deleteNotification = () => {
    notification.classList.remove('primary', 'secondary', 'success' );
    icon.classList.add('d-none');
    notification.textContent = '';
}

qwerty.style.width = '400px';
