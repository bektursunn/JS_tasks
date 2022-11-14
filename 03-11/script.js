const example = data => data.map(item => item * 2);
console.log(example([2,3,3,3,2]));

const numbers = [];
const fills = (value, length) => {
    for (let i=0; i < length; i++ ){
        numbers[i] = value;
    }
    console.log(numbers);
}
fills('a', 3);

const data = [1, 2, 3, 4, 5];
const myFunc = (numbers) => {
    for (let i=0; i <data.length; i++){
        data[i];
    }
    console.log(data);
}

myFunc(1,2, 3);

(i = 0; i < arr.length; i++) {
    document.write(arr[i] + ' ');
