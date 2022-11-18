const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const notification = document.querySelector('#notification');
const icon = document.querySelector('#icon');
const container = document.querySelector('#container');
const qwerty = document.querySelector('#qwerty')

const elem = document.createElement('div');
elem.className = 'qwerty d-none';
elem.id = 'qwerty';
container.after(elem);

const showNotification = (options) => {
    elem.classList.remove('d-none');
    elem.classList.add(options.class);

    icon.addEventListener('click', () => {
        elem.classList.add('d-none');
        elem.classList.remove(options.class);
    })

    setTimeout( () => {
        elem.classList.add('d-none');
        elem.classList.remove(options.class);
    }, 1000)
}

btn1.addEventListener('click', () => {
    elem.innerHTML = '<div id="notification" >\'A simple primary alert—check it out!\'</div>\n' +
        '    <button id="icon" class="icon ">&#10006</button>'
    showNotification({class:'primary'});
})

btn2.addEventListener('click', () => {
    elem.innerHTML = '<div id="notification">\'A simple secondary alert—check it out!\'</div>\n' +
        '    <button id="icon" class="icon">&#10006</button>'
    showNotification({class:'secondary'});
})

btn3.addEventListener('click', () => {
    elem.innerHTML = '<div id="notification">\'A simple success alert—check it out!\'</div>\n' +
        '    <button id="icon" class="icon">&#10006</button>'
    showNotification({class:'success'});
})

