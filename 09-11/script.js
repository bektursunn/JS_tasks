const time = (func1) => {
    alert(func1);
}
setTimeout(time, 4000, 'hello world 4 second');
setTimeout(time, 8000, 'hello world 8 second');

const user_age =+ prompt('ваш год рождение');
const this_year =+ prompt('текущий год');
const ravno =  this_year - user_age;
alert(`вам ${ravno} лет`);
