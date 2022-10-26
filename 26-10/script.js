/******* 1 ******/

let num = 10;
    num = ++num;
    num = ++num;
    num = --num;
console.log(num);

/******* 2 ******/

let num1 = 47;
    num1 += 7;
    num1 -= 18;
    num1 *= 10;
    num1 /= 15;
alert(num1);

/******* 3 ******/

let num2 = 1;
    num2 += 12;
    num2 -= 14;
    num2 *= 5;
    num2 /= 7;
    num2 = ++num2;
    num2 = --num2;
alert(num2) ;

/******* && ******/

let user_name = 'bektursun';
let user_age = 19;
let result1 = user_name ==='abdulla' && user_age >= 19; // false + true = false
let result2 = user_name ==='bektursun' && user_age <= 18; // true + false = false
let result3 = user_name ==='chamber' && user_age >= 17; //false + false = false
let result4 = user_name ==='bektursun' && user_age >= 19; // true + true = true
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

/******* || ******/

let user_name1 = 'abdulla';
let user_age1 = 18;
let result5 = user_name1 === 'sasha'||user_age1 >= 18; //false + true = true
let result6 = user_name1 === 'abdulla' || user_age1 <=17; // true + false = true
let result7 = user_name1 === 'abdulla' || user_age1 >=18; //true + true = true
let result8 = user_name1 === 'bektursun' || user_age1 >=19;// false + false = false
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);

