let stalitsa = prompt('сталица Кыргыстана');
if (stalitsa === 'бишкек'){
    alert('правильно');
} else {
    alert('не знаете ?');
}

let regist = prompt('кто пришел ?');
if (regist === 'админ'){
    let password = prompt('пароль');
        if (password === 'черный властелин'){
        alert('привет админ');
        } else if (password === null){
        alert('вход отменен');
        } else {
            alert('пароль не верен');
        }
} else if(regist === null){
    alert('вход отменен');
} else {
    alert('я вас не знаю');
}

