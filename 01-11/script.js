const number = [1,2,5,6,88,5];
let result = 0;
for (let index in number){
    result += number[index];
}
console.log(result);

const number1 = [1,2,3,4,5,6,7,8,9,10];
let result1 = 0;
for (let i = 0 ; number1[i];i++){
    result1 += number1[i]*number1[i];
}
console.log(result1);

const number2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result2 = []
for (let i=2; i<=20; i++){
    if (i % 2 === 0){
        result2.push(i);
    }
}
console.log(result2);