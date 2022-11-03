function hello(text) {
    alert(text);
}
hello('Hello JavaScript');

let numbers =+ prompt('введите цифру');
let sum = numbers*numbers
function result(sum) {
    alert(sum);
}
result(sum);

function getName(name = 'гость') {
    alert(`привет ${name}`);
}
getName('василий');